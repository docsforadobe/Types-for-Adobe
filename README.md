<div align="center">

# TypeScript types for Adobe Products

Repository for typedef files for various Adobe Creative Cloud products.

[<img src="https://i.imgur.com/VMx9MeE.jpg" width="560" height="315" />](http://youtu.be/h-c7A8pQzx8)

![gif](_resources/gif.gif)

</div>

---

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [TypeScript](https://typescriptlang.org/#download-links)
- [git](https://git-scm.com/)

---

## Your first script for eg. Adobe Illustrator

```bash
# create new folder
mkdir my-script
cd my-script

# install types-for-adobe
npm init -y
npm i types-for-adobe

# create tsconfig.json
printf '{"compilerOptions":{"module":"none","noLib":true}}' > tsconfig.json

# create index.ts and change reference types to Adobe product you're targeting
printf '/// <reference types="types-for-adobe/Illustrator/2015.3"/>\nalert(String(app));\n' > index.ts

# compile typescript files
tsc

# open Adobe Illustrator -> File -> Scripts -> Other Script -> and open index.js
```

---

## FAQ

### Where do these typedefs come from?

Everything in this project was generated through one of the following methods:

1. Using this [extendscript-xml-to-typescript converter](https://github.com/bbb999/extendscript-xml-to-typescript) tool to convert scripting dictionaries to typedef format
   - *note that this only works for a few select apps, and has been found to generate incorrect data in some cases*
2. By hand, through referencing Adobe's official release announcements & developer exploration through the API.

### Why are there different versions of docs per version of each host app?

This repo aims to maintain a history of typedefs _for each given version of each hostapp_.

This way, if you're developing a tool aimed at, say, Adobe After Effects v18.0, you can have your tool specifically use _those_ typedefs, and know that you're not using features that were introduced in a later version.

#### Why does this matter?

**For public, commercial tools:** with some hostapps, it's generally accepted that the app's user base will be spread out among multiple versions of the software. Targeting a slightly older version ensures wider adoption than focusing solely on the latest version.

**For internal, proprietary tools:** some companies mandate that all artists use a specific (older) version; having separate definitions for that version allows for this specific targeting.

### Which should I use?

This really depends on your needs; if you're hoping to release a commercial tool and assume that all users are using a specific version or newer, use that! If you need to leverage a feature added at a specific point, use those typedefs instead & let your users know this is the minimum supported version.

### Why are some release versions missing?

Two possible answers! Either

1. There haven't been any API changes for that given version, or
2. Nobody's taken the time to add typedefs for that version; feel free to [open a PR](https://github.com/docsforadobe/Types-for-Adobe/pulls)!

---

## Contributors

Thanks to [all of our contributors](https://github.com/docsforadobe/Types-for-Adobe/graphs/contributors) for helping make this project succeed!

Have something to add? Please [open a PR](https://github.com/docsforadobe/Types-for-Adobe/pulls)!

---

## Publish New Versions

To publish a new version of this project on npm for use in projects, please follow the steps below:

**1. Auth and Access**

- Ensure you are logged in to your npmjs.com account with `npm login` and follow the prompts to complete your login
- Ensure your npmjs.com account has access to publish to the npm package, if not, reach out to an admin for access

**2. Version and Publish**

- Version up the `package.json`
- Run `npm publish`
- Push the commit with the new version to GitHub

---

## More typings

- [Adobe's offical typings](https://github.com/Adobe-CEP/Samples/tree/master/TypeScript/typings)
- [BrightShadow/CSInterface-TS](https://github.com/BrightShadow/CSInterface-TS)
