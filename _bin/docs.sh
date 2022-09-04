#!/usr/bin/env sh

# To stop if any command fails.
set -e

# To stop on unset variables.
set -u

# To be always in project root.
cd "${0%/*}/.."

documented="AfterEffects/18.0 Animate/22.0 Audition/2018 Illustrator/2015.3 InDesign/2018 Photoshop/2015.5 Premiere/15.0"

for f in $documented; do
  echo "{\"types\":\"index.d.ts\",\"name\":\"$f\"}" > $f/package.json
done

npx typedoc --entryPointStrategy packages --validation.notExported false $documented

for f in $documented; do
  rm -f $f/package.json || echo;
done
