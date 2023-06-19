document.querySelector(".doc-content").style.display = "none";

function PrintElem() {
  const pdfPage = window.open("", "PRINT", "height=800,width=800");
  pdfPage.document.write(
    "<html><head><title>" +
      "</title>" +
      '<link rel="stylesheet" href="style_ata.css" />'
  );
  pdfPage.document.write("</head><body >");
  pdfPage.document.write(document.querySelector(".doc-content").innerHTML);
  pdfPage.document.write("</body></html>");
  pdfPage.document.close();
  pdfPage.focus();
  pdfPage.print();
  return true;
}

function preenhcerPDF() {
  document.querySelector("#cliente-label").innerHTML =
    document.querySelector("#cliente-input").value;
  document.querySelector("#inicio-label").innerHTML =
    document.querySelector("#inicio-input").value;
  // document.querySelector("#finalizacao-label").innerHTML =
  //   document.querySelector("#finalizacao-input").value;
  // document.querySelector("#responsavel-label").innerHTML =
  //   document.querySelector("#responsavel-input").value;
  // document.querySelector("#telefone-label").innerHTML =
  //   document.querySelector("#telefone-input").value;
  // document.querySelector("#telefone2-label").innerHTML =
  //   document.querySelector("#telefone2-input").value;
  // document.querySelector("#contratante-label").innerHTML =
  //   document.querySelector("#contratante-input").value;
  // document.querySelector("#consultor-label").innerHTML =
  //   document.querySelector("#consultor-input").value;
  // document.querySelector("#emailConsultor-label").innerHTML =
  //   document.querySelector("#emailConsultor-input").value;
  // document.querySelector("#alinhamento-label").innerHTML =
  //   document.querySelector("#alinhamento-input").value;
  // document.querySelector("#dataAlin-label").innerHTML =
  //   document.querySelector("#dataAlin-input").value;
  // document.querySelector("#horaAlin-label").innerHTML =
  //   document.querySelector("#horaAlin-input").value;
  // document.querySelector("#statusAlin-label").innerHTML =
  //   document.querySelector("#statusAlin-input").value;
  // document.querySelector("#consutoria1-label").innerHTML =
  //   document.querySelector("#consutoria1-input").value;
  // document.querySelector("#dataConsu1-label").innerHTML =
  //   document.querySelector("#dataConsu1-input").value;
  // document.querySelector("#horaConsu1-label").innerHTML =
  //   document.querySelector("#horaConsu1-input").value;
  // document.querySelector("#statusConsu1-label").innerHTML =
  //   document.querySelector("#statusConsu1-input").value;
  // document.querySelector("#consutoria2-label").innerHTML =
  //   document.querySelector("#consutoria2-input").value;
  // document.querySelector("#dataConsu2-label").innerHTML =
  //   document.querySelector("#dataConsu2-input").value;
  // document.querySelector("#horaConsu2-label").innerHTML =
  //   document.querySelector("#horaConsu2-input").value;
  // document.querySelector("#statusConsu2-label").innerHTML =
  //   document.querySelector("#statusConsu2-input").value;
  // document.querySelector("#consutoria3-label").innerHTML =
  //   document.querySelector("#consutoria3-input").value;
  // document.querySelector("#dataConsu3-label").innerHTML =
  //   document.querySelector("#dataConsu3-input").value;
  // document.querySelector("#horaConsu3-label").innerHTML =
  //   document.querySelector("#horaConsu3-input").value;
  // document.querySelector("#statusConsu3-label").innerHTML =
  //   document.querySelector("#statusConsu3-input").value;
  // document.querySelector("#consutoria4-label").innerHTML =
  //   document.querySelector("#consutoria4-input").value;
  // document.querySelector("#dataConsu4-label").innerHTML =
  //   document.querySelector("#dataConsu4-input").value;
  // document.querySelector("#horaConsu4-label").innerHTML =
  //   document.querySelector("#horaConsu4-input").value;
  // document.querySelector("#statusConsu4-label").innerHTML =
  //   document.querySelector("#statusConsu4-input").value;
  // document.querySelector("#consutoria5-label").innerHTML =
  //   document.querySelector("#consutoria5-input").value;
  // document.querySelector("#dataConsu5-label").innerHTML =
  //   document.querySelector("#dataConsu5-input").value;
  // document.querySelector("#horaConsu5-label").innerHTML =
  //   document.querySelector("#horaConsu5-input").value;
  // document.querySelector("#statusConsu5-label").innerHTML =
  //   document.querySelector("#horaConsu5-input").value;
  // document.querySelector("#consutoria6-label").innerHTML =
  //   document.querySelector("#consutoria6-input").value;
  // document.querySelector("#dataConsu6-label").innerHTML =
  //   document.querySelector("#dataConsu6-input").value;
  // document.querySelector("#horaConsu6-label").innerHTML =
  //   document.querySelector("#horaConsu6-input").value;
  // document.querySelector("#statusConsu6-label").innerHTML =
  //   document.querySelector("#statusConsu6-input").value;
  // document.querySelector("#cadrastro-Responsavel-label").innerHTML =
  //   document.querySelector("#cadrastro-Responsavel-input").value;
  // document.querySelector("#cadrastro-prazo-label").innerHTML =
  //   document.querySelector("#cadrastro-prazo-input").value;
  // document.querySelector("#cadrastro-status-label").innerHTML =
  //   document.querySelector("#cadrastro-status-input").value;
  // document.querySelector("#cadrastro-status-label").innerHTML =
  //   document.querySelector("#cadrastro-status-input").value;
  // document.querySelector("#revisao-responsavel-label").innerHTML =
  //   document.querySelector("#revisao-responsavel-input").value;
  // document.querySelector("#revisao-status-label").innerHTML =
  //   document.querySelector("#revisao-status-input").value;
  // document.querySelector("#revisaoObrigacao-responsavel-label").innerHTML =
  //   document.querySelector("#revisaoObrigacao-responsavel-input").value;
  // document.querySelector("#revisaoObrigacao-prazo-label").innerHTML =
  //   document.querySelector("#revisaoObrigacao-prazo-input").value;
  // document.querySelector("#revisaoObrigacao-status-label").innerHTML =
  //   document.querySelector("#revisaoObrigacao-status-input").value;
  // document.querySelector("#revisaoRegime-responsavel-label").innerHTML =
  //   document.querySelector("#revisaoRegime-responsavel-input").value;
  // document.querySelector("#revisaoRegime-prazo-label").innerHTML =
  //   document.querySelector("#revisaoRegime-prazo-input").value;
  // document.querySelector("#revisaoRegime-status-label").innerHTML =
  //   document.querySelector("#revisaoRegime-status-input").value;
  // document.querySelector("#preenchimento-responsavel-label").innerHTML =
  //   document.querySelector("#preenchimento-responsavel-input").value;
  // document.querySelector("#preenchimento-prazo-label").innerHTML =
  //   document.querySelector("#preenchimento-prazo-input").value;
  // document.querySelector("#preenchimento-status-label").innerHTML =
  //   document.querySelector("#preenchimento-status-input").value;
  // document.querySelector("#cadrastroCliente-responsavel-label").innerHTML =
  //   document.querySelector("#cadrastroCliente-responsavel-input").value;
  // document.querySelector("#cadrastroCliente-prazo-label").innerHTML =
  //   document.querySelector("#cadrastroCliente-prazo-input").value;
  // document.querySelector("#cadrastroCliente-status-label").innerHTML =
  //   document.querySelector("#cadrastroCliente-status-input").value;
  // document.querySelector("#revisaoEmpresas-responsavel-label").innerHTML =
  //   document.querySelector("#revisaoEmpresas-responsavel-input").value;
  // document.querySelector("#revisaoEmpresas-prazo-label").innerHTML =
  //   document.querySelector("#revisaoEmpresas-prazo-input").value;
  // document.querySelector("#revisaoEmpresas-prazo-label").innerHTML =
  //   document.querySelector("#revisaoEmpresas-prazo-input").value;
  // document.querySelector("#econtinuo-responsavel-label").innerHTML =
  //   document.querySelector("#revisaoEmpresas-prazo-input").value;
}

document
  .querySelector("#pre-vizualizar")
  .addEventListener("click", function () {
    if (document.querySelector(".doc-content").style.display === "none") {
      document.querySelector(".doc-content").style.display = "block";
    } else {
      document.querySelector(".doc-content").style.display = "none";
    }
    preenhcerPDF();
  });

document.querySelector("#preencherPDF").addEventListener("click", function () {
  preenhcerPDF();
  PrintElem(document.querySelector(".doc-content"));
});
