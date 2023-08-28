// const { readFileSync,writeFileSync } = require('fs');
  
// const first=readFileSync('./hello/first.txt','utf8')
// const second=readFileSync('./hello/second.txt','utf8')

// // console.log(first,second)


// writeFileSync('./hello/third.txt',
// `this is my third text file ${first},${second}`)

const {readFile , writeFile}=require('fs');
// readFile('./hello/first.txt','utf-8',(err,result)=>{
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })


// writeFile('./hello/fourth.txt',(err,result)=>{
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     console.log(req)
//     res.write("welcome to my homepage")
//     res.end()
// })

// server.listen(3000)

// const http=require('http')
// const server=http.createServer((req,res)=>{
    
//  })


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("this is my homepage");
    } else if (req.url === '/about') {
        res.end("this is my about page");
    } else {
        res.end(
        `<h1>this is some other page</h1>
        <a href="/">back home</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
