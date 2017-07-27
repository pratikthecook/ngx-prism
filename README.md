# ngx-prism - Angular library built for Code Highlighting using Prismjs

[![npm version](https://badge.fury.io/js/ngx-prism.svg)](https://badge.fury.io/js/ngx-prism)
[![Build Status](https://travis-ci.org/pratikthecook/ngx-prism.svg?branch=master)](https://travis-ci.org/pratikthecook/ngx-prism)
[![Coverage Status](https://coveralls.io/repos/github/pratikthecook/ngx-prism/badge.svg?branch=master)](https://coveralls.io/github/pratikthecook/ngx-prism?branch=master)
[![dependency Status](https://david-dm.org/pratikthecook/ngx-prism/status.svg)](https://david-dm.org/pratikthecook/ngx-prism)
[![devDependency Status](https://david-dm.org/pratikthecook/ngx-prism/dev-status.svg?branch=master)](https://david-dm.org/pratikthecook/ngx-prism#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/pratikthecook/ngx-prism.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://pratikthecook.github.io/ngx-prism

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-prism` via:
```shell
npm install --save ngx-prism
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-prism`:
```js
map: {
  'ngx-prism': 'node_modules/ngx-prism/bundles/ngx-prism.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-prism';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-prism';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-prism';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Pratik Kelwalkar. Licensed under the MIT License (MIT)

