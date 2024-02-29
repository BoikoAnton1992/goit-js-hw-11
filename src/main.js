import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import cross from '../img/cross.png';
import { createGalleryMarkup } from './js/render-functions';
import { getImagesFromServer } from './js/pixabay-api';

const search = document.querySelector('.search');
const button = document.querySelector('.button');

function initializeLightbox(images) {
  const container = document.querySelector('.gallery');
  container.innerHTML = createGalleryMarkup(images);
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showImages(searchValue) {
  showLoader();
  getImagesFromServer(searchValue)
    .then(data => {
      const images = data.hits;
      if (images.length < 1) {
        iziToast.error({
          message:
            'Sorry, there are no images matching <br>your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          titleColor: '#ffffff',
          messageColor: '#ffffff',
          iconUrl: cross,
          theme: 'dark',
          close: false,
        });
      } else {
        initializeLightbox(images);
      }
    })
    .catch(error => {
      console.error('Error while loading images:', error.message);
    })
    .finally(() => {
      hideLoader();
    });
}

button.addEventListener('click', () => {
  const value = search.value.trim();
  showImages(value);
});
