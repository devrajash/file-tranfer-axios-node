const axios = require("axios");
const { Blob } = require("buffer");

const fs = require('fs');

const fsPromises = fs.promises;

const  fetchZip1 =async () => {
const axiosInstance = axios.create({ baseURL:"http://localhost:7777"});

axiosInstance.defaults.responseType="arraybuffer";


const fileResponse3 = await axiosInstance.get("/")


let x = await Buffer.from(fileResponse3.data,'utf-8');
return x
console.log(fileResponse3);
//let z =new Blob([fileResponse1.data])
//fs.writeFile('./temp/hello.zip', z, {encoding: null}, (err) => {console.log(err)})
//fs.writeFile("./temp/hi.zip",x,(err)=>console.log(err))
//x.pipe(fs.createWriteStream("h.zip"))
//let p = await z.arrayBuffer();
//let q = await Buffer.from(p,'utf-8')
//await fsPromises.writeFile("./temp/blob.zip",q);
//await fsPromises.writeFile("./temp/fileresPonse3.zip", fileResponse3.data);
}
//fetchZip1();

/////////////////////

const express = require('express')
const app = express()

app.get("/",async (req,res)=>{

let buffData = await fetchZip1()
const file_after_download = 'from_server_2.zip';
  res.set('Content-Type', 'application/zip');
        res.set('Content-Disposition', `attachment; filename=${file_after_download}`);
        res.set('Content-Length', buffData.length);
        res.send(buffData);

})

app.listen(8080, function () {
        console.log('server 2 port is active at 8080');
})
