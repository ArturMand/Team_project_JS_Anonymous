var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequiree0b9;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequiree0b9=r);var a=r("lTqjZ"),i=r("ffnMQ"),o=r("3Yd8H"),s=r("bfxWz"),l=(o=r("3Yd8H"),r("eaOTB")),d=r("aWx31");function c({strIngredient:e,strType:t}){return`<li class="cocktails__item">\n          <div class="favorite__box">\n            <h3 class="cocktails__title--secondary favorite__title--secondary">\n              ${e}\n            </h3>\n            <p class="favorite__text">${t}</p>\n            <div class="buttons">\n              <button class="btn--orange cocktails__btn cocktails__btn--first" type="button" data-modal-open>\n                Learn more\n              </button>\n              <button name="${e}" class="btn--white cocktails__btn" type="button" data-ingredient="btn">\n                Add to\n                <svg class="cocktails__svg" width="22" height="19">\n                  <use href="./image/sprite.svg#icon-heart"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n        </li>`}var f=r("3FENx");async function g(){const e=JSON.parse(localStorage.getItem(l.INGREDIENTS_KEY));if(0===e.length)return void(o.refs.textFavPageIngr.textContent="No ingredients added yet!");const t=e.map((e=>(0,d.getIngridient)(e))),n=await Promise.all(t);for(let e of n){const t=e.ingredients.map(c);o.refs.listFavIngr.insertAdjacentHTML("beforeend",t)}document.querySelectorAll("button[data-ingredient]").forEach((e=>{e.innerHTML=`Remove ${f.btnIcon.outerHTML}`}))}o=r("3Yd8H");var v=r("jK4XD");v=r("jK4XD");var u=r("4LNva"),b=r("cd942");r("65UmN"),(0,a.mobileMenu)(),g(),o.refs.listFavIngr.addEventListener("click",(function(e){e.target.dataset.ingredient&&((0,v.saveIngredient)(e),o.refs.listFavIngr.innerHTML="",g())})),o.refs.searchForm.addEventListener("submit",i.findCocktailBySearch),o.refs.gallery.addEventListener("click",s.openModal),o.refs.gallery.addEventListener("click",v.saveCocktail),o.refs.modal.addEventListener("click",u.modalControl),o.refs.modalIngr.addEventListener("click",b.modalIngrConrol);
//# sourceMappingURL=favorite-ingredients.ff2f576f.js.map
