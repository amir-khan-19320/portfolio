#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
google-chrome-stable --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$root/public/Amir_Khan_Resume.pdf" \
  "file://$root/scripts/resume.html"
echo "Wrote $root/public/Amir_Khan_Resume.pdf"
