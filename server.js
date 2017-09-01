var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 
 var articleone= {
  title: 'this is the title of article one',
  head: '<h> this is the heading of the article one</h>',
  content: '<p> A bench comprising Chief Justice Dipak Misra and Justices A M Khanwilkar and D Y Chandrachud considered the submissions of lawyer Prashant Bhushan that the plea required urgent hearing in view of the decision of the government to send Rohingyas back to their native land.</p>  '
 }
 function newtemplate(data){
 var Title=data.title;
 var Head=data.head;
 var Content=data.content;
 var Templateone=`<html>
    <head>
         <link href="/ui/style.css" rel="stylesheet" />
        <title>
           ${Title}
            
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
             <hr/>
         <h1>
           ${Head}
        </h1>
       ${Content}
      
        </div>
            
       </div>
    </body>
  </html>`;
  
  return newtemplate;
  
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res){
        res.send(newtemplate(articleone));
});
app.get('/article-two', function (req, res){
        res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res){
        res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
