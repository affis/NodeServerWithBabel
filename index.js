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

function transformToJSON(data)
{
  let jsonLyrics = {}
  for(let i = 0; i<data.length ;i++)
  {
    let word = data[i].toLowerCase();
    if(jsonLyrics.hasOwnProperty(word))
    {
      jsonLyrics[word] += 1;
    }
    else {
      jsonLyrics[word] = 1;
    }
  }
  return jsonLyrics;
}

fs.readFile('./dummy.txt', 'utf8', function(err, contents){
    let dataRead = contents.replace(/(\[.*?\])|\(|\)/g,"").split(/\s/g);
    let lyrics = removeEmptyStrings(dataRead);
    console.log(transformToJSON(lyrics));
    // console.log(lyrics[30]);
})

// let lyrcisJson = JSON.stringify(lyrics);

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
