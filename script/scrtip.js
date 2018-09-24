(function(){
    
    const addClass = (element, cssClass) => element.classList.add(cssClass);
    const addInput = (element, inputText) => element.textContent = inputText;
    const createElement = element => document.createElement(element);
    const renderElement =  element => document.body.appendChild(element);
    const showElement = element => element.classList.remove("hidden");
    const hideElement = element => element.classList.add("hidden");
    const scrollToHeight = height => document.documentElement.scrollTop = height;
        

    const buildElement = (elementType, initialClass, elementText) => {
        
        const element = createElement(elementType)
        addClass(element, initialClass);
        addInput(element, elementText);
        hideElement(element);
        renderElement(element);
        
        return element;
    }


    const buttonVisibility = (activationHeight, element) => {

        const heightFromTop = document.documentElement.scrollTop;

        if(heightFromTop >= activationHeight){
            showElement(element);
        } else {
            hideElement(element);
        }
    }
    

    const button = buildElement("button", "scroll-button", "Scroll Up" );


    button.addEventListener("click", e => scrollToHeight(0));
    window.addEventListener("scroll", e => buttonVisibility(100, button), false);


})();