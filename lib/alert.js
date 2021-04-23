'use strict';

var 
  merge = require('lodash.merge'),
  filter = require('./filter');

module.exports = (opts = {}) => {

  var 
    messages;

  opts = getOptions(opts);

  return {
    postcssPlugin: 'postcss-on-alert',

    OnceExit (root, { result }) {
      // . . .
      if(result.warnings().length > 0){
        messages = filter(result.messages, opts);

        if(messages.length > 0){
          if(opts.onAlert != undefined && typeof opts.onAlert === 'function'){
            opts.onAlert(messages);
          }
        }
      }
      // . . .
    }   
  }
}

module.exports.postcss = true;


function getOptions(opts){
  const
  def = {}; 

  def.filterPlugins = [];
  def.filterTypeErrors = [];
  def.filterMessages = [];
  def.onAlert = undefined;    

  return merge(def, opts);  
}