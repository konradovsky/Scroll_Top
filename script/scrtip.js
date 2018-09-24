(function(){
    
    const addClass = (element, cssClass) => element.classList.add(cssClass);
    const addText = (element, inputText) => element.textContent = inputText;
    const createEl = (element) => document.createElement(element);
    const render = (place, element) => `document.${JSON.parse(place)}.appendChild(${element})`;
        
    const createElement = (elementType, initialClass, elementText) => {
        
        const element = createEl(elementType);
        addClass(element, initialClass);
        addText(element, elementText);
        hideElement(element);
        render(body, element);

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

    const showElement = element => element.classList.remove("hidden");

    const hideElement = element => element.classList.add("hidden");
    

    const button = createElement("button", "scroll-button", "Scroll Up" );

    button.addEventListener("click", e => {
        document.documentElement.scrollTop = 0;
    })

    window.addEventListener("scroll", e => {
        buttonVisibility(100, button);
    },false)
})();