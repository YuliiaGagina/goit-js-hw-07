import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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



function showBigPictureOnWholeScreen(event) {
  
   
    if (event.target.closest('.gallery__link')) {
      event.preventDefault();
      
  const picture = galleryItems.find(item =>{return item.original === event.target.dataset.source })
       
  const instance = basicLightbox.create(`
  <img src="${picture.original}" width="800" height="600">`)
      

     instance.show()
      document.addEventListener('keydown', closeModal); 
         function closeModal(evt) {
       
          if (evt.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeModal);
            
            
           
          }
          
        }
    }
}




 
