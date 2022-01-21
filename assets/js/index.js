/**
 * Botones de la interfaz
 */
let btn1 = document.getElementById("btnA1");
let btn2 = document.getElementById("btnB2");
let btn3 = document.getElementById("btnC3");
let btn4 = document.getElementById("btnD4");
let btn5 = document.getElementById("btnE5");
let btn6 = document.getElementById("btnF6");
let btn7 = document.getElementById("btnG7");
let btn8 = document.getElementById("btnH8");
let btn9 = document.getElementById("btnI9");
let btn11 = document.getElementById("btnJ0");

/**
 * Etiquetas de la web
 */
let letter = document.getElementById("letter");
let number = document.getElementById("number");
let completeLetter = "ABCDEFGHIJ";
let completeNumber = "1234567890";

/**
 * Variable para validar
 */
let count = 0;

const play1 = () => {
  if (letter.innerHTML == "") {
    letter.innerHTML = completeLetter[count];
    count++;
  }
  //Validar letras completas para ingresar numeros
  else if (completeLetter == letter.innerHTML) {
    if (number.innerHTML == "") {
      count = 0;
      number.innerHTML += completeNumber[count];
      count++;
    }
  }
};
const play2 = () => {
  let verdad = false;
  if (letter.innerHTML == "A") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "1") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (number.innerHTML == "") {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (letter.innerHTML == "") {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play3 = () => {
  let verdad = false;
  if (letter.innerHTML == "AB") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "12") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (number.innerHTML == "" || number.innerHTML == "1") {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (letter.innerHTML == "A" || letter.innerHTML == "") {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play4 = () => {
  let verdad = false;
  if (letter.innerHTML == "ABC") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "123") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (
      number.innerHTML == "" ||
      number.innerHTML == "1" ||
      number.innerHTML == "12"
    ) {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (
    letter.innerHTML == "A" ||
    letter.innerHTML == "" ||
    letter.innerHTML == "AB"
  ) {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play5 = () => {
  let verdad = false;
  if (letter.innerHTML == "ABCD") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "1234") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (
      number.innerHTML == "" ||
      number.innerHTML == "1" ||
      number.innerHTML == "12" ||
      number.innerHTML == "123"
    ) {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (
    letter.innerHTML == "A" ||
    letter.innerHTML == "" ||
    letter.innerHTML == "AB" ||
    letter.innerHTML == "ABC"
  ) {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play6 = () => {
  let verdad = false;
  if (letter.innerHTML == "ABCDE") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "12345") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (
      number.innerHTML == "" ||
      number.innerHTML == "1" ||
      number.innerHTML == "12" ||
      number.innerHTML == "123" ||
      number.innerHTML == "1234"
    ) {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (
    letter.innerHTML == "A" ||
    letter.innerHTML == "" ||
    letter.innerHTML == "AB" ||
    letter.innerHTML == "ABC" ||
    letter.innerHTML == "ABCD"
  ) {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play7 = () => {
  let verdad = false;
  if (letter.innerHTML == "ABCDEF") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "123456") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (
      number.innerHTML == "" ||
      number.innerHTML == "1" ||
      number.innerHTML == "12" ||
      number.innerHTML == "123" ||
      number.innerHTML == "1234" ||
      number.innerHTML == "12345"
    ) {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (
    letter.innerHTML == "A" ||
    letter.innerHTML == "" ||
    letter.innerHTML == "AB" ||
    letter.innerHTML == "ABC" ||
    letter.innerHTML == "ABCD" ||
    letter.innerHTML == "ABCDE"
  ) {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play8 = () => {
  let verdad = false;
  if (letter.innerHTML == "ABCDEFG") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "1234567") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (
      number.innerHTML == "" ||
      number.innerHTML == "1" ||
      number.innerHTML == "12" ||
      number.innerHTML == "123" ||
      number.innerHTML == "1234" ||
      number.innerHTML == "12345" ||
      number.innerHTML == "123456"
    ) {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (
    letter.innerHTML == "A" ||
    letter.innerHTML == "" ||
    letter.innerHTML == "AB" ||
    letter.innerHTML == "ABC" ||
    letter.innerHTML == "ABCD" ||
    letter.innerHTML == "ABCDE" ||
    letter.innerHTML == "ABCDEF"
  ) {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play9 = () => {
  let verdad = false;
  if (letter.innerHTML == "ABCDEFGH") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "12345678") {
      number.innerHTML += completeNumber[count];
      count++;
    } else if (
      number.innerHTML == "" ||
      number.innerHTML == "1" ||
      number.innerHTML == "12" ||
      number.innerHTML == "123" ||
      number.innerHTML == "1234" ||
      number.innerHTML == "12345" ||
      number.innerHTML == "123456" ||
      number.innerHTML == "1234567"
    ) {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (
    letter.innerHTML == "A" ||
    letter.innerHTML == "" ||
    letter.innerHTML == "AB" ||
    letter.innerHTML == "ABC" ||
    letter.innerHTML == "ABCD" ||
    letter.innerHTML == "ABCDE" ||
    letter.innerHTML == "ABCDEF" ||
    letter.innerHTML == "ABCDEFG"
  ) {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};
const play10 = () => {
  let verdad = false;
  if (letter.innerHTML == "ABCDEFGHI") {
    letter.innerHTML += completeLetter[count];
    count++;
  } else if (letter.innerHTML == completeLetter) {
    if (number.innerHTML == "123456789") {
      number.innerHTML += completeNumber[count];
      if (number.innerHTML == "1234567890") {
        alert("Felicidades, has completado el juego");
        gameOver = true;
      }
      count++;
    } else if (
      number.innerHTML == "" ||
      number.innerHTML == "1" ||
      number.innerHTML == "12" ||
      number.innerHTML == "123" ||
      number.innerHTML == "1234" ||
      number.innerHTML == "12345" ||
      number.innerHTML == "123456" ||
      number.innerHTML == "1234567" ||
      number.innerHTML == "12345678"
    ) {
      verdad = false;
      msgAlert(verdad);
    }
  } else if (
    letter.innerHTML == "A" ||
    letter.innerHTML == "" ||
    letter.innerHTML == "AB" ||
    letter.innerHTML == "ABC" ||
    letter.innerHTML == "ABCD" ||
    letter.innerHTML == "ABCDE" ||
    letter.innerHTML == "ABCDEF" ||
    letter.innerHTML == "ABCDEFG" ||
    letter.innerHTML == "ABCDEFGH"
  ) {
    verdad = true;
    //Validar si son letras faltantes
    msgAlert(verdad);
  }
};

/**
 * Validar si es por letras o numeros
 */
function msgAlert(param) {
  let msg = "Ingresa en orden ";
  if (param == true) {
    msg += "las letras.";
  } else {
    msg += "los números.";
  }
  alert(msg);
}

/**
 * Llamado de las funciones
 */

btn1.onclick = () => {
  play1();
};
btn2.onclick = () => {
  play2();
};
btn3.onclick = () => {
  play3();
};
btn4.onclick = () => {
  play4();
};
btn5.onclick = () => {
  play5();
};
btn6.onclick = () => {
  play6();
};
btn7.onclick = () => {
  play7();
};
btn8.onclick = () => {
  play8();
};
btn9.onclick = () => {
  play9();
};
btn11.onclick = () => {
  play10();
};