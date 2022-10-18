// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// <div class="cella">
// {/* <span>1</span>
// </div> */}
const btn = document.getElementById("btn")
const field= document.getElementById("game")
function gioca(){
console.log("inizio gioco....")
const numCell=100;
    function cell(num){
        console.log(num)
        const cella= document.createElement("div")
        cella.className="cella"
        cella.innerHTML=`<span>${num}</span>`
        cella.addEventListener("click",function colore(){
            this.className="azzurro cella"
            console.log(this.innerText)
        })
        return cell
    }
    function drawGrid(){
        const griglia = document.createElement("div")
        griglia.className="griglia"
        for(let i=1;i<=100;i++){
            console.log(i)
           const cella= cell(i);
            griglia.appendChild(cella);
        }
        field.appendChild(griglia);
    }
    drawGrid();
}
btn.addEventListener("click", gioca)