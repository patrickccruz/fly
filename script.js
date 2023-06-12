function confIni() {
  document.getElementById("etapa1").style.display = "block";
  document.getElementById("menuGeral").style.display = "none";
  document.getElementById("migração").style.display = "none";
  document.getElementById("acomp").style.display = "none";
  document.getElementById("ata").style.display = "none";
  document.querySelector("#confIni").classList.add("active");
  document.querySelector("#geral").classList.remove("active");
  document.querySelector("#migra").classList.remove("active");
  document.querySelector("#acpt").classList.remove("active");
  document.querySelector("#ataNav").classList.remove("active");
  document.querySelector("#background-image").style.display = "none";
}

function geral() {
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("menuGeral").style.display = "block";
  document.getElementById("migração").style.display = "none";
  document.getElementById("acomp").style.display = "none";
  document.getElementById("ata").style.display = "none";
  document.querySelector("#confIni").classList.remove("active");
  document.querySelector("#geral").classList.add("active");
  document.querySelector("#migra").classList.remove("active");
  document.querySelector("#acpt").classList.remove("active");
  document.querySelector("#ataNav").classList.remove("active");
  document.querySelector("#background-image").style.display = "none";
}

function migra() {
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("menuGeral").style.display = "none";
  document.getElementById("migração").style.display = "block";
  document.getElementById("acomp").style.display = "none";
  document.getElementById("ata").style.display = "none";
  document.querySelector("#confIni").classList.remove("active");
  document.querySelector("#geral").classList.remove("active");
  document.querySelector("#migra").classList.add("active");
  document.querySelector("#acpt").classList.remove("active");
  document.querySelector("#ataNav").classList.remove("active");
  document.querySelector("#background-image").style.display = "none";
}

function acpt() {
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("menuGeral").style.display = "none";
  document.getElementById("migração").style.display = "none";
  document.getElementById("acomp").style.display = "block";
  document.getElementById("ata").style.display = "none";
  document.querySelector("#confIni").classList.remove("active");
  document.querySelector("#geral").classList.remove("active");
  document.querySelector("#migra").classList.remove("active");
  document.querySelector("#acpt").classList.add("active");
  document.querySelector("#ataNav").classList.remove("active");
  document.querySelector("#background-image").style.display = "none";
}

function ata() {
  document.getElementById("etapa1").style.display = "none";
  document.getElementById("menuGeral").style.display = "none";
  document.getElementById("migração").style.display = "none";
  document.getElementById("acomp").style.display = "none";
  document.getElementById("ata").style.display = "block";
  document.querySelector("#confIni").classList.remove("active");
  document.querySelector("#geral").classList.remove("active");
  document.querySelector("#migra").classList.remove("active");
  document.querySelector("#acpt").classList.remove("active");
  document.querySelector("#ata").classList.add("active");
  document.querySelector("#background-image").style.display = "none";
}

const darkMode = document.querySelector("#toggle_checkbox");

function darkOn() {
  const nav = document.querySelector(".navbar");
  const footer = document.querySelector("#footer");
  document.body.style.backgroundColor = "#0a0808";
  document.body.style.color = "white";
  nav.style.backgroundColor = "#003050";
  footer.style.backgroundColor = "#003050";
  footer.style.color = "white";
}

function sunOn() {
  const nav = document.querySelector(".navbar");
  const footer = document.querySelector("#footer");
  document.body.style.backgroundColor = "#e2e2e2";
  document.body.style.color = "#000000";
  nav.style.backgroundColor = "#005c9a";
  footer.style.backgroundColor = "white";
  footer.style.color = "#000";
}

darkMode.addEventListener("click", function () {
  if (darkMode.checked === true) {
    darkOn();
    localStorage.setItem("mode", "dark");
  } else {
    sunOn();
    localStorage.setItem("mode", "sun");
  }
});

window.onload = (event) => {
  let mode = localStorage.getItem("mode");
  if (mode == "sun") {
    sunOn();
    document.getElementById("toggle_checkbox").checked = false;
  } else if (mode == "dark") {
    darkOn();
    document.getElementById("toggle_checkbox").checked = true;
  }
};

function getMode() {
  let mode = localStorage.getItem("mode");
  console.log(mode);
}

document.querySelector("#comprometido").addEventListener("input", function () {
  const valor = document.querySelector("#comprometido-value");
  valor.innerHTML = `Nota: ${this.value}`;
});

