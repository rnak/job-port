const { override, fixBabelImports, addWebpackPlugin, addLessLoader } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(addWebpackPlugin(new AntdDayjsWebpackPlugin()));
module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#54A8FB' },
        }),
    );