let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
let mpt = "Your input is emtpy";
import(Math);
for (const butt of buttons) {
  butt.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = "";
    } else if (buttonText == "=") {
      screenValue = screen.value = eval(screenValue);
      let concl = screenValue;
      console.log(concl);
      screenValue = "";
      let vv = 43;
      const para = document.getElementById("pp");
      const sttrA = `The solution to your input is <em>${concl}</em>`;
      para.innerHTML = sttrA;
      alert("Thanks for using the calculator. :)");
      // let sttrA = `The answer for ${concl} is ${screenValue}`;

      // console.log("working well");
      // let txn = document.createTextNode(sttrA);
      // para.appendChild(txn);
    } else if (buttonText == "sin") {
      screen.value = Math.sin(screenValue);
    } else if (buttonText == "tan") {
      screen.value = Math.tan(screenValue);
    } else if (buttonText == "cos") {
      screen.value = Math.cos(screenValue);
    } else if (buttonText == "exp") {
      buttonText = "**";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "←") {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
      console.log(screenValue);
    } else if (buttonText == "√") {
      screen.value = Math.sqrt(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
// =====Additional=====

// const tmpstr = `THis is a test template ${vv}`;
// console.log(tmpstr);
// import(Math);
// console.log(Math.sin(20));
// document.getElementById("pp").innerHTML = "HEllo world";
// let txn = document.createTextNode("Hello world");
// para.appendChild(txn);
