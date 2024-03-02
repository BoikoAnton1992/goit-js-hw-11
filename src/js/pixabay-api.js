const KEY = '42554743-967d4a87bc85b22a32926b61b';
const BASE_URI = 'https://pixabay.com/api/';

export default function getImagesFromServer(searchvalue) {
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
    });
}
