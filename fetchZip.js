const axios = require("axios");
const { Blob } = require("buffer");
const  logZip = ()=>{
axios.get("http://localhost:7777/").then(res=>{
console.log(res)
})
}

/////////////////////////////////////////////////////////////////
const fs = require('fs');

const fsPromises = fs.promises;

const  fetchZip1 =async () => {
const axiosInstance = axios.create({ baseURL:"http://localhost:7777"});

axiosInstance.defaults.responseType="arraybuffer";

const fileResponse = await axiosInstance.get("/",{ 
    responseType: "arraybuffer",
})

const fileResponse1 = await axios({
    url: "http://localhost:7777/",
    method: "GET",
   // responseType: "arraybuffer",
});

const fileResponse3 = await axiosInstance.get("/")

//console.log(fileResponse)
//console.log(fileResponse1)
let x = await Buffer.from(fileResponse1.data,'utf-8');
//console.log(fileResponse.data);
//console.log(fileResponse1.data)
console.log(fileResponse3);
//let z =new Blob([fileResponse1.data])
//fs.writeFile('./temp/hello.zip', z, {encoding: null}, (err) => {console.log(err)})
//fs.writeFile("./temp/hi.zip",x,(err)=>console.log(err))
//x.pipe(fs.createWriteStream("h.zip"))
//let p = await z.arrayBuffer();
//let q = await Buffer.from(p,'utf-8')
//await fsPromises.writeFile("./temp/blob.zip",q);
await fsPromises.writeFile("./temp/fileresPonse3.zip", fileResponse3.data);
}
fetchZip1();
