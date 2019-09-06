/**
 * 入口js文件放在最外层
 */

const {add, multiply} = require('./js/mathUtil');
console.log(add(1, 2));
console.log(multiply(1, 2));

require('./css/normal.css');
require('./css/special.less');

document.writeln("hello webpack");
