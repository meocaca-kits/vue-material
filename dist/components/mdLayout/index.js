!function(e,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof define&&define.amd?define([],l):"object"==typeof exports?exports.VueMaterial=l():e.VueMaterial=l()}(this,function(){return function(e){function l(t){if(m[t])return m[t].exports;var o=m[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,l),o.loaded=!0,o.exports}var m={};return l.m=e,l.c=m,l.p="/",l(0)}({0:function(e,l,m){e.exports=m(19)},19:function(e,l,m){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-layout",e.extend(a.default))}Object.defineProperty(l,"__esModule",{value:!0}),l.default=o;var d=m(169),a=t(d);e.exports=l.default},61:function(e,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default={props:{mdTag:{type:String,default:"div"},mdRow:Boolean,mdRowXsmall:Boolean,mdRowSmall:Boolean,mdRowMedium:Boolean,mdRowLarge:Boolean,mdRowXlarge:Boolean,mdColumn:Boolean,mdColumnXsmall:Boolean,mdColumnSmall:Boolean,mdColumnMedium:Boolean,mdColumnLarge:Boolean,mdColumnXlarge:Boolean,mdHideXsmall:Boolean,mdHideSmall:Boolean,mdHideMedium:Boolean,mdHideLarge:Boolean,mdHideXlarge:Boolean,mdGutter:[String,Number,Boolean],mdFlex:[String,Number,Boolean],mdFlexXsmall:[String,Number,Boolean],mdFlexSmall:[String,Number,Boolean],mdFlexMedium:[String,Number,Boolean],mdFlexLarge:[String,Number,Boolean],mdFlexXlarge:[String,Number,Boolean],mdFlexOffset:[String,Number]},computed:{classes:function e(){var e={"md-row":this.mdRow,"md-row-xsmall":this.mdRowXsmall,"md-row-small":this.mdRowSmall,"md-row-medium":this.mdRowMedium,"md-row-large":this.mdRowLarge,"md-row-xlarge":this.mdRowXlarge,"md-column":this.mdColumn,"md-column-xsmall":this.mdColumnXsmall,"md-column-small":this.mdColumnSmall,"md-column-medium":this.mdColumnMedium,"md-column-large":this.mdColumnLarge,"md-column-xlarge":this.mdColumnXlarge,"md-hide-xsmall":this.mdHideXsmall,"md-hide-small":this.mdHideSmall,"md-hide-medium":this.mdHideMedium,"md-hide-large":this.mdHideLarge,"md-hide-xlarge":this.mdHideXlarge};return this.mdGutter&&("boolean"==typeof this.mdGutter?e["md-gutter"]=!0:this.mdGutter&&(e["md-gutter-"+this.mdGutter]=!0)),this.mdFlexOffset&&(e["md-flex-offset-"+this.mdFlexOffset]=!0),this.generateFlexClasses("","mdFlex",e),this.generateFlexClasses("xsmall","mdFlexXsmall",e),this.generateFlexClasses("small","mdFlexSmall",e),this.generateFlexClasses("medium","mdFlexMedium",e),this.generateFlexClasses("large","mdFlexLarge",e),this.generateFlexClasses("xlarge","mdFlexXlarge",e),e}},methods:{generateFlexClasses:function(e,l,m){e&&(e="-"+e),this[l]&&("boolean"==typeof this[l]?m["md-flex"+e]=!0:m["md-flex"+e+"-"+this[l]]=!0)}},render:function(e){return e(this.mdTag,{staticClass:"md-layout",class:this.classes},this.$slots.default)}},e.exports=l.default},98:function(e,l){},169:function(e,l,m){var t,o;m(98),t=m(61),o=t=t||{},"object"!=typeof t.default&&"function"!=typeof t.default||(o=t=t.default),"function"==typeof o&&(o=o.options),e.exports=t}})});