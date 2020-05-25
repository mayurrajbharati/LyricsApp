const request = require('postman-request');
const lyrics_get = require('./lyrics.js')

lyrics_get('sugar','Maroon5',(error,data)=>{
    if(error){
        return console.log(error);
    }
    console.log(data);
})