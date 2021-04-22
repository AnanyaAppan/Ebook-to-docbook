const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/pdf', (req, res)=> {
    const xml = req.body.xml;
    var fs = require('fs');
    var writeStream = fs.createWriteStream("MyXML.xml");
    writeStream.write(xml);
    writeStream.end();
    const { exec } = require("child_process");
    exec("xsltproc -xinclude -o mybook.fo /usr/share/xml/docbook/stylesheet/docbook-xsl-ns/fo/docbook.xsl MyXML.xml", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    exec("fop mybook.fo -pdf MyBook.pdf", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    var data =fs.readFileSync('MyBook.pdf');
    res.contentType("application/pdf");
    res.send({"pdf":data});
});

// const xml = '<book xmlns="http://docbook.org/ns/docbook" xmlns:xi="http://www.w3.org/2001/XInclude" version="5.0"><title>lol</title></book>';
// var fs = require('fs');
// var writeStream = fs.createWriteStream("MyBook.xml");
// writeStream.write(xml);
// writeStream.end();
// const { exec } = require("child_process");
// exec("xsltproc -xinclude -o mybook.fo /usr/share/xml/docbook/stylesheet/docbook-xsl-ns/fo/docbook.xsl MyBook.xml", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
// exec("fop mybook.fo -pdf MyBook.pdf", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });