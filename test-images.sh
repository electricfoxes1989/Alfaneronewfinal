#!/bin/bash
# Test sample URLs to see which return errors
urls=(
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/NqNZqndNDPtCEvMn.jpg"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/BeFpMqIwMubUrphG.mp4"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/IiUAUYJiXRhTbEva.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/OuLwgGhBLQcwPBMb.webp"
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/mnKkFwRRCBTRoFAp.jpg"
)

for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$status - $url"
done
