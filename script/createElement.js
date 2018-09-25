const addClass = (element, cssClass) => element.classList.add(cssClass);
const addInput = (element, inputText) => element.textContent = inputText;
const createElement = element => document.createElement(element);
const renderElement =  element => document.body.appendChild(element);
const showElement = element => element.classList.remove("hidden");
const hideElement = element => element.classList.add("hidden");

module.exports = {
    addClass,
    addInput,
    createElement,
    renderElement,
    showElement,
    hideElement
}
