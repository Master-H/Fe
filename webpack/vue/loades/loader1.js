// loader1，倒叙
module.exports = function (src) {
    console.log('loader src',src);
    src = src.split('').reverse().join('')
    return src;
}
  