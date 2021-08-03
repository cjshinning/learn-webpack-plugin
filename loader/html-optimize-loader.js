const Minimize = require('minimize')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
    var callback = this.async()
    this.cacheable && this.cacheable()

    var options = loaderUtils.getOptions(this) || {} 
    var minimize = new Minimize(options)
    console.log(source)
    console.log(minimize.parse(source))
    return minimize.parse(source, callback)
}