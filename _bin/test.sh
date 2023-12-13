#!/usr/bin/env sh

# To stop if any command fails.
set -e

# To stop on unset variables.
set -u

# To show what we are doing.
set -x

# To be always in project root.
cd "${0%/*}/.."

# To test if everything compiles.
tsc --pretty --noEmit -p ./AfterEffects/8.0
tsc --pretty --noEmit -p ./AfterEffects/9.0
tsc --pretty --noEmit -p ./AfterEffects/10.5
tsc --pretty --noEmit -p ./AfterEffects/11.0
tsc --pretty --noEmit -p ./AfterEffects/12.0
tsc --pretty --noEmit -p ./AfterEffects/13.0
tsc --pretty --noEmit -p ./AfterEffects/13.1
tsc --pretty --noEmit -p ./AfterEffects/13.2
tsc --pretty --noEmit -p ./AfterEffects/13.6
tsc --pretty --noEmit -p ./AfterEffects/13.8
tsc --pretty --noEmit -p ./AfterEffects/14.0
tsc --pretty --noEmit -p ./AfterEffects/14.2
tsc --pretty --noEmit -p ./AfterEffects/15.0
tsc --pretty --noEmit -p ./AfterEffects/16.0
tsc --pretty --noEmit -p ./AfterEffects/16.1
tsc --pretty --noEmit -p ./AfterEffects/17.0
tsc --pretty --noEmit -p ./AfterEffects/17.1
tsc --pretty --noEmit -p ./AfterEffects/18.0
tsc --pretty --noEmit -p ./AfterEffects/22.0
tsc --pretty --noEmit -p ./AfterEffects/22.3
tsc --pretty --noEmit -p ./AfterEffects/22.6
tsc --pretty --noEmit -p ./AfterEffects/23.0
tsc --pretty --noEmit -p ./Animate/13.0
tsc --pretty --noEmit -p ./Animate/22.0
tsc --pretty --noEmit -p ./Audition/2015.2
tsc --pretty --noEmit -p ./Audition/2017
tsc --pretty --noEmit -p ./Audition/2018
tsc --pretty --noEmit -p ./Illustrator/2015.3
tsc --pretty --noEmit -p ./Illustrator/2022
tsc --pretty --noEmit -p ./InDesign/2015.3
tsc --pretty --noEmit -p ./InDesign/2018
tsc --pretty --noEmit -p ./InDesign/2021
tsc --pretty --noEmit -p ./Photoshop/2015.5
tsc --pretty --noEmit -p ./Premiere/11.0
tsc --pretty --noEmit -p ./Premiere/12.0
tsc --pretty --noEmit -p ./Premiere/13.0
tsc --pretty --noEmit -p ./Premiere/14.0
tsc --pretty --noEmit -p ./Premiere/15.0
