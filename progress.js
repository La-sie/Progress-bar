const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn= document.getElementById('next');
const circle = document.querySelectorAll('.circle');

Let currentActive = 1;

nextBtn.addEventListener('click', () => {
     currentActive++;
     
     if (currentActive > circle.length){
         currentActive = circle.length;
       }
})

prevBtn.addEventListener('click', () => {
      currentActive--;
    
      if(currentActive < 1 ) {
      currentActive = 1;
}
      update();
})

function update() { 
     circle.forEach(( circle, idx) => { 
     if(idx < currentActive) { 
         circle.classList.add('active');
     }
     else { 
          circle.classList.remove('active');
     }
})

const active = document.querySelectorAll(.active');
}
