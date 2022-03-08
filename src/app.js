// const http = require('http');
const express = require("express");
const app = express();
app.get('/',(req, res) =>{
    res.send("<h1>Home page</h1>")
})
app.get('/api/products', (req , res) =>{
    const data = [
        {id:1 , name : "Product A"},
        {id:2 , name : "Product B"}
    ];
    res.json(data);
})
// const server = http.createServer((req, res) => {
//     const url = req.url;

//     console.log(url);
//     if (url === "/api/product") {
//         const data = [
//             { id: 1, name: "Product A" },
//             { id: 2, name: "Product B" }
//         ];
//         res.end(JSON.stringify(data))
//     } else if (url === "/api/ports") {
//         console.log("API post");
//     } else {
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html><body><h1>Helo homepage</h1></body></html>");
//         res.end();
//     }
// })
const PORT = 3001;
server.listen(PORT, () => {
    console.log("Chay server thanh cong", PORT);
});