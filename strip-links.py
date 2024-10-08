import re

file_path = '/Users/mikesol/Desktop/code/rewrite-docs/docs/changelog/8-33-4-Release.md'

def remove_links_from_markdown(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    
    # Regex to match inline Markdown links: [text](url)
    inline_link_regex = r'\[([^\]]+)\]\([^\)]+\)'

    # Regex to match reference-style Markdown links: [text]: url
    reference_link_regex = r'\[([^\]]+)\]:[^\n]+'

    # Remove inline links
    content_without_inline_links = re.sub(inline_link_regex, r'\1', content)

    # Remove reference-style links
    content_without_links = re.sub(reference_link_regex, '', content_without_inline_links)

    # Write the modified content back to a new file or the original one
    with open(file_path, 'w') as file:
        file.write(content_without_links)

remove_links_from_markdown(file_path)