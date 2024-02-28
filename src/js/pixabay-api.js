import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/cross.png';
import '../css/styles.css';

const search = document.querySelector('.search');
const button = document.querySelector('.button');
const loader = document.querySelector('.loader');

const KEY = '42554743-967d4a87bc85b22a32926b61b';
const BASE_URI = 'https://pixabay.com/api/';

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function getImagesFromServer(searchvalue) {
  const LINK = `${BASE_URI}?key=${KEY}&q=${searchvalue}`;
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error while fetching images from pixabay:', error.message);
      return [];
    });
}

function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
        tags,
      }) =>
        `
   <div class="gallery-item">
  <a href="${largeImageURL}" class="gallery-link">
    <img src="${webformatURL}" class="gallery-image" alt="${tags}"/>
  </a>
  <div class="gallery-info">
    <div class="info-container">
 <h4 class="info-title">Likes:</h4>
    <p class="info-p">${likes}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Views:</h4>
    <p class="info-p">${views}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Comments:</h4>
    <p class="info-p">${comments}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Downloads:</h4>
    <p class="info-p">${downloads}</p>
    </div>
  </div>
</div>
        `
    )
    .join('');
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

button.addEventListener('click', () => {
  const value = search.value.trim();
  showImages(value);
});
