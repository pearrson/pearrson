let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let kumnadu = document.querySelector('.kumnadu');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon2.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    kumnadu.style.fontSize = value  + 'px';
    if(scrollY >= 100){
    kumnadu.style.fontSize = 100  + 'px';
    kumnadu.style.position = 'fixed';
    if(scrollY >= 555){
        kumnadu.style.display = 'none';
    }else{
        kumnadu.style.display = 'block';
    }
    if(scrollY >= 255){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'

    }
   }

}
