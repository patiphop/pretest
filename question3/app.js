/* Start here */

const https = require('https');
var options = {
    hostname: 'codequiz.azurewebsites.net',
    port: 443,
    path: '/',
    method: 'GET',
    headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en,th-TH;q=0.9,th;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "upgrade-insecure-requests": "1",
        "cookie": "hasCookie=true",
        "Referer": "https://codequiz.azurewebsites.net/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    body : null
};

var req = https.request(options, (res) => {

    res.once('data' , res => {
        const resData = res.toString('ascii');
        const allDataText = resData.replace('!DOCTYPE', '');
        let tableData = allDataText.split('table')[1].slice(0 , allDataText.split('table')[1].length -1 );
        tableData = tableData.slice(1 , tableData.length -1)
        const dataSplit = tableData.split('><');
        const input = process.argv[2];
        if(!input ) {
            console.log('Please input name ');
        }
        dataSplit.forEach((element , index ) => {
            if(element.indexOf(input) !== -1 ) { /* When found this value */
                console.log(dataSplit[index + 1 ].split('td>')[1].split('</td')[0]);
            }
        });
        
    })
});

req.on('error', (e) => {
    console.error(e);
});

req.end();

