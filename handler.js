'use strict';

const ipsum = require('lorem-ipsum');
const fs = require('fs')

module.exports.ipsum = async (event, context) => {
  let dict = fs.readFileSync('./dictionary', 'utf-8')
  return {
    statusCode: 200,
    body: ipsum({
    	words: dict.split(/\s+/)
    }),
  };
};
