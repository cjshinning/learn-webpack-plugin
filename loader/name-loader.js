const loaderUtils = require('loader-utils')

module.exports = function(source){
    this.cacheable && this.cacheable();
    const options = loaderUtils.getOptions(this) || {};

    source = source.replace(/\[name\]/g, options.name);
    return `module.exports = ${JSON.stringify(source)}`;
}