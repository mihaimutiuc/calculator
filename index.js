let container = document.getElementById("container");
let rezultat = document.getElementById("rezultat2");
let tabel = document.getElementById("tabel");
let count = 0;
let semne = ["+","-","*","/","%"];
let semne2 = ["."];
let text = "Hey, Salut👋"
rezultat.textContent = text;
tabel.addEventListener("click", (e)=>{
  if (rezultat.textContent === text && e.target.closest("td")) {
    rezultat.textContent = "";
  }
  const celula = e.target.closest("td");
  if (!celula || !tabel.contains(celula)) return;
  const continut = celula.textContent.trim();
  let ultimul;
  if (continut === "="){
    const calcul = eval(rezultat.textContent);
    if (Number.isInteger(calcul)) {
      rezultat.textContent = calcul;
    } else {
      rezultat.textContent = calcul.toFixed(2);
    }
    count = 0;
  };
  if(continut === "C"){
    rezultat.textContent = text;
    count = 0;
  };
  if(continut === "⌫"){
    rezultat.textContent = rezultat.textContent.slice(0, -1)
  }; 
  let penUltimul = rezultat.textContent.slice(-1);
  if(semne.includes(continut) && semne.includes(penUltimul)){
    if(continut !== penUltimul){
      rezultat.textContent = rezultat.textContent.slice(0, -1) + continut;
    };
    return;
  };
  if (continut === ".") {
  let ultimNumar = rezultat.textContent.split(/[+\-*/%]/).pop();
  if (ultimNumar.includes(".")) {
    return; 
  }
  rezultat.textContent += ".";
  return;
};
  if(continut !== "C" && continut !== "x²" && continut !== "=" && continut !== "⌫" && continut !== "√" && !(count === 1 && continut === ".")){
    rezultat.textContent += continut;
  };
  let calcul;
  ultimul = rezultat.textContent.slice(-1);
  let calcul2;
  if (continut === "√" && rezultat.textContent) {
    try {
      let expresie = rezultat.textContent;
        if (semne.includes(expresie.slice(-1))) {
        expresie = expresie.slice(0, -1);
      }
      const valoare = eval(expresie);  
      if (isNaN(valoare)) {
        rezultat.textContent = "⛔ Operație invalidă";
      } else if (valoare < 0) {
        rezultat.textContent = "⛔ Radical din număr negativ";
        rezultat.textContent.style.fontSize = "2rem";
      } else {
        rezultat.textContent = Math.sqrt(valoare).toFixed(2);
      }
  
    } catch (error) {
      rezultat.textContent = "⛔ Eroare de calcul";
    }
  }
  

  if(continut === "x²" && rezultat.textContent){
    try {
      let expresie = rezultat.textContent;
        if (semne.includes(expresie.slice(-1))) {
        expresie = expresie.slice(0, -1);
      }
      const valoare = eval(expresie);  
      if (isNaN(valoare)) {
        rezultat.textContent = "⛔ Operație invalidă";
      } else {
        rezultat.textContent = Math.pow(valoare, 2).toFixed(2);
      }
    } catch (error) {
      rezultat.textContent = "⛔ Eroare de calcul";
    }
  }
});


document.addEventListener("keydown", (e)=>{
  if (rezultat.textContent === text && /^[A-Za-z]+$/.test(e.key) === false) {
    rezultat.textContent = "";
  }
  const continut = e.key;
  let ultimul;
  if (continut === "=" || continut === "Enter") {
    const calcul = eval(rezultat.textContent);
    if (Number.isInteger(calcul)) {
      rezultat.textContent = calcul;
    } else {
      rezultat.textContent = calcul.toFixed(2);
    }
    count = 0;
  };
  if(continut.toLowerCase() === "C".toLowerCase()){
    rezultat.textContent = text;
    count = 0;
  };
  if(continut === "Backspace"){
    if(rezultat.textContent === text)
      rezultat.textContent = "";
    rezultat.textContent = rezultat.textContent.slice(0, -1)
  }; 
  let penUltimul = rezultat.textContent.slice(-1);
  if(semne.includes(continut) && semne.includes(penUltimul)){
    if(continut !== penUltimul){
      rezultat.textContent = rezultat.textContent.slice(0, -1) + continut;
    };
    return;
  };
  if (continut === ".") {
  let ultimNumar = rezultat.textContent.split(/[+\-*/%]/).pop();
  if (ultimNumar.includes(".")) {
    return; 
  }
  rezultat.textContent += ".";
  return;
};
  if(continut.toLowerCase() !== "C".toLowerCase() && continut !== "^" && continut !== "=" && continut !== "Backspace" && continut !== "r" && !(count === 1 && continut === ".") && continut !== "Shift" && continut !== "Enter" && /^[A-Za-z]+$/.test(continut) === false && !/[~`!@#$&()_{}|\\\/"'`:;<>,\[\]]/.test(continut)){
    rezultat.textContent += continut;
  };
  let calcul;
  ultimul = rezultat.textContent.slice(-1);
  let calcul2;
  if(continut.toLowerCase() === "r".toLowerCase() && rezultat.textContent){
    try {
      let expresie = rezultat.textContent;
        if (semne.includes(expresie.slice(-1))) {
        expresie = expresie.slice(0, -1);
      }
      const valoare = eval(expresie);  
      if (isNaN(valoare)) {
        rezultat.textContent = "⛔ Operație invalidă";
      } else if (valoare < 0) {
        rezultat.textContent = "⛔ Radical din număr negativ";
        rezultat.textContent.style.fontSize = "2rem";
      } else {
        rezultat.textContent = Math.sqrt(valoare).toFixed(2);
      }
  
    } catch (error) {
      rezultat.textContent = "⛔ Eroare de calcul";
    }
  };
  if(continut === "^" && rezultat.textContent){
    try {
      let expresie = rezultat.textContent;
        if (semne.includes(expresie.slice(-1))) {
        expresie = expresie.slice(0, -1);
      }
      const valoare = eval(expresie);  
      if (isNaN(valoare)) {
        rezultat.textContent = "⛔ Operație invalidă";
      } else {
        rezultat.textContent = Math.pow(valoare, 2).toFixed(2);
      }
    } catch (error) {
      rezultat.textContent = "⛔ Eroare de calcul";
    }
  };
});


