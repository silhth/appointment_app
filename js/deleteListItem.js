import { c, q, a, eraseDivContent } from "./basicFunction.js"
import { eraseItem } from "./script.js"
import { modaleOff } from "./logInOut.js"

const divModale = q(".UserPsw")

// funzione per eliminare un item dalla lista

const btns = (item, container, btnY, btnN) => {
    btnY.addEventListener('click', () => {
        eraseItem (item, container);
        modaleOff();
    })

    btnN.addEventListener("click", () => {
        modaleOff();
    })

}


// riscrive la modale in Htlm per eliminare items dalla lista

const modaleHtmlDelete = (item, container) => {
    eraseDivContent(divModale)
    const h2Sure = a(divModale, c("h2"))
    h2Sure.textContent = "are you sere?"
    const btnNo = a(divModale, c("button"))
    btnNo.textContent = "NO"
    const btnYes = a(divModale, c("button"))
    btnYes.textContent = "YES"

    btns(item, container, btnYes, btnNo)

    
}



export { modaleHtmlDelete }