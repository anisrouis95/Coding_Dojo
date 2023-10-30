const video = document.getElementById("video");

// Function to play the video
function playVideo() {
    video.play();
}

// Function to pause the video
function pauseVideo() {
    video.pause();
}

// Add click event listeners to play and pause buttons
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);