let songIndex = 0;
let audioELement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Warrio - Mortals", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songname: "Cielo - Huma-Huma", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songname: "DEAF KEY", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songname: "Different Heaven & EH!DE", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songname: "Janji-Heroes-Tonight", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songname: "Incomplete1", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songname: "Incomplete2", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songname: "Incomplete3", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songname: "Incomplete4", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songname: "Incomplete5", filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },

]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
})


// audioELement.play();
//Handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioELement.paused || audioELement.currentTime <= 0) {
        audioELement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioELement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to events
audioELement.addEventListener('timeupdate', () => {
    // seek bar update
    progress = parseInt((audioELement.currentTime / audioELement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioELement.currentTime = myprogressbar.value * audioELement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})