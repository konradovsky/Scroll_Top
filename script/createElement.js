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
const animateScroll = (height,speed) => {
    const animation = setInterval(() => {
        if(document.documentElement.scrollTop > height){
            document.documentElement.scrollTop -= speed;
        } else if(document.documentElement.scrollTop <= 0){
            clearInterval(animation);
        }
    }, 1);
    
}

const buttonVisibility = (activationHeight, element) => {
    const heightFromTop = document.documentElement.scrollTop;
    (heightFromTop >= activationHeight) ? showElement(element) : hideElement(element);
}

const buildElement = (elementType, initialClass, elementText, activation, speed) => {
    const element = createElement(elementType);

    addClass(element, initialClass);
    addInput(element, elementText);
    hideElement(element);
    renderElement(element);

    element.addEventListener("click", () => animateScroll(0, speed));
    window.addEventListener("scroll", () => buttonVisibility(activation, element));

    return element;
}

export default buildElement;