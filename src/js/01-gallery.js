// import * as basicLightbox from 'basiclightbox'; 
const basicLightbox = require('basiclightbox');

console.log(basicLightbox);

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(basicLightbox);

const refs = {
    galleryEl: document.querySelector('.gallery'),
    galeryLink: document.querySelector('.gallery__link'),
    galerymgEl: document.querySelector('.gallery__image'),
    galeryItem: document.querySelector('.gallery__item'),
    
} 


function makeGalleryMarkups(galleryItems) {
    return galleryItems.map(pic => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${pic.preview}"
      data-source="${pic.original}"
      alt="${pic.description}"
    />
  </a>
</div>`
    }).join(' ');
};
refs.galleryEl.innerHTML = makeGalleryMarkups(galleryItems);

refs.galleryEl.addEventListener('click', showBigPictureOnWholeScreen);

    

let instance;
function showBigPictureOnWholeScreen(event) {
 
   
    if (event.target.closest('.gallery__link')) {
      event.preventDefault();
      
  const picture = galleryItems.find(item =>{return item.original === event.target.dataset.source })
   instance = basicLightbox.create(`
  <img src="${picture.original}" width="800" height="600">`)
 
      instance.show();
    
      document.addEventListener('keydown', closeModal); 
        
    }
}

 function closeModal(evt) {
       
          if (evt.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeModal);
            
            
           
          }
          
 }
        
//     work with localstorage
// const userInput = document.querySelector('.user-input');
// const textEl = document.querySelector('.user-text');
// const form = document.querySelector('.form');
// const button = document.querySelector('.buton')




// const loadFromLS = key => {
//   const value = localStorage.getItem(key);
//   try {
//     return JSON.parce(value);
//   } catch {
//     return value
//   }
  
// }

// const info = {};
// form.addEventListener('submit', (evt) => {
//   evt.preventDefault();


  
  
//   info[userInput.name] = userInput.value;
//   value = JSON.stringify(info);
//   localStorage.setItem('information', value );
//   makeNwInfo() 
//    evt.target.reset();
// });

// let newInfor;
// const getInfoFronLS = () => {
//   const information = JSON.parse(localStorage.getItem('information')) ;
//   console.log(information);
//   for (let prop in information) {
//     newInfor = information[prop];
//   }

// }

// getInfoFronLS();

//   function makeNwInfo() {

//   const newInfoEl = document.createElement('p');
//   textEl.append(newInfoEl )
//   textEl.innerHTML = newInfor;
 
// }

// console.log(info);
// makeNwInfo()
 
