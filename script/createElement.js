// Adding content and styles
const addClass = (element, cssClass) => element.classList.add(cssClass);
const addInput = (element, inputText) => element.textContent = inputText;

// Create and render item
const createElement = element => document.createElement(element);
const renderElement = element => document.body.appendChild(element);

// Visibility
const showElement = element => element.classList.remove("hidden");
const hideElement = element => element.classList.add("hidden");
    
// Animation for scroll
const scrollToHeight = height => document.documentElement.scrollTop = height;

const buttonVisibility = (activationHeight, element) => {
    const heightFromTop = document.documentElement.scrollTop;
    (heightFromTop >= activationHeight) ? showElement(element) : hideElement(element);
}

const buildElement = (elementType, initialClass, elementText, activation) => {
    const element = createElement(elementType);

    addClass(element, initialClass);
    addInput(element, elementText);
    hideElement(element);
    renderElement(element);

    element.addEventListener("click", () => scrollToHeight(0));
    window.addEventListener("scroll", () => buttonVisibility(activation, element));

    return element;
}



export default buildElement;

