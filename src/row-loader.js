/**
 * 将文件内容转为string的loader
 * @param {*} source 
 * @returns 
 */
module.exports = function(source){
    const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
    
    return `export default ${json}`;
}