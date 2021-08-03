const xml2js = require('xml2js');
const parser = new xml2js.Parser();

module.exports = function(source){
    this.cacheable && this.cacheable();
    parser.parseString(source, (err, result) => {
        this.callback(err, !err && `module.exports = ${JSON.stringify(result)}`);
    })
}