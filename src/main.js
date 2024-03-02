import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from './img/cross.png';
import './css/styles.css';
import { getImagesFromServer } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';

const search = document.querySelector('.search');
const loader = document.querySelector('.loader');
const submit = document.querySelector('.input-container');

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function initializeLightbox(images) {
  const container = document.querySelector('.gallery');
  container.innerHTML = createGalleryMarkup(images);
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
function showImages(searchValue) {
  showLoader();
  getImagesFromServer(searchValue)
    .then(data => {
      const images = data.hits.slice(0, 9);
      if (images.length < 1)
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
      initializeLightbox(images);
    })
    .catch(error => {
      console.error('Error while loading images:', error.message);
    })
    .finally(() => {
      hideLoader();
    });
}

submit.addEventListener('submit', evt => {
  evt.preventDefault();
  const value = search.value.trim();
  showImages(value);
});
