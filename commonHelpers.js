import{i as l,S as f}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",m="42554743-967d4a87bc85b22a32926b61b",g="https://pixabay.com/api/";function u(i){const r=`${g}?key=${m}&q=${i}`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Image error!");return o.json()}).catch(o=>{console.error("Error while fetching images from pixabay:",o.message)})}function A(i){return i.map(({webformatURL:r,likes:o,views:n,comments:e,downloads:t,largeImageURL:s,tags:c})=>`
   <div class="gallery-item">
  <a href="${s}" class="gallery-link">
    <img src="${r}" class="gallery-image" alt="${c}"/>
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
        `).join("")}const h=document.querySelector(".search"),a=document.querySelector(".loader"),p=document.querySelector(".input-container");function y(){a.classList.remove("is-hidden")}function v(){a.classList.add("is-hidden")}function w(i){const r=document.querySelector(".gallery");r.innerHTML=A(i),new f(".gallery a",{captionsData:"alt",captionDelay:250})}function L(i){y(),u(i).then(r=>{const o=r.hits.slice(0,9);o.length<1&&l.error({message:"Sorry, there are no images matching <br>your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:d,theme:"dark",close:!1}),w(o)}).catch(r=>{console.error("Error while loading images:",r.message)}).finally(()=>{v()})}p.addEventListener("submit",i=>{i.preventDefault();const r=h.value.trim();L(r)});
//# sourceMappingURL=commonHelpers.js.map
