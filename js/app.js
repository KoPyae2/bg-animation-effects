const banner = document.querySelector('.banner');
const blocks = document.getElementsByClassName('blocks');

for(let i = 1; i < 400; i++){
    banner.innerHTML += "<div class='blocks'></div>";
   const duration = Math.random() * 5;
   // console.log(duration);
    blocks[i].style.animationDuration = 2 * duration + "s";
    // console.log(blocks[3]);
}

const section = document.querySelector('section');
setTimeout(()=>{
    section.classList.add('active');
},14000);