document.querySelector("#tecnologico").addEventListener("input", function () {
  const valor2 = document.querySelector("#tecnologico-value");
  valor2.innerHTML = `Nota: ${this.value}`;
});

document.querySelector("#comprometido2").addEventListener("input", function () {
  const valor = document.querySelector("#comprometido2-value");
  valor.innerHTML = `Nota: ${this.value}`;
});

document.querySelector("#tecnologico2").addEventListener("input", function () {
  const valor2 = document.querySelector("#tecnologico2-value");
  valor2.innerHTML = `Nota: ${this.value}`;
});

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
  ).innerHTML = `- Usuários aprox: ${etapa4}`;

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

  let etapa11 = document.getElementById("ticket2").value;
  document.getElementById("etapa1resp11").innerHTML = `- Ticket: ${etapa11}`;

  let etapa12 = document.getElementById("TicketApp").value;
  document.getElementById(
    "etapa1resp12"
  ).innerHTML = `- Ticket do App e Area Vip: ${etapa12}`;

  let etapa13 = document.getElementById("obs").value;
  document.getElementById(
    "etapa1resp13"
  ).innerHTML = `- Informações Adicionais: ${etapa13}`;
}

function copRespFalta2() {
  var value = document.getElementsByName("etapa");
  let resp0 = "";
  for (var radio of value) {
    if (radio.checked) {
      resp0 = radio.value;
      document.getElementById("respFaltou").innerHTML = `${Gresp0}`;
    }
  }

  let resp1 = document.getElementById("uso").value;
  document.getElementById(
    "respFaltou1"
  ).innerHTML = `- Porcentagem de uso: ${Gresp1}%`;

  let falta = document.getElementById("faltaCliente").value;

  let GrespFalta3 = `Atrasaram: ${falta}`;
  document.getElementById(
    "respFaltou3"
  ).innerHTML = `Informaçoes sobre a falta: ${Gfalta}`;

  const textToCopy = `${Gresp0}\n${GrespFalta1}\n${GrespFalta3}`;
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
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
  let etapa13 = document.getElementById("etapa1resp13").textContent;

  var value = document.getElementsByName("faltaClient");
  let textToCopy = "";
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        textToCopy = `${etapa11}\n${etapa13}`;
        for (var i = 1; i <= 10; i++) {
          document.getElementById(`etapa1resp${i}`).innerHTML = ``;
        }
      } else {
        textToCopy = `${etapa1}\n${etapa2}\n${etapa3}\n${etapa4}\n${etapa5}\n${etapa6}\n${etapa7}\n${etapa8}\n${etapa9}\n${etapa10}\n${etapa12}\n${etapa11}\n${etapa13}`;
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

// ====================================================================================================

function infoGeral() {
  var value = document.getElementsByName("etapa");
  let resp0 = "";
  for (var checkbox of value) {
    if (checkbox.checked) {
      resp0 = resp0 + "- " + checkbox.value + " | ";
      document.getElementById("geralResp0").innerHTML = `${resp0}`;
    }
  }

  let resp1 = document.getElementById("uso").value;
  document.getElementById(
    "geralResp1"
  ).innerHTML = `- Porcentagem de uso: ${resp1}%`;

  let resp2 = document.getElementById("etp-uso").value;
  document.getElementById(
    "geralResp2"
  ).innerHTML = `- Uso do sistema: ${resp2}%`;

  let resp3 = document.getElementById("etp-acesso").value;
  document.getElementById(
    "geralResp3"
  ).innerHTML = `- Acesso no sistema: ${resp3}%`;

  let resp4 = document.getElementById("etp-entrega").value;
  document.getElementById(
    "geralResp4"
  ).innerHTML = `- Entregas no sistema : ${resp4}%`;

  let resp5 = document.getElementById("etp-robo").value;
  document.getElementById("geralResp5").innerHTML = `- Uso do robo: ${resp5}%`;

  let resp6 = document.getElementById("parcicipantes").value;
  document.getElementById(
    "geralResp6"
  ).innerHTML = `- Quem participou da consultoria/departamento: ${resp6}`;

  var value = document.getElementsByName("horario");
  for (var radio of value) {
    if (radio.checked) {
      let resp7 = radio.value;
      document.getElementById(
        "geralResp7"
      ).innerHTML = `- Teve atraso ? ${resp7} `;
    }
  }

  var value = document.getElementsByName("atividades");
  for (var radio of value) {
    if (radio.checked) {
      let resp8 = radio.value;
      document.getElementById(
        "geralResp8"
      ).innerHTML = `- Realizaram as atividades anteriores: ${resp8} `;
    }
  }

  var value = document.getElementsByName("participativos");
  for (var radio of value) {
    if (radio.checked) {
      let resp9 = radio.value;
      document.getElementById(
        "geralResp9"
      ).innerHTML = `- Participativos: ${resp9} `;
    }
  }

  var value = document.getElementsByName("problema");
  for (var radio of value) {
    if (radio.checked) {
      let resp10 = radio.value;
      document.getElementById(
        "geralResp10"
      ).innerHTML = `- Algum problema: ${resp10} `;
    }
  }

  var value = document.getElementsByName("nota");
  for (var radio of value) {
    if (radio.checked) {
      let resp11 = radio.value;
      document.getElementById(
        "geralResp11"
      ).innerHTML = `- Nota para a consultoria:  ${resp11} `;
    }
  }

  // ====================

  let resp12 = document.getElementById("ticketConsult").value;
  document.getElementById(
    "geralResp12"
  ).innerHTML = `- Ticket da consultoria: ${resp12}`;

  let resp13 = document.getElementById("geralObs").value;
  document.getElementById(
    "geralResp13"
  ).innerHTML = `- Informações Adicionais: ${resp13}`;

  var value = document.getElementsByName("btnBackup");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        let resp14 = document.getElementById("comprometido").value;
        document.getElementById(
          "geralResp14"
        ).innerHTML = `- Cliente comprometido: ${resp14}`;

        let resp15 = document.getElementById("tecnologico").value;
        document.getElementById(
          "geralResp15"
        ).innerHTML = `- Cliente tecnológico: ${resp15}`;

        let resp16 = document.getElementById("etapaBackup").value;
        document.getElementById(
          "geralResp16"
        ).innerHTML = `Informacoes para o consultoria de backup: ${resp16}`;
      }
    }
  }
}

