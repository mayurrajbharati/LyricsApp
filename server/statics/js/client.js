const lyricForm = document.querySelector('form');
const inp1 = document.querySelector('#input-1');
const inp2 = document.querySelector('#input-2');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');

lyricForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const song = inp1.value;
    const artist = inp2.value;

    messageOne.textContent = 'Loading....';
    messageTwo.textContent= '',
    messageThree.textContent= '',

    fetch('http://localhost:3000/lyrics?song='+ song + '&artist=' + artist).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error;
            }
            else{
                messageOne.textContent = 'Your song is: '+ data.Song_name;
                messageTwo.textContent = 'Artist is: '+ data.Artist;
                messageThree.textContent = 'Lyrics: '+data.lyrics;
                
            }
        })
    })
})