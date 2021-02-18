const searchSongs = () =>{
    const searchText = document.getElementById('searchText').value ;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data));
}

const displaySongs = (songs) =>{
    const songContainer = document.getElementById('songContainer');
    songContainer.innerHTML = '';
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML = `
                <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
                <audio controls>
                <source src="${song.preview}">
              </audio> 
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onclick = "getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                </div>
        `

        songContainer.appendChild(songDiv);
    });
}

const getLyric = (artist,title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    fetch(url)
    .then(res => res.json())
    .then(data => showLyric(data.lyrics))
}
const showLyric = lyric =>{
    const displayLyric = document.getElementById('displayLyric');
    displayLyric.innerText = '';
    displayLyric.innerText = lyric;

}
