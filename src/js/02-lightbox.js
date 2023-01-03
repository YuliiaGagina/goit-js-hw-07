import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);





const refs = {
    galleryContainer: document.querySelector('.gallery'),
    galleryItemEl: document.querySelector('.gallery__item'),
    galleryImageEl:document.querySelector('.gallery__image'),
    
}

function makeGalleryMarkups(pictures) {
    return pictures.map(picture => {
        return `<a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
</a>`
    }).join('');
}


refs.galleryContainer.innerHTML = makeGalleryMarkups(galleryItems);



refs.galleryContainer.addEventListener('click', showSliderOfGallery);


function showSliderOfGallery(event) {
     if (event.target.closest('.gallery__item')) {
      event.preventDefault();
      
         let picture = galleryItems.find(item => { return item.original === event.target.dataset.source })
         

  
        
    }
}

     
let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
    });
gallery.on('show.simplelightbox', function () {
    
});