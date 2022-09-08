const p = document.getElementById("typing");
var cursor = document.querySelector(".cursor");
var texto = p.innerHTML;
let index = 0;

const typing = () => {
  p.innerHTML = p.innerHTML.replace("|", "");

  if (texto.length > index) {
    if (index == 0) {
      p.innerHTML = texto.charAt(index);
    } else {
      p.innerHTML += texto.charAt(index);
    }

    p.innerHTML += "|";

    index++;
    setTimeout(typing, 50);
  }
};

typing();
