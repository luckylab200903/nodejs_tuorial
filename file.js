const vare=require('path')
console.log(vare.sep)
const newpath=vare.join('/hello','text.txt')
console.log(newpath)

const base=vare.basename(newpath)
console.log(base)


const absolute=vare.resolve(__dirname,'hello','text.txt')
console.log(absolute)