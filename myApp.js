let express = require('express');
let app = express();

app.use('/public',express.static(__dirname + '/public') ) 
/* exercise 1 */
console.log("Hello World")

/**exercise 2 */
app.get('/', (req, res) => {
    res.send("Hello Express")
})

/**exercise 3 */
app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})
 const absolutePath = __dirname + '/views/index.html'






























 module.exports = app;
