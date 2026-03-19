#!/bin/bash
set -e

DIST_DIR="dist"
CMS_PUBLIC="cms/public"

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: $DIST_DIR not found. Run 'npm run build' first."
  exit 1
fi

mkdir -p "$CMS_PUBLIC/uploads"

if [ -d "$CMS_PUBLIC/assets" ]; then
  rm -rf "$CMS_PUBLIC/assets"
fi

cp "$DIST_DIR/index.html" "$CMS_PUBLIC/index.html"

if [ -d "$DIST_DIR/assets" ]; then
  cp -r "$DIST_DIR/assets" "$CMS_PUBLIC/assets"
fi

for f in "$DIST_DIR"/*; do
  fname=$(basename "$f")
  if [ "$fname" != "index.html" ] && [ "$fname" != "assets" ]; then
    cp -r "$f" "$CMS_PUBLIC/$fname"
  fi
done

echo "Frontend built and copied to $CMS_PUBLIC (uploads preserved)."
