const buttonPerguntar = document.querySelector("#buttonPerguntar")
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
 " Sim",
 " Não tenho tanta certeza",
 " Não conte com isso",
 " Sem duvidas !",
 " Hoje nãoooo",
 " Hoje simmmmm",
 " Minha resposta e não",
 " Melhor não dizer agora",
 " Provavelmente",
 " Não e possivel prever agora",
 " Certeza! ",
 " As perspectivas não são tão boas",
 " Péssima noticia ;-;",
 " Não ",
 " Nem eu sei ",
]


function fazerPergunta(){

if(inputPergunta.value == ""){
  alert("Digite sua pergunta")
  return
}

buttonPerguntar.setAttribute("disable", true)


const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalrespostas = respostas.length
const numeroaleatorio = Math.floor(Math.random() * totalrespostas)

  console.log(respostas[numeroaleatorio])
elementoResposta.innerHTML = pergunta + respostas[numeroaleatorio]

elementoResposta.style.opacity = 1;

setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("desable")
}, 4000)
}


