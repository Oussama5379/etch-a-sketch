const containerWidth = "960";
let divWidth = Math.floor(containerWidth / 16);
const container = document.querySelector(".container");
let div;
for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		div = document.createElement("div");
		div.classList.add("divChild");
		container.appendChild(div);
		div.style.width = divWidth.toString() + "px";
		div.style.height = divWidth.toString() + "px";
	}
}
