var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequiree0b9;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequiree0b9=i);var n=i("2wOM3"),r=i("iytaA"),a=i("lTqjZ"),s=i("ffnMQ"),l=i("3Yd8H"),c=i("eyrSQ"),d=i("bfxWz");const f="storage-favorite",g="favorite-ingredients",u={_cocktails:JSON.parse(localStorage.getItem(f))||[],_ingredients:JSON.parse(localStorage.getItem(g))||[],get cocktails(){return this._cocktails},set cocktails(e){const t=this._cocktails.indexOf(e);t>-1?this._cocktails.splice(t,1):Array.isArray(e)?this._cocktails=e:this._cocktails.push(e),this._cocktails,localStorage.setItem(f,JSON.stringify(u.cocktails))},get ingredients(){return this._ingredients},set ingredients(e){const t=this._ingredients.indexOf(e);t>-1?this._ingredients.splice(t,1):Array.isArray(e)?this._ingredients=e:this._ingredients.push(e),this._ingredients,localStorage.setItem(g,JSON.stringify(u.ingredients))}};const p=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];l=i("3Yd8H");var y=i("jHABC"),v=i("jwKiR");var h=i("l3Yx2");i("65UmN"),(0,a.mobileMenu)(),(0,n.startPageBuild)(),(0,r.addHeroSearch)(p),function(e){const t=e.map((e=>`<option class="hero__option" value="${e}">${e}</option>`));l.refs.qwerty.insertAdjacentHTML("afterbegin",t.join(""))}(p),function(){const e=document.querySelector(".hero__input"),t=document.querySelector("#cocktails__abc");e.onfocus=function(){t.style.display="block",e.style.borderRadius="4px"};for(let o of t.options)o.onclick=function(){e.value=o.value,t.style.display="none",e.style.borderRadius="4px"};e.oninput=function(){o=-1;var i=e.value.toUpperCase();for(let e of t.options)e.value.toUpperCase().indexOf(i)>-1?e.style.display="block":e.style.display="none"};var o=-1;function i(e){if(!e)return!1;!function(e){for(var t=0;t<e.length;t++)e[t].classList.remove("active")}(e),o>=e.length&&(o=0),o<0&&(o=e.length-1),e[o].classList.add("active")}e.onkeydown=function(e){40==e.keyCode?(o++,i(t.options)):38==e.keyCode?(o--,i(t.options)):13==e.keyCode&&(e.preventDefault(),o>-1&&t.options&&t.options[o].click())}}(),l.refs.searchForm.addEventListener("submit",s.findCocktailBySearch),l.refs.list.addEventListener("click",c.searchByABC),l.refs.qwerty.addEventListener("click",(function(e){if(console.log(e.target.tagName),"OPTION"!==e.target.tagName)return;const t=e.target.value.toLowerCase();(0,y.getCocktailsByLetter)(t).then(v.cardBuilder).catch((e=>{console.log(e)}))})),l.refs.gallery.addEventListener("click",d.openModal),l.refs.gallery.addEventListener("click",(function(e){e.target.dataset.favorite&&(u.cocktails=e.target.id)})),l.refs.modal.addEventListener("click",(function(e){console.log(e.target),e.target.hasAttribute("data-modal-close")&&(0,h.closeModal)(),e.target.hasAttribute("data-cock-local")&&(console.log(e.target.textContent),e.target.textContent=u.cocktails.includes(e.target.name)?"Add to favorite":"Remove from favorite",u.cocktails=e.target.name)}));
//# sourceMappingURL=index.f37d027a.js.map
