
const step = 10;
const bars = {
  left: {
    element: {
      HTML: document.querySelector("#bar__left"),
      position: 0
    },
    keys: { up: 'W', down: 'X' }
  },
  right: {
    element: {
      HTML: document.querySelector("#bar__right"),
      position: 0
    },
    keys: { up: 'O', down: 'M' }
  }
}

document.addEventListener("keydown", (e) => {
  
  /**
   * obtener la tecla presionada.
   * determinar en base tecla presionada:
   *   + barra
   *   + direccion
   * mover(barra, dirrecion)
   */
  
  e.preventDefault();
  // obtiene la tecla presionada
  let input__letter = GetKey(e);
  
  // devuelve la direccion de la tecla.
  //   function GetDirecction(String letter) : boolean | null
  let direcction = GetDirecction(input__letter);
  if (direcction === null) return;

  let found = false;
  for (const side in bars) {
    for (const direcction_ in bars[side]['keys']) {
      
      if (bars[side]['keys'][direcction_] === input__letter){ // compara las letras con la letra de entrada
        found = true;
        MoveBar(bars[side].element, direcction);
        break;
      }
    }
    if(found) break;
  }
});

function MoveBar(bar, direction){
  
  bar.position = direction ? bar.position - step : bar.position + step;
  bar.HTML.style.top = bar.position + "px";
}

const GetDirecction = (letter) => {

  for (const side in bars)
    for (const direcction in bars[side]['keys'])
      if(letter === bars[side]['keys'][direcction])
        return (direcction === "up");
  
  return null;
}

const GetKey = (e) => {
  if (window.event) return String.fromCharCode(e.keyCode).toLocaleUpperCase();
  else if (e.which) return String.fromCharCode(e.which).toLocaleUpperCase();
  else return null;  
}
