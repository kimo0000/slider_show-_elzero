const imgs = Array.from(document.querySelectorAll('.container_slider img'));
const sliderCount = imgs.length;
let currentSlide = 1;
const slideNumber = document.getElementById('slider_number');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

nextButton.onclick = nextSlide;

prevButton.onclick = prevSlide;

const myList = document.createElement('ul');
myList.setAttribute('id', 'my_list');
for(let i = 1; i <= sliderCount; i++) {
   const my_list_item = document.createElement('li');
   my_list_item.setAttribute('data_index', i);
   my_list_item.appendChild(document.createTextNode(i));
   
   myList.appendChild(my_list_item);

}
document.querySelector('.indicator').appendChild(myList);
const my_list_ul = document.getElementById('my_list');
const my_list_li = Array.from(document.querySelectorAll('#my_list li'));
for(let i = 0; i < my_list_li.length; i++) {
    my_list_li[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data_index'));
        addActive();
        console.log(currentSlide)
    }
}


function nextSlide() {
 if(nextButton.classList.contains('disable')) {
     return false
 } else {
     currentSlide++;
     addActive();
 }
}

function prevSlide() {
  if(prevButton.classList.contains('disable')) {
      return false
  } else {
      currentSlide--;
      addActive();
  }
}



function addActive() {
    slideNumber.textContent = "slide# " + currentSlide + ' of ' + sliderCount;
    
    removeActive();

    imgs[currentSlide - 1].classList.add('active');
    my_list_ul.children[currentSlide - 1].classList.add('active');

    if(currentSlide == 1) {
        prevButton.classList.add('disable');
    } else {
        prevButton.classList.remove('disable');
    }

    if(currentSlide == sliderCount) {
        nextButton.classList.add('disable');
    } else {
        nextButton.classList.remove('disable');
    }
}

addActive();


function removeActive() {
    imgs.forEach(img => {
        img.classList.remove('active');
    })

    my_list_li.forEach(item => {
        item.classList.remove('active');
    })
}

