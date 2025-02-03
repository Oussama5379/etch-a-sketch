//The initial grid
createGrid(16);
function createGrid(numberOfSquares) {
	divWidth = Math.floor(960 / numberOfSquares);
	const container = document.querySelector(".container");
	container.innerHTML = '<div class=".container"></div>';
	let div;
	for (let i = 0; i < numberOfSquares; i++) {
		for (let j = 0; j < numberOfSquares; j++) {
			div = document.createElement("div");
			div.classList.add("divChild");
			container.appendChild(div);
			div.style.width = divWidth.toString() + "px";
			div.style.height = divWidth.toString() + "px";
		}
	}
	let children = document.querySelectorAll(".divChild");
	children.forEach((child) => {
		child.addEventListener("mouseover", () => {
			child.style.backgroundColor = "peachpuff";
		});
	});
}

function resetGrid() {
	let numberOfSquares = Number(
		prompt("Please type the number of squares per side for the new grid")
	);
	while (isNaN(numberOfSquares) || numberOfSquares > 100) {
		alert("You need to type a number less than 100 ");
		numberOfSquares = Number(prompt("Please type the number of squares per side for the new grid"));
	}
	createGrid(numberOfSquares);
}