function copResp2() {
  let resp0 = document.getElementById("geralResp0").textContent;
  let resp1 = document.getElementById("geralResp1").textContent;
  let resp2 = document.getElementById("geralResp2").textContent;
  let resp3 = document.getElementById("geralResp3").textContent;
  let resp4 = document.getElementById("geralResp4").textContent;
  let resp5 = document.getElementById("geralResp5").textContent;
  var value = document.getElementsByName("duvidas");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "Bastante dificuldade") {
        var value = document.getElementsByName("etapa2");
        let resp55 = "";
        for (var checkbox of value) {
          if (checkbox.checked) {
            resp55 = resp55 + "- " + checkbox.value + " | ";
          }
        } // Codigo para check box
        document.getElementById(
          "geralResp55"
        ).innerHTML = `- Em qual etapa tiveram dúvidas/dificuldades: ${resp55}`;
      }
    }
  }
  let resp55 = document.getElementById("geralResp55").textContent;
  let resp6 = document.getElementById("geralResp6").textContent;
  let resp7 = document.getElementById("geralResp7").textContent;
  let resp8 = document.getElementById("geralResp8").textContent;
  let resp9 = document.getElementById("geralResp9").textContent;
  let resp10 = document.getElementById("geralResp10").textContent;
  let resp11 = document.getElementById("geralResp11").textContent;
  let resp12 = document.getElementById("geralResp12").textContent;
  let resp13 = document.getElementById("geralResp13").textContent;
  var value = document.getElementsByName("btnBackup");
  console.log(resp13);
  let textToCopy = "";
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        textToCopy = `${resp0}\n${resp1}\n${resp2}\n${resp3}\n${resp4}\n${resp5}\n${resp55}\n${resp6}\n${resp7}\n${resp8}\n${resp9}\n${resp10}\n** Informaoces para o Backup **\n${resp11}\n${resp12}\n${resp13}\n${resp14}\n${resp15}\n${resp16}`;
      } else {
        textToCopy = `${resp0}\n${resp1}\n${resp2}\n${resp3}\n${resp4}\n${resp5}\n${resp55}\n${resp6}\n${resp7}\n${resp8}\n${resp9}\n${resp10}\n${resp11}\n${resp12}\n${resp13}`;
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

function faltou() {
  document.getElementById("falta").style.display = "block";
  document.getElementById("naoFaltou").style.display = "none";
  document.getElementById("faltouButton").style.display = "none";
  document.getElementById("faltou3").style.display = "none";
  document.getElementById("ticketConsult").style.display = "none";
}

function faltou3() {
  document.getElementById("faltou3").style.display = "none";
}

function falta() {
  document.getElementById("falta").style.display = "none";
  document.getElementById("naoFaltou").style.display = "block";
  document.getElementById("faltouButton").style.display = "block";
  document.getElementById("faltouButton").style.display = "block";
}

function duvida() {
  var value = document.getElementsByName("duvidas");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "Bastante dificuldade") {
        document.getElementById("duvida").style.display = "block";
      } else {
        document.getElementById("duvida").style.display = "none";
      }
      let resp5 = radio.value;
      document.getElementById(
        "geralResp5"
      ).innerHTML = `- Dúvidas/Dificuldades da etapa anterior: ${resp5} `;
    }
  }
}

