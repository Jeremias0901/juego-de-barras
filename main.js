
const keys = {
    up: ['W', 'S'],
    down: ['O', 'L']
};

let div = document.querySelector(".contenedor");

// handler
document.addEventListener("keydown", (e) => {
    
    if(getKey(e)) div.innerHTML += getKey(e);
});

function MoveBars(letter){
    
    // Mueve las barras en base la letra presionada
    
}

function getKey(e){
    let letter = '';

    if (window.event) letter = String.fromCharCode(e.keyCode).toLocaleUpperCase();
    else if (e.which) letter = String.fromCharCode(e.which).toLocaleUpperCase();

    if (!keys.up.includes(letter) && !keys.down.includes(letter)) return false;
    
    return letter;
  }