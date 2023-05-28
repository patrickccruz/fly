document.querySelector(".doc-content").style.display = 'none'

function PrintElem(){
    const pdfPage = window.open('', 'PRINT', 'blank');
    pdfPage.document.write('<html><head><title>' + '</title>' + '<link rel="stylesheet" href="style_ata.css" />');
    pdfPage.document.write('</head><body >');
    pdfPage.document.write(document.querySelector(".doc-content").innerHTML);
    pdfPage.document.write('</body></html>');
    pdfPage.document.close();
    pdfPage.focus();
    pdfPage.print();
    return true;
}

function preenhcerPDF(){
    document.querySelector("#cliente-label").innerHTML = document.querySelector("#cliente-input").value
    document.querySelector("#inicio-label").innerHTML = document.querySelector("#inicio-input").value
    document.querySelector("#finalizacao-label").innerHTML = document.querySelector("#finalizacao-input").value
}

document.querySelector("#pre-vizualizar").addEventListener("click", function(){
    if(document.querySelector(".doc-content").style.display === 'none'){
        document.querySelector(".doc-content").style.display = 'block'
    } else {
        document.querySelector(".doc-content").style.display = 'none'
    }
    preenhcerPDF()
})

document.querySelector("#preencherPDF").addEventListener("click", function(){
    preenhcerPDF()
    PrintElem(document.querySelector(".doc-content"))
})

