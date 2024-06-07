const imgs = document.querySelectorAll('.headerslider ul img')
const prev = document.querySelector('.control_prev')
const next = document.querySelector('.control_next')
let n = 0;
function changeSlide(){
  for(let i = 0;i<imgs.length;i++){
   imgs[i].style.display = 'none';
  }

  imgs[n].style.display = 'block';
}
changeSlide();
 prev.addEventListener('click',(e)=>{
  if(n>0){
n--;
  }
  else{
n = imgs.length - 1;
  }
  changeSlide();
 })
 
 
 next.addEventListener('click',(e)=>{
  if(n<0){
    n--;
  }
  else{
    n = imgs.length -1;
  }
  changeSlide();
 })

 const scrollcontainer = document.querySelectorAll('.products');

for(const it of scrollcontainer){
  it.addEventListener('wheel',(e)=>{
e.preventDefault();
it.scrollLeft+=e.deltaY;
  })
}





