'use strict';

const video = document.querySelector('.video-screen');
const playBtn = document.querySelector('.video-toggle');
const sliders = document.querySelectorAll('.video-slide');
const skiBtn = document.querySelectorAll('[data-skip]');
const progressBar = document.querySelector('.video-progress__bar');
const progressDiv = document.querySelector('.video-progress');

//function to start and pause video
function togglePlay() {
    const videoState = video.paused ? 'play' : 'pause';
    video[videoState]();
}
function handleToggleBtn() {
    const icon = this.paused ? '►' : '❚ ❚';
    playBtn.textContent = icon;
}

//funcion to skip video
function skipVideo() {
    const skipTime = this.dataset.skip;
    video.currentTime += parseFloat(skipTime);
}

//function to handle the sliders controls
function handleSliders() {
    video[this.name] = parseFloat(this.value);
}

//function to handle progressbar
function handleProgressBar() {
    const videoTime = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${videoTime}%`;
}
function clickInProgressBar(e) {
    const barTime = (e.offsetX / progressDiv.offsetWidth) * video.duration;
    video.currentTime = barTime;
}

///EventListeners
video.addEventListener('pause', handleToggleBtn);
video.addEventListener('click', togglePlay);
video.addEventListener('play', handleToggleBtn);
playBtn.addEventListener('click', togglePlay);
skiBtn.forEach(btn => {btn.addEventListener('click', skipVideo)})
sliders.forEach(slider => slider.addEventListener('change', handleSliders))
video.addEventListener('timeupdate', handleProgressBar);
progressDiv.addEventListener('click', clickInProgressBar);
let mousedown = false;
progressDiv.addEventListener('mousemove', (e) => mousedown && clickInProgressBar(e) );
progressDiv.addEventListener('mouseup', () => mousedown = false );
progressDiv.addEventListener('mousedown', () => mousedown = true );

//Note: the volume and the speed i do not know if they work, and the slide not sure also

