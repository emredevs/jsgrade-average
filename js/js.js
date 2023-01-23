let info = document.querySelector("#info");
let nunber1, nunber2;
let newUl = document.querySelector("#greeting");
nunber1 = prompt("vize:");
nunber2 = prompt("final");

function list() {
  let newLi = document.createElement("li");
  newLi.textContent = ort;
  console.log(newLi);
  newUl.appendChild(newLi);
}
let ort = nunber1 * 0.2 + nunber2 * 0.8;
if (ort >= 90 && ort <= 100) {
  info.innerHTML = ort + " AA";
  list();
} else if (ort >= 85 && 89 <= ort) {
  info.innerHTML = ort + " BA";
  list();
} else if (ort >= 80 && 84 <= ort) {
  info.innerHTML = ort + " BB";
  list();
} else if (ort >= 75 && 79 <= ort) {
  info.innerHTML = ort + " CB";
  list();
} else if (ort >= 70 && 74 <= ort) {
  info.innerHTML = ort + " CC";
  list();
} else if (ort >= 65 && 69 <= ort) {
  info.innerHTML = ort + " DC";
  list();
} else if (ort >= 60 && 64 <= ort) {
  info.innerHTML = ort + " DD";
  list();
} else if (ort >= 50 && 59 <= ort) {
  info.innerHTML = ort + " FD";
  list();
} else if (ort >= 0 && 49 <= ort) {
  info.innerHTML = ort + " FF";
  list();
}
if (!(ort < 100)) {
  info.innerHTML = "yanlis değer girildi";
}
