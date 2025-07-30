let background;
let mainPart;
let timer = null;

window.onload = () => {
	background = document.querySelector("#background");
	mainPart = document.querySelector("#mainPart");
	mainPart.addEventListener("scroll", () => changeSaturate());
}

window.onresize = () => {
	background = document.querySelector("#background");
	mainPart = document.querySelector("#mainPart");
	changeSaturate();
}

const changeSaturate = () => {
	if (timer != null) return;

	timer = setTimeout(() => {
		const scroll = mainPart.scrollTop;
		const range = mainPart.scrollHeight;
		const ratio = scroll / range;
		background.style.setProperty("filter", `blur(2px) saturate(${ratio})`);
		timer = null;
	}, 100);
};
