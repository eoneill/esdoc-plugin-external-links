const minimatch = require('minimatch');
const cheerio = require('cheerio');

const defaultOptions = {
  includes: ['**/*.html'],
  query: 'a[href^="http://"], a[href^="https://"], a[href^="//"], a[href][ref*="external"]',
  target: '_blank'
};
let options;

function minimatchAny(fileName, patterns) {
  return toArray(patterns).some((pattern) => {
    if (minimatch(fileName, pattern)) {
      return true;
    }
  });
}

function toArray(items) {
  // cast to an array if it's not
  if (!Array.isArray(items)) {
    items = items && [].concat(items) || [];
  }
  return items;
}

function withItems(items, callback) {
  toArray(items).forEach(callback);
}

function withOptions(callback) {
  withItems(options, (options) => {
    callback(Object.assign({}, defaultOptions, options));
  });
}

exports.onStart = (event) => {
  console.log('onStart');
  // get the options
  options = event.data.option || {};
};

exports.onHandleHTML = (event) => {
  withOptions((options) => {
    const fileName = event.data.fileName;
    // if the file is not included or the file is excluded...
    if(!minimatchAny(fileName, options.includes) || minimatchAny(fileName, options.excludes)) {
      // abort
      return;
    }

    const $ = cheerio.load(event.data.html);

    $(options.query).attr('target', options.target);


    event.data.html = $.html();
  });
}
