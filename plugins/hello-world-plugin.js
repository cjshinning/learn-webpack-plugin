class HelloWorldPlugin{
    static defaultOptions = {
        options: false
    }
    constructor(options = {}){
        this.options = {...HelloWorldPlugin.defaultOptions, ...options};
        console.log(this.options.options);
    }
    apply(compiler){
        compiler.hooks.done.tap(
            'Hello World Plugin',
            (stats) => {
                console.log('Hello World');
            }
        )
    }
}
  
module.exports = HelloWorldPlugin;