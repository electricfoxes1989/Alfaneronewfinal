#!/bin/bash
echo "Testing all session file URLs..."
echo "================================"

# Extract all unique URLs
grep -rh "session_file" client/src/pages/ --include="*.tsx" | \
  grep -o 'https://files.manuscdn.com/user_upload_by_module/session_file/[^"'\'' ]*' | \
  sort -u | \
  while read url; do
    # Clean up URL (remove any trailing characters)
    clean_url=$(echo "$url" | sed 's/[,;]$//')
    status=$(curl -s -o /dev/null -w "%{http_code}" "$clean_url" 2>&1)
    
    if [[ "$status" != "200" ]]; then
      echo "BROKEN ($status): $clean_url"
    fi
  done

echo ""
echo "Check complete!"