function copRespFalta() {
  var value = document.getElementsByName("etapa");
  let resp0 = "";
  for (var radio of value) {
    if (radio.checked) {
      resp0 = radio.value;
      document.getElementById("respFaltou").innerHTML = `${resp0}`;
    }
  }

  let resp1 = document.getElementById("uso").value;
  document.getElementById(
    "respFaltou1"
  ).innerHTML = `- Porcentagem de uso: ${resp1}%`;
  let respFalta1 = `Porcentagem de uso: ${resp1}%`;

  let falta = document.getElementById("faltaCliente").value;
  let respFalta3 = `Atrasaram: ${falta}`;
  document.getElementById(
    "respFaltou3"
  ).innerHTML = `Informaçoes sobre a falta: ${falta}`;

  let resp4 = document.getElementById("etp-uso").value;
  document.getElementById("respFaltou4").innerHTML = `Uso: ${resp4}`;
  let respFalta4 = `Uso: ${resp4}`;

  let resp5 = document.getElementById("etp-acesso").value;
  document.getElementById("respFaltou5").innerHTML = `>Acesso: ${resp5}`;
  let respFalta5 = `Acesso: ${resp5}`;

  let resp6 = document.getElementById("etp-entrega").value;
  document.getElementById("respFaltou6").innerHTML = `>Entrega: ${resp6}`;
  let respFalta6 = `Entrega: ${resp6}`;

  let resp7 = document.getElementById("etp-robo").value;
  document.getElementById("respFaltou7").innerHTML = `>Robô: ${resp7}`;
  let respFalta7 = `Robô: ${resp6}`;

  const textToCopy = `${resp0}\n${respFalta1}\n${respFalta3}\n${respFalta4}\n${respFalta5}\n${respFalta6}\n${respFalta7}`;
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

function textoMigra() {
  let Aresp1 = document.getElementById("valorMigra").value;
  document.getElementById(
    "Mresp1"
  ).innerHTML = `- Valor do Acessórias: ${Aresp1}`;

  let Aresp2 = document.getElementById("referenciaMigra").value;
  document.getElementById(
    "Mresp2"
  ).innerHTML = `- Referencia técnica e seu departamento: ${Aresp2}`;

  let Aresp3 = document.getElementById("formaContato").value;
  document.getElementById(
    "Mresp3"
  ).innerHTML = `- Melhor forma de contato: ${Aresp3}`;

  let Aresp4 = document.getElementById("equipeEngajada").value;
  document.getElementById(
    "Mresp4"
  ).innerHTML = `- Equipe engajada? Quais?: ${Aresp4}`;

  let Aresp5 = document.getElementById("dispensaMassa").value;
  document.getElementById(
    "Mresp5"
  ).innerHTML = `- Dispensa em massa? ${Aresp5}`;

  let Aresp6 = document.getElementById("erp").value;
  document.getElementById("Mresp6").innerHTML = `- ERP: ${Aresp6}`;

  let Aresp7 = document.getElementById("smtp").value;
  document.getElementById("Mresp7").innerHTML = `- SMTP Ativo: ${Aresp7}`;

  let Aresp8 = document.getElementById("regUso").value;
  document.getElementById("Mresp8").innerHTML = `- Uso: ${Aresp8}%`;

  let Aresp9 = document.getElementById("acesso").value;
  document.getElementById("Mresp9").innerHTML = `- Acesso: ${Aresp9}`;

  let Aresp10 = document.getElementById("entregas").value;
  document.getElementById("Mresp10").innerHTML = `- Entregas: ${Aresp10}`;

  let Aresp11 = document.getElementById("robo").value;
  document.getElementById("Mresp11").innerHTML = `- Robô: ${Aresp11}`;

  let Aresp12 = document.getElementById("gestao").value;
  document.getElementById("Mresp12").innerHTML = `- Gestão: ${Aresp12}`;

  let Aresp13 = document.getElementById("app").value;
  document.getElementById("Mresp13").innerHTML = `- APP: ${Aresp13}`;

  let Aresp14 = document.getElementById("apla").value;
  document.getElementById("Mresp14").innerHTML = `- APLA: ${Aresp14}`;

  let Aresp15 = document.getElementById("ticketFinal").value;
  document.getElementById(
    "Mresp15"
  ).innerHTML = `- Número do Ticket de Finalização dos treinamentos: ${Aresp15}`;

  let Aresp16 = document.getElementById("dispensaTicket").value;
  document.getElementById(
    "Mresp16"
  ).innerHTML = `- Houve dispensa de treinamento ? ${Aresp16}`;

  let Aresp17 = document.getElementById("Minfo2").value;
  document.getElementById(
    "Mresp17"
  ).innerHTML = `- Informações Adicionais ${Aresp17}`;
}

function copResp3() {
  let resp0 = document.getElementById("Mresp1").textContent;
  let resp1 = document.getElementById("Mresp2").textContent;
  let resp2 = document.getElementById("Mresp3").textContent;
  let resp3 = document.getElementById("Mresp4").textContent;
  let resp4 = document.getElementById("Mresp5").textContent;
  let resp5 = document.getElementById("Mresp6").textContent;
  let resp6 = document.getElementById("Mresp7").textContent;
  let resp7 = document.getElementById("Mresp8").textContent;
  let resp8 = document.getElementById("Mresp9").textContent;
  let resp9 = document.getElementById("Mresp10").textContent;
  let resp10 = document.getElementById("Mresp11").textContent;
  let resp11 = document.getElementById("Mresp12").textContent;
  let resp12 = document.getElementById("Mresp13").textContent;
  let resp13 = document.getElementById("Mresp14").textContent;
  let resp14 = document.getElementById("Mresp15").textContent;
  let resp15 = document.getElementById("Mresp16").textContent;
  let resp18 = document.getElementById("Mresp17").textContent;
  const textToCopy = `${resp0}\n${resp1}\n${resp2}\n${resp3}\n${resp4}\n${resp5}\n${resp6}\n${resp7}\n${resp8}\n${resp9}\n${resp10}\n${resp11}\n${resp12}\n${resp13}\n${resp14}\n${resp15}\n${resp18}`;
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function acompTexto() {
  let Aresp1 = document.getElementById("contato").value;
  document.getElementById("Aresp1").innerHTML = `- Contato com: ${Aresp1}`;

  let Aresp2 = document.getElementById("ticketAcomp").value;
  document.getElementById("Aresp2").innerHTML = `- Ticket: ${Aresp2}`;

  let Aresp3 = document.getElementById("AregUso").value;
  document.getElementById("Aresp3").innerHTML = `- Uso: ${Aresp3}%`;

  let Aresp4 = document.getElementById("Aacesso").value;
  document.getElementById("Aresp4").innerHTML = `- Acesso: ${Aresp4}%`;

  let Aresp5 = document.getElementById("Aentregas").value;
  document.getElementById("Aresp5").innerHTML = `- Entregas: ${Aresp5}%`;

  let Aresp6 = document.getElementById("Arobo").value;
  document.getElementById("Aresp6").innerHTML = `- Robô: ${Aresp6}%`;

  let Aresp7 = document.getElementById("tratativa").value;
  document.getElementById("Aresp7").innerHTML = `- Tratativa: ${Aresp7}`;

  var value = document.getElementsByName("btnBackup2");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        let Aresp8 = document.getElementById("comprometido2").value;
        document.getElementById(
          "Aresp8"
        ).innerHTML = `- Cliente comprometido: ${Aresp8}`;

        let Aresp9 = document.getElementById("tecnologico2").value;
        document.getElementById(
          "Aresp9"
        ).innerHTML = `- Cliente tecnológico: ${Aresp9}`;

        let Aresp10 = document.getElementById("etapaBackup2").value;
        document.getElementById(
          "Aresp10"
        ).innerHTML = `Informacoes para o consultoria de backup: ${Aresp10}`;
      }
    }
  }
}

