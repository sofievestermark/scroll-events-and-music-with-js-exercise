//initialized a new rellax object
const rellax = new Rellax('.rellax');

// function that is enabled on scrolling
window.onscroll = function() {
const audIst = document.getElementById("audioIstanbul");
const audFir = document.getElementById("audioFirenze");
const audPa = document.getElementById("audioParis");

const istanbulArea = document.getElementById("istanbul");
const parisArea = document.getElementById("paris");
const firenzeArea = document.getElementById("firenze");
    
const videoIst = document.getElementById("videoIstanbul");
const offsetTop = videoIst.getBoundingClientRect().top;
const offsetBottom = videoIst.getBoundingClientRect().bottom;
    

    if( offsetTop <= 840 && offsetTop > -240) {
        videoIst.play();
    } else if ( offsetBottom < 250 || offsetBottom > 1390) {
        videoIst.pause();
    }
    
    if ( parisArea.getBoundingClientRect().top > 585 || parisArea.getBoundingClientRect().bottom < 58 )
    {
        audPa.pause();
    } else
    {
        audPa.play();
    }
    
    if ( istanbulArea.getBoundingClientRect().top > 685 || istanbulArea.getBoundingClientRect().bottom < 58 )
    {
        audIst.pause();
    } else
    {
        audIst.play();
    }
    
    if ( firenzeArea.getBoundingClientRect().top > 585 || firenzeArea.getBoundingClientRect().bottom < 58 )
    {
        audFir.pause();
    } else
    {
        audFir.play();
    }
      
}


