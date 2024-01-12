let body = document.querySelector("body");
let container = document.createElement("div");
let h2 = document.createElement("h2");
h2.innerText = "Generate Random Number";
let btndiv=document.createElement("div")
let btn = document.createElement("button");
btn.innerText = "Generate Color";
body.appendChild(container);
container.append(h2);
btndiv.appendChild(btn);
container.appendChild(btndiv)
let div = document.createElement("div");
div.style.width = "100%";
div.style.height = "300px";
let p = document.createElement("p");
p.innerText = "this is your new color";
p.style.fontSize="1.5rem";
p.style.fontFamily="'Times New Roman', Times, serif";
div.appendChild(p);
container.appendChild(div);
div.style.border = "2px solid black";
container.style.display = "flex";
container.style.gap="10px"
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.textAlign = "center";
body.style.display = "flex";
body.style.justifyContent="center"
body.style.width = "100%";
container.style.width = "90%";
btn.style.width="auto"
generatecolor = () => {
  let red = Math.random();
  red = red * 225;
  red = Math.floor(red);
  let green = Math.random();
  green = green * 225;
  green = Math.floor(green);
  let blue = Math.random();
  blue = blue * 225;
  blue = Math.floor(blue);
  h2.innerText = `rgb(${red},${green},${blue})`;
  div.style.backgroundColor = `rgb(${red},${green},${blue})`;
  div.style.transition=".5s ease"
};
btn.addEventListener("click", generatecolor);
