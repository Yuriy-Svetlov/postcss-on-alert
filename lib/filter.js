"use strict";

module.exports = function(messages, opts) {
  messages = filterPlugins(messages, opts.filterPlugins);
  messages = filterTypeErrors(messages, opts.filterTypeErrors);
  messages = filterMessages(messages, opts.filterMessages);

  return messages;
};

function filterPlugins(messages, filterPlugins){
  return messages.filter(message => filterPlugins.includes(message.plugin) == false);
}


function filterTypeErrors(messages, filterTypeErrors){
  return messages.filter(message => filterTypeErrors.includes(message.type) == false);
}


function filterMessages(messages, filterMessages){
  return messages.filter(message => filterMessages.includes(message.text) == false);
}