function pergBackup2() {
  var value = document.getElementsByName("btnBackup2");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        document.getElementById("telaBackup2").style.display = "block";
      } else {
        document.getElementById("telaBackup2").style.display = "none";
        document.getElementById("Aresp8").innerHTML = ``;
        document.getElementById("Aresp9").innerHTML = ``;
        document.getElementById("Aresp10").innerHTML = ``;
      }
    }
  }
}

function copResp4() {
  let resp0 = document.getElementById("Aresp1").textContent;
  let resp1 = document.getElementById("Aresp2").textContent;
  let resp2 = document.getElementById("Aresp3").textContent;
  let resp3 = document.getElementById("Aresp4").textContent;
  let resp4 = document.getElementById("Aresp5").textContent;
  let resp5 = document.getElementById("Aresp6").textContent;
  let resp6 = document.getElementById("Aresp7").textContent;
  let resp7 = document.getElementById("Aresp8").textContent;
  let resp8 = document.getElementById("Aresp9").textContent;
  let resp9 = document.getElementById("Aresp10").textContent;
  var value = document.getElementsByName("btnBackup2");
  let textToCopy = "";
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        textToCopy = `${resp0}\n${resp1}\n${resp2}\n${resp3}\n${resp4}\n${resp5}\n${resp6}\n\n** Informações para o Backup **\n${resp7}\n${resp8}\n${resp9}`;
      } else {
        textToCopy = `${resp0}\n${resp1}\n${resp2}\n${resp3}\n${resp4}\n${resp5}\n${resp6}\n${resp7}`;
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

function faltaClient() {
  var value = document.getElementsByName("faltaClient");
  for (var radio of value) {
    if (radio.checked) {
      if (radio.value == "yes") {
        document.getElementById("faltou3").style.display = "none";
      } else {
        document.getElementById("faltou3").style.display = "block";
      }
    }
  }
}

function deleteRespInicio() {
  document.getElementById("dono").value = "";
  document.getElementById("resp").value = "";
  document.getElementById("quem").value = "";
  document.getElementById("usuario").value = "";
  document.getElementById("empresas").value = "";
  document.getElementById("sistemaContabil").value = "";
  document.getElementById("jaUsaram").value = "";
  document.getElementById("formas").value = "";
  document.getElementById("maioriaRegimes").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("TicketApp").value = "";
  document.getElementById("ticket2").value = "";
  document.getElementById("obs").value = "";
}

function deleteRespGeral() {
  document.getElementById("uso").value = "";
  document.getElementById("parcicipantes").value = "";
  document.getElementById("ticketConsult").value = "";
  document.getElementById("geralObs").value = "";
  document.getElementById("comprometido").value = "";
  document.getElementById("comprometido").value = "";
  document.getElementById("tecnologico").value = "";
  document.getElementById("etapaBackup").value = "";
  document.getElementById("etp-uso").value = "";
  document.getElementById("etp-acesso").value = "";
  document.getElementById("etp-entrega").value = "";
  document.getElementById("etp-robo").value = "";
}

function deleteRespMigra() {
  document.getElementById("valorMigra").value = "";
  document.getElementById("referenciaMigra").value = "";
  document.getElementById("formaContato").value = "";
  document.getElementById("equipeEngajada").value = "";
  document.getElementById("dispensaMassa").value = "";
  document.getElementById("erp").value = "";
  document.getElementById("smtp").value = "";
  document.getElementById("regUso").value = "";
  document.getElementById("acesso").value = "";
  document.getElementById("entregas").value = "";
  document.getElementById("robo").value = "";
  document.getElementById("gestao").value = "";
  document.getElementById("app").value = "";
  document.getElementById("apla").value = "";
  document.getElementById("ticketFinal").value = "";
  document.getElementById("dispensaTicket").value = "";
  document.getElementById("Minfo2").value = "";
}

function deleteRespAcomp() {
  document.getElementById("contato").value = "";
  document.getElementById("ticketAcomp").value = "";
  document.getElementById("AregUso").value = "";
  document.getElementById("Aacesso").value = "";
  document.getElementById("Aentregas").value = "";
  document.getElementById("Arobo").value = "";
  document.getElementById("tratativa").value = "";
  document.getElementById("comprometido2").value = "";
  document.getElementById("tecnologico2").value = "";
  document.getElementById("etapaBackup2").value = "";
}
