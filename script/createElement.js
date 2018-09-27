const createElementTools = {
    addClass:(element, cssClass) => element.classList.add(cssClass),
    addInput:(element, inputText) => element.textContent = inputText,
    createElement: element => document.createElement(element),
    renderElement: element => document.body.appendChild(element),
    showElement: element => element.classList.remove("hidden"),
    hideElement: element => element.classList.add("hidden"),
    scrollToHeight: height => document.documentElement.scrollTop = height

}

const buildElement = (elementType, initialClass, elementText, activation) => {
    const element = createElementTools.createElement(elementType);
    createElementTools.addClass(element, initialClass);
    createElementTools.addInput(element, elementText);
    createElementTools.hideElement(element);
    createElementTools.renderElement(element);

    element.addEventListener("click", e => createElementTools.scrollToHeight(0));
    window.addEventListener("scroll", e => buttonVisibility(activation, element), false);

    return element;
}

const buttonVisibility = (activationHeight, element) => {
    const heightFromTop = document.documentElement.scrollTop;

    if(heightFromTop >= activationHeight){
        createElementTools.showElement(element);
    } else {
        createElementTools.hideElement(element);
    }
}

export default buildElement;

