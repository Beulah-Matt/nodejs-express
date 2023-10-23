require('dotenv').config()
let express = require('express');
let app = express();

//exercise 6
app.get('/json', (req, res, next) => {

    let string = req.method + " " + req.path + " - " + req.ip;

    console.log (string )
    next();
});

//exercise 7
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send(req.time)
})

//exercise 4 
app.use('/public',express.static(__dirname + '/public') ) 

/* exercise 1 */
console.log("Hello World")

/**exercise 2 */
// app.get('/', (req, res) => {
//     res.send("Hello Express")
// })

/**exercise 3 */
app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})
 const absolutePath = __dirname + '/views/index.html'

//exercise 5
app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE == 'uppercase'){
      return  res.json({"message": "HELLO JSON"})
    }else{res.json({"message": "Hello json"})}
})





























 module.exports = app;
