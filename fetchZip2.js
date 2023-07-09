const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

async function downloadZip () {  
  const url = 'http://localhost:8080/'
  const path = Path.resolve(__dirname, 'temp', 'FromServer2FetchZip2.zip')
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
//    writer.on('finish', resolve)
//    writer.on('error', reject)
      response.data.on("end",resolve);
      response.data.on("error",reject);
  })
}

downloadZip()
