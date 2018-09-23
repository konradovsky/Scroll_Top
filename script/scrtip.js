(function(){
    
    function createElement(elementType, initialClass, elementText){

        element = elementType;
        var element = document.createElement(element);
        element.classList.add(initialClass);
        element.textContent = elementText;

        hideElement(element);
        document.body.appendChild(element);

        return element;

    }

    function buttonVisibility(activationHeight, element){
        var heightFromTop = document.documentElement.scrollTop;

        if(heightFromTop >= activationHeight){
            showElement(element);
        } else {
            hideElement(element);
        }
    }

    function showElement(element){
        element.classList.remove("hidden");
    }

    function hideElement(element){
        element.classList.add("hidden");
    }
    
    var button = createElement("button", "scroll-button", "Scroll UPP" );

    button.addEventListener("click", (e) => {
        console.log("Click");
    })

    window.addEventListener("scroll", function(e){
        buttonVisibility(100, button);
    },false)
})();