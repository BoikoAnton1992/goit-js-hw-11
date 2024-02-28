import{i as c,S as l}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",g=document.querySelector(".search"),A=document.querySelector(".button"),m="42554743-967d4a87bc85b22a32926b61b",d="https://pixabay.com/api/";function u(s){const r=`${d}?key=${m}&q=${s}`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Image error!");return o.json()}).catch(o=>(console.error("Error while fetching images from pixabay:",o.message),[]))}function h(s){return s.map(({webformatURL:r,likes:o,views:n,comments:e,downloads:t,largeImageURL:i,tags:a})=>`
   <div class="gallery-item">
  <a href="${i}" class="gallery-link">
    <img src="${r}" class="gallery-image" alt="${a}"/>
  </a>
  <div class="gallery-info">
    <div class="info-container">
 <h4 class="info-title">Likes:</h4>
    <p class="info-p">${o}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Views:</h4>
    <p class="info-p">${n}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Comments:</h4>
    <p class="info-p">${e}</p>
    </div>
       <div class="info-container">
 <h4 class="info-title">Downloads:</h4>
    <p class="info-p">${t}</p>
    </div>
  </div>
</div>
        `).join("")}function p(s){const r=document.querySelector(".gallery");r.innerHTML=h(s),new l(".gallery a",{captionsData:"alt",captionDelay:250})}function y(s){u(s).then(r=>{const o=r.hits.slice(0,9);o.length<1&&c.error({message:"Sorry, there are no images matching <br>your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:f,theme:"dark",close:!1}),p(o)}).catch(r=>{console.error("Error while loading images:",r.message)})}A.addEventListener("click",()=>{const s=g.value.trim();y(s)});
//# sourceMappingURL=commonHelpers.js.map
