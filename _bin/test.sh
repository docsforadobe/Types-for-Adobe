#!/usr/bin/env sh

# To stop if any command fails.
set -e

# To stop on unset variables.
set -u

# To show what we are doing.
# set -x

# To be always in project root.
cd "${0%/*}/.."

# To test if everything compiles.
for app in AfterEffects Animate Audition Illustrator InDesign Photoshop Premiere; do
  for version in `ls $app`; do
    echo "Testing $app/$version"
    tsc --pretty --noEmit -p ./$app/$version
  done
done

echo "Testing PlugPlugExternalObject"
tsc --pretty --noEmit -p ./PlugPlugExternalObject
echo "Testing JavaScript"
tsc --pretty --noEmit -p ./JavaScript
