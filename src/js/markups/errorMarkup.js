export function errorMarkup() {
  return `<div>
            <h3 class="cocktails__title">Sorry, we didn't find
              <br>
                any cocktail for you
            </h3>
            <picture>
                <source srcset="./image/sorry-desktop@1x.jpg 1x, ./image/sorry-desktop@2x.jpg 2x, ./image/sorry-desktop@3x.jpg 3x"
                    media="(min-width:1200px)">
                <source srcset="./image/sorry-tablet@1x.jpg 1x, ./image/sorry-tablet@2x.jpg 2x, ./image/sorry-tablet@3x.jpg 3x"
                    media="(min-width:768px)">
                <source srcset="./image/sorry-mobile@1x.jpg 1x, ./image/sorry-mobile@2x.jpg 2x, ./image/sorry-mobile@3x.jpg 3x"
                    media="(max-width:767px)">
                <img src='./image/sorry-desktop@1x.jpg' alt='sorry'>
            </picture>
        </div>`
}