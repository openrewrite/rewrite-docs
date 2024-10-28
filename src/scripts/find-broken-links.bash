#!/bin/bash

# Check if the folder path is provided
if [ -z "$1" ]; then
  echo "Usage: $0 /path/to/doc/folder"
  exit 1
fi

# Folder path
FOLDER=$1

# Output file for URLs and their status codes
OUTPUT_FILE="urls_with_status.txt"

# Clear the output file if it exists
> "$OUTPUT_FILE"

# Extract unique URLs, filter by domain, and check the HTTP status
grep -Eohr "(http|https)://[a-zA-Z0-9./?=_-]*" "$FOLDER" | sort | uniq | while read -r url; do
  # Only consider URLs that contain github.com or docs.openrewrite.com
  if [[ "$url" == *"github.com"* || "$url" == *"docs.openrewrite.org"* ]]; then
    echo "Checking: $url"
    http_status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
    echo "$url, $http_status" >> "$OUTPUT_FILE"
    # Wait for 1 second to avoid rate limiting
    sleep 0.5
  fi
done

echo "URLs with status codes saved to $OUTPUT_FILE"