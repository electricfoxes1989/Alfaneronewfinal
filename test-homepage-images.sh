#!/bin/bash
echo "Testing Homepage Image URLs..."
echo "=============================="

# Extract unique URLs from Home.tsx
grep "session_file" client/src/pages/Home.tsx | \
  grep -o 'https://files.manuscdn.com/user_upload_by_module/session_file/[^"'\'' ]*' | \
  sort -u | \
  while read url; do
    clean_url=$(echo "$url" | sed 's/[,;]$//')
    status=$(curl -s -o /dev/null -w "%{http_code}" "$clean_url")
    filename=$(basename "$clean_url")
    
    if [[ "$status" == "200" ]]; then
      echo "✓ OK ($status): $filename"
    else
      echo "✗ BROKEN ($status): $filename"
      echo "   URL: $clean_url"
    fi
  done

echo ""
echo "Test complete!"
