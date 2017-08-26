# TypeScript definitions for Adobe Products
## Usage
```
mkdir test
cd test
npm init -y
npm i pravdomil/types-for-adobe
printf '{ "compilerOptions": { "module": "none", "noLib": true, "types": ["types-for-adobe/photoshop"] }, "exclude": ["node_modules"] }' > tsconfig.json
printf 'app.activeDocument' > index.ts
# open index.ts your favourite TypeScript editor and start scripting
```

## Note
Declaration files is genereted by https://github.com/pravdomil/extendscript-xml-to-typescript converter.

Definitions was created in summer 2017 by [Pravdomil.com](https://pravdomil.com).
You can [buy a beer for him](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BCL2X3AFQBAP2&item_name=express-php-fpm%20Beer).
