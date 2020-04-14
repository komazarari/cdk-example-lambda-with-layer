'use strict';
const uuid = require('uuid').v4;

exports.handler = async function(event) {
  console.log('Hello.');

  return `Hello, ${uuid()}`;
}
