

const jsHamburger = document.getElementById('js-hamburger');
const Body = document.body;
// const jsGlobalMenu = document.getElementById('js-global-menu');
const hamburgerList = document.getElementById('c-hamburger')
jsHamburger.addEventListener('click', function(){
    // Body
    if (this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', true)
        hamburgerList.style.visibility = 'visible'
        Body.style.overflow = 'hidden'
        jsHamburger.setAttribute('aria-hidden', false)
    }else{
        this.setAttribute('aria-expanded', false)
        hamburgerList.style.visibility = 'hidden'
        jsHamburger.setAttribute('aria-hidden', 'true')
        Body.style.overflow = "visible";
    }
});
