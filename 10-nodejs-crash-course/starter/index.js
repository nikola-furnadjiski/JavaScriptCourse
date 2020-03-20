const fs = require('fs'); //fs is short for 'file system'
const http = require('http');
const url = require('url');

//this is the synchronous file read, means page will stop (freeze) until results is being returned, and since NodeJs is single-thread it will freeze for all users.
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8'); 
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    // console.log('Someone did access the server!');

    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    console.log(pathName);


    // PRODUCT OVERVIEW
    if(pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/templates/template-overview.html`,'utf-8', (err, data) => {
            let overviewOutput = data;

            fs.readFile(`${__dirname}/templates/template-card.html`,'utf-8', (err, data) => {

                const cardsOutput = laptopData.map(el => replaceTemplate(data, el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);

                res.end(overviewOutput);
            });
        });

    } 
    
    // LAPTOP DETAIL
    else if(pathName === '/laptop' && id >= 0 && id < laptopData.length) {
        res.writeHead(200, { 'Content-type': 'text/html'});
        
         //this is asynchronous file read
        fs.readFile(`${__dirname}/templates/template-laptop.html`,'utf-8', (err, data) => {
            const laptop = laptopData[id];
            const output = replaceTemplate(data, laptop);

            res.end(output);
        });
    }   

    // IMAGES 
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName) ) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg'});
            res.end(data);
        });
    }
    
    // URL NOT FOUND
    else {
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('URL was not found on the server!'); 
    }


});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests now');
});

function replaceTemplate(originalHtml, laptop) {
    let output = originalHtml.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);

    return output;
}

