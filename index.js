let container = document.getElementById("container");
let rezultat = document.getElementById("rezultat2");
let tabel = document.getElementById("tabel");
let count = 0;
let semne = ["+","-","*","/","%"];
let semne2 = ["."];
tabel.addEventListener("click", (e)=>{
  e = e.target;
  let continut = e.textContent;
  let ultimul;
  if (continut === "="){
    rezultat.textContent = eval(rezultat.textContent).toFixed(2);
    count = 0;
  };
  if(continut === "C"){
    rezultat.textContent = "";
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
  if(continut === "√"){
    if(rezultat.textContent && !semne.includes(ultimul)){
      calcul = eval(rezultat.textContent);
      rezultat.textContent = Math.sqrt(calcul).toFixed(2);
    }
    else{
      rezultat.textContent = rezultat.textContent.slice(0, -1)
      calcul = eval(rezultat.textContent);
      rezultat.textContent = Math.sqrt(calcul).toFixed(2);
    }
  };
  if(continut === "x²"){
    if(rezultat.textContent && !semne.includes(ultimul)){
      calcul2 = eval(rezultat.textContent);
      rezultat.textContent = Math.pow(calcul2, 2);
    }
    else{
      rezultat.textContent = rezultat.textContent.slice(0, -1)
      calcul2 = eval(rezultat.textContent);
      rezultat.textContent = Math.pow(calcul2, 2);
    }
  };
  console.log("cel Apasat:",continut);
  console.log("ultimul:",ultimul);
  console.log("penultimul:",penUltimul);
  console.log("rezultat:",rezultat.textContent);
});



