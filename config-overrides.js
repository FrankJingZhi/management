/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @return: 在create-react-app中配置ant-design，less和主题
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-04-20 15:31:03
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 配置主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {  },
  }),
);