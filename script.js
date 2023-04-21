function confIni() {
  document.getElementById("etapa1").style.display = "block";
  document.getElementById("menuGeral").style.display = "none";
  document.getElementById("migração").style.display = "none";
  document.getElementById("acomp").style.display = "none";
}

function geral() {
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("menuGeral").style.display = "block";
  document.getElementById("migração").style.display = "none";
  document.getElementById("acomp").style.display = "none";
}

function migra() {
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("menuGeral").style.display = "none";
  document.getElementById("migração").style.display = "block";
  document.getElementById("acomp").style.display = "none";
}

function acpt() {
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("menuGeral").style.display = "none";
  document.getElementById("migração").style.display = "none";
  document.getElementById("acomp").style.display = "block";
}

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

function copResp2() {
  let resp0 = document.getElementById("geralResp0").textContent;
  let resp1 = document.getElementById("geralResp1").textContent;
  let resp2 = document.getElementById("geralResp2").textContent;
  let resp3 = document.getElementById("geralResp3").textContent;
  let resp4 = document.getElementById("geralResp4").textContent;
  let resp5 = document.getElementById("geralResp5").textContent;
  let resp6 = document.getElementById("geralResp6").textContent;
  let resp7 = document.getElementById("geralResp7").textContent;
  let resp8 = document.getElementById("geralResp8").textContent;
  let resp9 = document.getElementById("geralResp9").textContent;
  let resp10 = document.getElementById("geralResp10").textContent;
  let resp11 = document.getElementById("geralResp11").textContent;
  let resp12 = document.getElementById("geralResp12").textContent;
  let resp13 = document.getElementById("geralResp13").textContent;
  var value = document.getElementsByName("btnBackup");
  let textToCopy = "";
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        textToCopy = `${resp0}\n${resp1}\n${resp2}\n${resp3}\n${resp4}\n${resp5}\n${resp6}\n${resp7}\n${resp8}\n${resp9}\n${resp10}\n** Informaoces para o Backup **\n${resp11}\n${resp12}\n${resp13}`;
      } else {
        textToCopy = `${resp0}\n${resp1}\n${resp2}\n${resp3}\n${resp4}\n${resp5}\n${resp6}\n${resp7}\n${resp8}\n${resp9}\n${resp10}`;
      }
    }
  }
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function infoGeral() {
  var value = document.getElementsByName("etapa");
  for (var radio of value) {
    if (radio.checked) {
      let resp0 = radio.value;
      console.log(resp0);
      document.getElementById("geralResp0").innerHTML = `${resp0}`;
    }
  }

  let resp1 = document.getElementById("uso").value;
  document.getElementById(
    "geralResp1"
  ).innerHTML = `- Porcentagem de uso: ${resp1}%`;

  let resp2 = document.getElementById("parcicipantes").value;
  document.getElementById(
    "geralResp2"
  ).innerHTML = `- Quem participou da consultoria/departamento: ${resp2}`;

  var value = document.getElementsByName("horario");
  for (var radio of value) {
    if (radio.checked) {
      let resp3 = radio.value;
      document.getElementById(
        "geralResp3"
      ).innerHTML = `- Atrasaram: ${resp3} `;
    }
  }

  var value = document.getElementsByName("atividades");
  for (var radio of value) {
    if (radio.checked) {
      let resp4 = radio.value;
      document.getElementById(
        "geralResp4"
      ).innerHTML = `- Realizaram as atividades anteriores: ${resp4} `;
    }
  }

  var value = document.getElementsByName("duvidas");
  for (var radio of value) {
    if (radio.checked) {
      let resp5 = radio.value;
      document.getElementById(
        "geralResp5"
      ).innerHTML = `- Dúvidas/Dificuldades da etapa anterior: ${resp5} `;
    }
  }

  var value = document.getElementsByName("participativos");
  for (var radio of value) {
    if (radio.checked) {
      let resp6 = radio.value;
      document.getElementById(
        "geralResp6"
      ).innerHTML = `- Participativos: ${resp6} `;
    }
  }

  var value = document.getElementsByName("problema");
  for (var radio of value) {
    if (radio.checked) {
      let resp7 = radio.value;
      document.getElementById(
        "geralResp7"
      ).innerHTML = `- Algum problema: ${resp7} `;
    }
  }

  var value = document.getElementsByName("nota");
  for (var radio of value) {
    if (radio.checked) {
      let resp8 = radio.value;
      document.getElementById(
        "geralResp8"
      ).innerHTML = `- Nota para a consultoria:  ${resp8} `;
    }
  }

  let resp9 = document.getElementById("ticketConsult").value;
  document.getElementById(
    "geralResp9"
  ).innerHTML = `- Ticket da consultoria: ${resp9}`;

  let resp10 = document.getElementById("geralObs").value;
  document.getElementById(
    "geralResp10"
  ).innerHTML = `- Informações Adicionais: ${resp10}`;

  document.getElementById("falta").style.display = "none";

  var value = document.getElementsByName("btnBackup");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        let resp11 = document.getElementById("comprometido").value;
        document.getElementById(
          "geralResp11"
        ).innerHTML = `- Cliente comprometido: ${resp11}`;

        let resp12 = document.getElementById("tecnologico").value;
        document.getElementById(
          "geralResp12"
        ).innerHTML = `- Cliente tecnológico: ${resp12}`;

        let resp13 = document.getElementById("etapaBackup").value;
        document.getElementById(
          "geralResp13"
        ).innerHTML = `Informacoes para o consultoria de backup: ${resp13}`;
      }
    }
  }
}

function faltou() {
  document.getElementById("falta").style.display = "block";
}

function copRespFalta() {
  let falta = document.getElementById("faltaCliente").value;
  console.log(falta);
  const textToCopy = `${falta}`;
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function pergBackup() {
  var value = document.getElementsByName("btnBackup");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        document.getElementById("telaBackup").style.display = "block";
      } else {
        document.getElementById("telaBackup").style.display = "none";
        document.getElementById("geralResp11").innerHTML = ``;
        document.getElementById("geralResp12").innerHTML = ``;
        document.getElementById("geralResp13").innerHTML = ``;
      }
    }
  }
}

function textoMigra() {}

function acompTexto() {}

function pergBackup2() {}
