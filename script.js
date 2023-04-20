function confIni() {}

function geral() {}

function migra() {}

function acpt() {}

function teste() {
  let etapa1 = document.getElementById("dono").value;
  document.getElementById(
    "etapa1resp1"
  ).innerHTML = `- Dono do escritorio: ${etapa1}`;

  let etapa2 = document.getElementById("resp").value;
  document.getElementById(
    "etapa1resp2"
  ).innerHTML = `- Responsável Técnico: ${etapa2}`;

  let etapa3 = document.getElementById("quem").value;
  document.getElementById(
    "etapa1resp3"
  ).innerHTML = `- Quem participou da consultoria: ${etapa3}`;

  let etapa4 = document.getElementById("usuario").value;
  document.getElementById(
    "etapa1resp4"
  ).innerHTML = `- Usuários aprox:: ${etapa4}`;

  let etapa5 = document.getElementById("empresas").value;
  document.getElementById(
    "etapa1resp5"
  ).innerHTML = `- Empresas aprox: ${etapa5}`;

  let etapa6 = document.getElementById("sistemaContabil").value;
  document.getElementById(
    "etapa1resp6"
  ).innerHTML = `- Sistema Contábil: ${etapa6}`;

  let etapa7 = document.getElementById("jaUsaram").value;
  document.getElementById(
    "etapa1resp7"
  ).innerHTML = `- Ja usaram sistema de gestão: ${etapa7}`;

  let etapa8 = document.getElementById("formas").value;
  document.getElementById(
    "etapa1resp8"
  ).innerHTML = `- Forma de entrega:(se recebem por email, wpp ou físico): ${etapa8}`;

  let etapa9 = document.getElementById("maioriaRegimes").value;
  document.getElementById(
    "etapa1resp9"
  ).innerHTML = `- Qual a maioria dos regimes tributários: ${etapa9}`;

  let etapa10 = document.getElementById("valor").value;
  document.getElementById(
    "etapa1resp10"
  ).innerHTML = `- Valor da Acessórias mais chamou atenção: ${etapa10}`;

  let etapa11 = document.getElementById("ticket").value;
  document.getElementById("etapa1resp11").innerHTML = `- TicketApp: ${etapa11}`;

  let etapa12 = document.getElementById("obs").value;
  document.getElementById(
    "etapa1resp12"
  ).innerHTML = `- Informações Adicionais: ${etapa12}`;
}

function copResp() {
  let etapa1 = document.getElementById("etapa1resp1").textContent;
  let etapa2 = document.getElementById("etapa1resp2").textContent;
  let etapa3 = document.getElementById("etapa1resp3").textContent;
  let etapa4 = document.getElementById("etapa1resp4").textContent;
  let etapa5 = document.getElementById("etapa1resp5").textContent;
  let etapa6 = document.getElementById("etapa1resp6").textContent;
  let etapa7 = document.getElementById("etapa1resp7").textContent;
  let etapa8 = document.getElementById("etapa1resp8").textContent;
  let etapa9 = document.getElementById("etapa1resp9").textContent;
  let etapa10 = document.getElementById("etapa1resp10").textContent;
  let etapa11 = document.getElementById("etapa1resp11").textContent;
  let etapa12 = document.getElementById("etapa1resp12").textContent;
  const textToCopy = `${etapa1}\n${etapa2}\n${etapa3}\n${etapa4}\n${etapa5}\n${etapa6}\n${etapa7}\n${etapa8}\n${etapa9}\n${etapa10}\n${etapa11}\n${etapa12}`;
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
}

function infoGeral() {
  document.getElementById("etapa").onclick = function () {
    var value = document.getElementsByName("etapa");
    for (var radio of value) {
      if (radio.checked) {
        let resp0 = radio.value;
        console.log(resp0);
        document.getElementById("geralResp0").innerHTML = `${resp0}`;
      }
    }
  };

  let resp1 = document.getElementById("uso").value;
  document.getElementById(
    "geralResp1"
  ).innerHTML = `- Porcentagem de uso: ${resp1}%`;
}

function faltou() {
  document.getElementById("falta").style.display = "block";
}

function copRespFalta() {}

function pergBackup() {}

function textoMigra() {}

function acompTexto() {}

function pergBackup2() {}
