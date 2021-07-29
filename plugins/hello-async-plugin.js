class HelloAsyncPlugin{
    apply(compiler){
        compiler.hooks.emit.tapAsync(
            'HelloAsyncPlugin',
            (compilation, callback) => {
                setTimeout(() => {
                    console.log('Done with async work...');
                    callback();
                }, 1000)
            }
        )
    }
}

module.exports = HelloAsyncPlugin;