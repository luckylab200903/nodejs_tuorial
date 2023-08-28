const lod=require('./lodash')
const item=[1,[2,[3,[4]]]]
const _=lod.flattenDeep(item);
console.log(_)