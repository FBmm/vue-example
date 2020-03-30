const express = require('express')
const fs = require('fs');
const path = require('path');
var router = express.Router();
const app = express();
const http = require('http');
const port = 8081;

router.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

(function readFiles(dir) {
  const mockPath = path.resolve(__dirname, '../', dir);
  fs.readdirSync(mockPath)
    .filter(file => !/^mock.js\s*/.test(file))
    .forEach(file => {
      if (/\.js\b/.test(file)) {
        require(path.resolve(mockPath, file.replace(/\.js\b/, '')))(router)
      } else {
        readFiles(path.resolve(mockPath, file));
      }
    })
})('node-mock')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router);

var httpServer = http.createServer(app);
httpServer.listen(port, () => console.log(`Example app listening on port ${port}!`))
