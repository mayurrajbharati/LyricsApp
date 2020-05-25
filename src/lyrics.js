const request = require('postman-request');

const lyrics_get = (song,artist,callback)=>{
    const url = 'http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track='+ song +'&q_artist='+ artist +'&apikey=19ce464362b98fdd91890c9d93454d48';
    request({url:url, json:true},(error,response)=>{
        if(error){
            callback('No Internet',undefined);
        }
        else if(response.body.message.header.status_code=='404'){
            callback('Invalid Search',undefined);
        }
        else{
            callback(undefined,response.body.message.body.lyrics.lyrics_body);
        }
})
}
module.exports= lyrics_get;