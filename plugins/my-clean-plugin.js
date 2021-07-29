const del = require('del');
const path = require('path');

class MyCleanPlugin{
    apply(compiler){
        compiler.hooks.emit.tap('MyCleanPlugin', compilation => {
            // const stats = compilation.getStats();
            // const assets = stats.toJson().assets || [];
            // const assetList = assets.map(asset => {
            //     return asset.name;
            // });
            // console.log(assetList);
            del.sync([path.join(process.cwd(), 'dist')]);
            // del.sync([path.join(process.cwd(), 'dist'), path.join(process.cwd(), 'test')]);
            console.log('成功清除dist文件夹！');
        });
    }
}

module.exports = MyCleanPlugin;