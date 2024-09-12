// 1 - adicionando eventos
const btn = document.getElementById("my-button");

btn.addEventListener("click", function() {
    console.log("Clicou aqui!")
});

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMenssagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMenssagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMenssagem);
});

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title");

//eu ia usar "e" em vez de "event" pois o "event" está como deprecated mas não era para ele como variavel
myTitle.addEventListener("click", (event) => {     //de qualquer modo pode usar o "e" em vez do "event" como variavel ali
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});  
