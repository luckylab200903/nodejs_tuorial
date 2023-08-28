const os=require('os')
const user=os.uptime()
console.log(user)

const currentos={
    name:os.type(),
    release:os.release(),
    totalme:os.totalmem(),
    uptym:os.uptime()
}
module.exports=currentos;