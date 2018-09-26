import * as create from './createElement';

(function(){

    const buildElement = (elementType, initialClass, elementText) => {

        const element = create.createElement(elementType);
        create.addClass(element, initialClass);
        create.addInput(element, elementText);
        create.hideElement(element);
        create.renderElement(element);

        return element;
    }

    const buttonVisibility = (activationHeight, element) => {

        const heightFromTop = document.documentElement.scrollTop;

        if(heightFromTop >= activationHeight){
            create.showElement(element);
        } else {
            create.hideElement(element);
        }
    }

    const button = buildElement("button", "scroll-button", "Scroll Up" );

    button.addEventListener("click", e => create.scrollToHeight(0));
    window.addEventListener("scroll", e => buttonVisibility(100, button), false);

})();
