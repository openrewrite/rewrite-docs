from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import MarkdownHeaderTextSplitter
import os
import getpass
from langchain_community.vectorstores import FAISS
import faiss
from langchain_community.docstore.in_memory import InMemoryDocstore
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings
import time

if not os.environ.get("OPENAI_API_KEY"):
    os.environ["OPENAI_API_KEY"] = getpass.getpass("Enter API key for OpenAI: ")

time_start = time.time_ns()
# Step 1: Load documents with file path metadata
documents_to_be_ingested = []
# Walk every file in the docs directory
for root, dirs, files in os.walk("./docs"):
    for file in files:
        if file.endswith(".md"):
            file_path = os.path.join(root, file)
            try:
                docs = TextLoader(file_path).load()
                # Attach file path to metadata for each document
                for doc in docs:
                    doc.metadata["file_path"] = file_path
                documents_to_be_ingested.extend(docs)
            except AttributeError as AE:
                print(file_path)

# Step 2: Split the loaded Markdown documents by headers
headers_to_split_on = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]
markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on)
split_documents = []

for doc in documents_to_be_ingested:
    splits = markdown_splitter.split_text(doc.page_content)
    # Update metadata of each split document instead of creating new ones
    for split_doc in splits:
        # Copy metadata from the original document
        split_doc.metadata = doc.metadata.copy()
        split_documents.append(split_doc)

time_end_split = time.time_ns()
print(f"Time to split: {(time_end_split - time_start) / 1_000_000} ms")

# Step 3: Setup vector store and index chunks
embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
index = faiss.IndexFlatL2(len(embeddings.embed_query("hello world")))
vector_store = FAISS(
    embedding_function=embeddings,
    index=index,
    docstore=InMemoryDocstore(),
    index_to_docstore_id={},
)
_ = vector_store.add_documents(documents=split_documents)

time_end = time.time_ns()

print(f"Time to index: {(time_end - time_end_split) / 1_000_000} ms")
print(f"Total time: {(time_end - time_start) / 1_000_000} ms")

#save local vector_store before (TODO) Publish to S3
vector_store.save_local("faiss_index")

print("Vector store saved locally with {} documents".format(len(split_documents)))
