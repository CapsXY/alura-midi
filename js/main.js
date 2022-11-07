"use strict";

const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(seletorAudio) {
	const elemento = document.querySelector(seletorAudio);

	if (elemento != null && elemento.localName === "audio") {
		elemento.play();
	} else {
		console.log("Elemento não encontrado ou seletor inválido!");
	}
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`; //	[ler sobre template string]

	tecla.onclick = function (event) {
		tocaSom(idAudio);
	};

	tecla.onkeydown = function (event) {
		if (event.code === "Space" || event.code === "Enter") {
			tecla.classList.add("ativa");
		}
	};

	tecla.onkeyup = function (event) {
		tecla.classList.remove("ativa");
	};
}
