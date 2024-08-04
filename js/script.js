let navbar = document.querySelector('.header .navbar');
let menuBtn = document.getElementById('menu-btn');
let mainVid = document.querySelector('.main-video');

// Toggle the navbar on button click
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}

// Close the navbar on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Video functionality
document.querySelectorAll('.course-3 .box .video video').forEach(vid => {
    vid.onclick = () => {
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }
});

// Close the video
document.querySelector('#close-vid').onclick = () => {
    mainVid.classList.remove('active');
}
