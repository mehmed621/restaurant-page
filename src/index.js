import home from "./home"
import about from "./about"
import contact from "./contact"
import './style.css';

const contentElement = document.querySelector("#content")

function appendNavbar(){
    let NavElement = document.createElement("nav")
    let newButton = document.createElement("button")
    newButton.innerText = "Home"
    newButton.addEventListener("click", () => {
        deleteChild()
        createPage(home)
    })

    let newButton2 = document.createElement("button")
    newButton2.innerText = "About"
    newButton2.addEventListener("click", () => {
        deleteChild()
        createPage(about)
    })

    let newButton3 = document.createElement("button")
    newButton3.innerText = "Contact"
    newButton3.addEventListener("click", () => {
        deleteChild()
        createPage(contact)
    })

    NavElement.appendChild(newButton)
    NavElement.appendChild(newButton2)
    NavElement.appendChild(newButton3)

    return NavElement;
}

function appendFooter(){
let newFooterElement = document.createElement("footer")
newFooterElement.innerHTML = 'Restaurant Page for The Odin Project Curriculum.'

return newFooterElement;
}



function deleteChild() { 
    let elmnt = document.querySelector("#content"); 
    let first = elmnt.firstElementChild; 
    while (first) { 
        first.remove(); 
        first = elmnt.firstElementChild; 
    } 
} 

function createPage(page){
    contentElement.appendChild(appendNavbar())
    contentElement.appendChild(page())
    contentElement.appendChild(appendFooter())
}


window.addEventListener("load", () => {
    deleteChild()
    createPage(home)
})



