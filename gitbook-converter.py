import re

file_to_replace = '/Users/mikesol/Desktop/code/rewrite-docs/docs/running-recipes/popular-recipe-guides/migrate-to-jakarta-ee-10.md'

with open(file_to_replace, 'r') as file:
    content = file.read()

# Strings that can be replaced in a 1:1 manner
replacements = {
    '{% hint style="info" %}': ':::info',
    '{% hint style="note" %}': ':::note',
    '{% hint style="warning" %}': ':::warning',
    '{% hint style="danger" %}': ':::danger',
    '{% hint style="success" %}': ':::tip',
    '{% tabs %}': '<Tabs>',
    '{% endtab %}': '</TabItem>',
    '{% endtabs %}': '</Tabs>',
    '{% code overflow="wrap" %}': '',
    '{% endcode %}': '',
    '{% endhint %}': ':::',
}

for old_string, new_string in replacements.items():
    content = content.replace(old_string, new_string)

# Flags to track replacements
tabs_replaced = False
video_replaced = False

# Replacements that require more advanced patterns
moderne_image_link_pattern = r'\[!\[Moderne Link Image\]\((.*?)\)\]\((.*?)\)'
tab_title_pattern = r'\{% tab title="([^"]+)" %\}'
code_pattern = r'\{% code title="([^"]+)" %\}\s*```([a-zA-Z]+)'
image_pattern = r'!\[([^\]]+)\]\((\.\./)*/\.gitbook/assets/([^\)]+)\)'
gitbook_figure_pattern = r'<figure><img src="(?:\.\./)*\.gitbook/assets/([^"]+)" alt="([^"]*)"><figcaption>(.*?)</figcaption></figure>'
video_embed_pattern = r'{% embed url="([^"]+)" %}'

# Replaces markdown links to Moderne with a href that works in Docusaurus
def replace_moderne_image_link(match):
    moderne_button_path = '/static/img/ModerneRecipeButton.png'
    url = match.group(2)

    html_block = (
        f'<a href="{url}">\n'
        f'    <img\n'
        f'    src={{require("{moderne_button_path}").default}}\n'
        f'    alt="Moderne Link Image"\n'
        f'    width="50%"\n'
        f'    />\n'
        f'</a>'
    )
    return html_block

# Replaces {% tab title="Gradle (Kotlin)" %} to:
# <TabItem value="gradle-kotlin" label="Gradle (Kotlin)"
def replace_tab(match):
    global tabs_replaced

    # Extract the title value (e.g., "Gradle (Kotlin)")
    title = match.group(1)  

    # Replace spaces with dashes and remove parenthesis
    value = title.lower().replace(" ", "-").replace("(", "").replace(")", "")
    
    tabs_replaced = True

    return f'<TabItem value="{value}" label="{title}">\n'

# Finds {% code title="build.gradle.kts" %}, extracts the title from it
# and then adds it to the following ```language line
def replace_code(match):
    # Extract the title value (e.g., "build.gradle.kts")
    title = match.group(1)  

    # Extract the language (e.g., "kotlin")
    language = match.group(2)

    return f'```{language} title="{title}"'

# Finds ![Some caption](../.gitbook/assets/update-import.png) and replaces it with:
# <figure>
#  ![](./assets/update-import.png)
#  <figcaption>_Some caption_</figcaption>
# </figure>
def replace_image(match):
    alt_text = match.group(1)
    image_path = match.group(3)
    
    print(image_path)

    figure_block = (
        f"<figure>\n"
        f"  ![](./assets/{image_path})\n"
        f"  <figcaption>_{alt_text}_</figcaption>\n"
        f"</figure>"
    )
    return figure_block

# Replaces <figure><img src="../../../.gitbook/assets/some-name.png" alt="some-alt"><figcaption>caption</figcaption></figure>
# With:
# <figure>
#   ![some-alt](./assets/some-name.png)
#   <figcaption>_caption_</figcaption>
# </figure>
def replace_figure(match):
    image_name = match.group(1)  # Extract the image name (e.g., "some-name.png")
    alt_text = match.group(2)    # Extract the alt text (e.g., "some-alt")
    caption = match.group(3)     # Extract the caption text

    figure_block = (
        f"<figure>\n"
        f"  ![{alt_text}](./assets/{image_name})\n"
        f"  <figcaption>{'_' + caption + '_' if caption else ''}</figcaption>\n"
        f"</figure>"
    )
    return figure_block

# Replaces {% embed url="someUrl" %} with:
# <ReactPlayer url='someUrl' />
def replace_video_embed(match):
    global video_replaced

    embedded_url = match.group(1)
    video_block = f"<ReactPlayer url='{embedded_url}' />\n"

    video_replaced = True

    return video_block

# Replace all the things
content = re.sub(moderne_image_link_pattern, replace_moderne_image_link, content) # Must come before other image replacement
content = re.sub(tab_title_pattern, replace_tab, content)
content = re.sub(code_pattern, replace_code, content)
content = re.sub(image_pattern, replace_image, content)
content = re.sub(gitbook_figure_pattern, replace_figure, content)
content = re.sub(video_embed_pattern, replace_video_embed, content)

# If any tab replacements were made, add the import lines at the top
if tabs_replaced:
    imports = "import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n"
    content = imports + content

# If any video replacements were made, add the import lines at the top
if video_replaced:
    imports = "import ReactPlayer from 'react-player';\n\n"
    content = imports + content

with open(file_to_replace, 'w') as file:
    file.write(content)
