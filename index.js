import http from 'http';
import fs from 'fs';

function removeEmptyStrings(data)
{
  let cleanData = [];
  for(let i = 0; i < data.length; i++)
    {
    if(data[i])
      {
        cleanData.push(data[i]);
      }
    }
    return cleanData;
}

fs.readFile('./dummy.txt', 'utf8', function(err, contents){
    let dataRead = contents.replace(/(\[.*?\])|\(|\)/g,"").split(/\s/g);
    let lyrics = removeEmptyStrings(dataRead);
    console.log(lyrics);
    // console.log(lyrics[30]);
})
//http.get()

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
