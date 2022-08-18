window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //how far I scrolled
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    //the full height of the page
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    //the percentage I've scrolled
    let scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + "%";
}