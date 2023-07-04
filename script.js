<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Preenchimento Fly</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
  <link rel="shortcut icon" type="imagex/png" href="./images/logo.png" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="style_ata.css" />
  <script src="pdfsubmit.js" defer></script>
</head>



<nav class="navbar navbar-expand-lg" style="background-color: #005c9a">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://app.acessorias.com/sysmain.php?m=145" target="_blank"
      style="color: #fff; font-weight: 600">
      <img src="images/logo.png" alt="Logo" height="24" class="d-inline-block align-text-top" />
      Preenchimento Fly
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="confIni" onclick="confIni()" href="#">Alinhamento Inicial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="geral" onclick="geral()" href="#">Etapas Gerais</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="migra" onclick="migra()" href="#">Migração</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="acpt" onclick="acpt()" href="#">Acompanhamento</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="ataNav" onclick="Ata()" href="#">Gerador de Ata | Em breve....</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" id="AnotaçõesNav" onclick="notas()" href="#">Anotações salvas| Em breve....</a>
        </li>
        <li class="nav-item toogle-sun-moon">
          <input type="checkbox" id="toggle_checkbox" />
          <label class="label-darkmode-add" for="toggle_checkbox">
            <div id="star">
              <div class="star" id="star-1">★</div>
              <div class="star" id="star-2">★</div>
            </div>
            <div id="moon"></div>
          </label>
        </li>
      </ul>
    </div>
  </div>
</nav>

<nav class="container-fluid " style="background-color: #005c9a" id="dados">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="  Coloque o seu E-mail corporativo" aria-label="Search">
      <input class="form-control me-2" type="search" placeholder="  Procure pelo Numero do Officer" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Procurar</button>
    </form>
  </div>
</nav>

<div class="alert alert-warning alert-dismissible fade show" role="alert" style="display: none;">
  <strong>⛔Aviso Importante⛔</strong> <br> Fiz algumas alterações no sistema, a parte de e-mail e Officer não esta funcional.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div class="bg-image " id="background-image" style="
        background-image: url('images/background.png');
        height: 86.5vh;
        background-size: cover;
        
      "></div>


<div class="container-fluid mt-3" id="etapa1">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <article>
        <div class="row mb-3">
          <h2>Introdução ao Cliente</h2>
        </div>
        <div>
          <h5 class="mb-3">Cliente faltou ?</h5>
        </div>
        <div class="mb-3" onclick="faltaClient()">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="faltaClient" id="inlineRadio1" value="yes" />
            <label class="form-check-label" for="inlineRadio1">Sim</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="faltaClient" id="inlineRadio2" value="no" checked />
            <label class="form-check-label" for="inlineRadio2">Não</label>
          </div>
        </div>
        <div id="faltou3">
          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" id="officer" oninput="teste()" />
            <label for="floatingTextarea">Numero do Officer</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" id="dono" oninput="teste()" />
            <label for="floatingTextarea">Dono do escritório:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" id="resp" oninput="teste()" />
            <label for="floatingTextarea">Responsável Técnico:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" id="quem" oninput="teste()" />
            <label for="floatingTextarea">Quem participou da consultoria:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="number" placeholder="Leave a comment here" id="usuario"
              oninput="teste()" />
            <label for="floatingTextarea">Usuários aproximado:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="number" placeholder="Leave a comment here" id="empresas"
              oninput="teste()" />
            <label for="floatingTextarea">Empresas aproximado:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="text" placeholder="Leave a comment here" id="sistemaContabil"
              oninput="teste()" />
            <label for="floatingTextarea">Sistema Contábil:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="text" placeholder="Leave a comment here" id="jaUsaram"
              oninput="teste()" />
            <label for="floatingTextarea">Ja usaram sistema de gestão:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="text" placeholder="Leave a comment here" id="formas" oninput="teste()" />
            <label for="floatingTextarea">Forma de entrega: (se recebem por email, wpp ou
              físico):</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="text" placeholder="Leave a comment here" id="maioriaRegimes"
              oninput="teste()" />
            <label for="floatingTextarea">Qual a maioria dos regimes tributários:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="text" placeholder="Leave a comment here" id="valor" oninput="teste()" />
            <label for="floatingTextarea">Valor da Acessórias mais chamou atenção:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" type="text" placeholder="Leave a comment here" id="TicketApp"
              oninput="teste()" />
            <label for="floatingTextarea">Ticket do App e Area Vip:</label>
          </div>
        </div>

        <div class="form-floating mb-3">
          <input class="form-control" type="text" placeholder="Leave a comment here" id="ticket2" oninput="teste()" />
          <label for="floatingTextarea">Ticket:</label>
        </div>

        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="obs" style="height: 250px"
            oninput="teste()"></textarea>
          <label for="floatingTextarea2">Informações Adicionais:</label>
        </div>

        <div class="mb-3 mt-3" id="botao-geral">
          <button type="button" class="btn btn-outline-primary" onclick="copResp()" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Copiar Texto
          </button>
          <button type="button" class="btn btn-outline-danger" onclick="deleteRespInicio()">
            Apagar Tudo
          </button>
        </div>

         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Texto Copiado
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="alert alert-warning" role="alert">
                  Não esqueça de colocar o ticket da consultoria e do app
                </div>
                <p id="etapa1resp1"></p>
                <p id="etapa1resp2"></p>
                <p id="etapa1resp3"></p>
                <p id="etapa1resp4"></p>
                <p id="etapa1resp5"></p>
                <p id="etapa1resp6"></p>
                <p id="etapa1resp7"></p>
                <p id="etapa1resp8"></p>
                <p id="etapa1resp9"></p>
                <p id="etapa1resp10"></p>
                <p id="etapa1resp12"></p>
                <p id="etapa1resp11"></p>
                <p id="etapa1resp13"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

<!------------------------------------------------ Etapas gerais -------------------------------------------------------------------->

<div class="container-fluid mt-3" id="menuGeral">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <article>
        <div class="row mb-3">
          <h3>Etapas Gerais</h3>
        </div>
          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" id="officer" oninput="teste()" />
            <label for="floatingTextarea">Numero do Officer</label>
          </div>
        <div class="mb-3" id="etapa-geral">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Configuração inicial"
              id="flexCheckDefault" oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault">Configuração inicial</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Lista de Tarefas" id="flexCheckDefault2"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault2">Lista de Tarefas</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Robô" id="flexCheckDefault3"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault3">Robô</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Gestão de Processos"
              id="flexCheckDefault5" oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault5">Gestão de Processos</label>
          </div>
        </div>

        <div class="mb-3" id="">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Departamentos" id="flexCheckDefault6"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault6">Departamentos</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="APP" id="flexCheckDefault7"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault7">APP</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Revisão/Tira Dúvidas"
              id="flexCheckDefault8" oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault8">Revisão/Tira Dúvidas</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Retomada" id="flexCheckDefault9"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault9">Retomada</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="APLA" id="flexCheckDefault10"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault9">APLA</label>
          </div>
        </div>

        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" id="etp-uso" oninput="infoGeral()" />
          <label for="floatingTextarea2">Uso:</label>
        </div>
        
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" id="etp-acesso" oninput="infoGeral()" />
          <label for="floatingTextarea2">Acesso:</label>
        </div>

        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" id="etp-entrega" oninput="infoGeral()" />
          <label for="floatingTextarea2">Entrega:</label>
        </div>

        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" id="etp-robo" oninput="infoGeral()" />
          <label for="floatingTextarea2">Robô:</label>
        </div>

        <div id="naoFaltou2 mb-3">
          <div class="form-floating">
            <input class="form-control" placeholder="Leave a comment here" type="text" id="parcicipantes"
              oninput="infoGeral()" />
            <label for="floatingTextarea2">Quem participou da consultoria/departamento:</label>
          </div>
        </div>

        <div class="row mb-3 mt-3">
          <h3>Observações sobre a consultoria</h3>
        </div>

        <div class="row mb-3">
          <h5>Contabilidade Atrasou ?</h5>
        </div>

        <div class="mb-3" onclick="falta()">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="horario" id="inlineRadio1" value="Não"
              oninput="infoGeral()" />
            <label class="form-check-label" for="inlineRadio1">Não</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="horario" id="inlineRadio2" value="+10 minutos atrasados"
              oninput="infoGeral()" />
            <label class="form-check-label" for="inlineRadio2">+10 min atrasados</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="horario" id="inlineRadio3" value=+15 minutos atrasados"
              oninput="infoGeral()" />
            <label class="form-check-label" for="inlineRadio3">+15 min atrasados</label>
          </div>
        </div>

        <div class="mb-3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="horario" id="inlineRadio1" value="+20 minutos atrasados"
              oninput="infoGeral()" />
            <label class="form-check-label" for="inlineRadio1">+20 min atrasados</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="horario" id="inlineRadio2" value="Faltou"
              oninput="faltou()" />
            <label class="form-check-label" for="inlineRadio2">Faltou!</label>
          </div>
        </div>
        

        <div class="form-check form-check-inline mb-3" id="falta" style="display: none">
          <div class="alert alert-warning" role="alert">
            Preencher com informações importantes para serem preenchidas no Fly NÃO ESQUEÇA DO TICKET
          </div>
          <textarea class="form-control" name="etapaBackup2" id="faltaCliente" rows="5" cols="55"></textarea>
          <button type="button" class="btn btn-outline-primary mt-3" onclick="copRespFalta()" data-bs-toggle="modal"
            data-bs-target="#exampleModaFaltou">
            Copiar Texto
          </button>
          <button type="button" class="btn btn-outline-danger mt-3" onclick="deleteRespGeral()">
            Apagar Tudo
          </button>
        </div>

        <div class="modal fade" id="exampleModaFaltou" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Texto Copiado
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p id="respFaltou"></p>
                <p id="respFaltou1"></p>
                <p id="respFaltou2"></p>
                <p id="respFaltou3"></p>
                <p id="respFaltou4"></p>
                <p id="respFaltou5"></p>
                <p id="respFaltou6"></p>
                <p id="respFaltou7"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="naoFaltou">
          <div class="row mb-3">
            <h5>Realizaram as atividades anteriores?</h5>
          </div>

          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="atividades" id="inlineRadio1" value="Sim, a maioria"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">Sim, a maioria</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="atividades" id="inlineRadio2" value="Em partes"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Em partes</label>
            </div>
          </div>

          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="atividades" id="inlineRadio1" value="Pouco"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">Pouco</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="atividades" id="inlineRadio2" value="Nada"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Nada</label>
            </div>
          </div>

          <div class="row mb-3">
            <h5>Dúvidas/Dificuldades da etapa anterior?</h5>
          </div>

          <div class="mb-3" onclick="duvida()">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="duvidas" id="inlineRadio1" value="Não, entenderam bem"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">Não, entenderam bem</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="duvidas" id="inlineRadio2" value="Algumas dúvidas"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Algumas dúvidas</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="duvidas" id="inlineRadio2" value="Bastante dificuldade"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Bastante dificuldade</label>
            </div>
          </div>

          <div id="duvida" style="display: none">
            <div class="row mb-3">
              <h5>Em qual etapa tiveram dúvidas/dificuldades?</h5>
            </div>

            <div class="mb-3" id="etapa2">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Configuração inicial"
                  id="flexCheckDefault" oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault">Configuração inicial</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Lista de Tarefas"
                  id="flexCheckDefault2" oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault2">Lista de Tarefas</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Robô" id="flexCheckDefault3"
                  oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault3">Robô</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Lista/Robô" id="flexCheckDefault4"
                  oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault4">Lista/Robô</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Gestão de Processos"
                  id="flexCheckDefault5" oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault5">Gestão de Processos</label>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Departamentos"
                  id="flexCheckDefault6" oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault6">Departamentos</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="APP" id="flexCheckDefault7"
                  oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault7">APP</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Revisão/Tira Dúvidas"
                  id="flexCheckDefault8" oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault8">Revisão/Tira Dúvidas</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="etapa2" value="Retomada" id="flexCheckDefault9"
                  oninput="duvida()" />
                <label class="form-check-label" for="flexCheckDefault9">Retomada</label>
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <h5>Participativos?</h5>
          </div>

          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="participativos" id="inlineRadio1"
                value="Bem Participativos" oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">Bem Participativos</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="participativos" id="inlineRadio2"
                value="Participativos" oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Participativos</label>
            </div>
          </div>

          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="participativos" id="inlineRadio1"
                value="Pouco Participativos" oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">Pouco Participativos</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="participativos" id="inlineRadio2"
                value="Sem Participação" oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Sem Participação</label>
            </div>
          </div>

          <div class="row mb-3">
            <h5>Algum problema?</h5>
          </div>

          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="problema" id="inlineRadio1" value="Não"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">Não</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="problema" id="inlineRadio2"
                value="Dificuldade de Aprendizagem" oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Dificuldade de Aprendizagem</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="problema" id="inlineRadio2"
                value="Insatisfação com o que viu" oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">Insatisfação com o que viu</label>
            </div>
          </div>

          <div class="row mb-3">
            <h5>Nota para a consultoria:</h5>
          </div>

          <div class="mb-3">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio1" value="1"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio2" value="2"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio2" value="3"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio1" value="4"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio2" value="5"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">5</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio2" value="6"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">6</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio1" value="7"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio1">7</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio2" value="8"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">8</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio2" value="9"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">9</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="nota" id="inlineRadio2" value="10"
                oninput="infoGeral()" />
              <label class="form-check-label" for="inlineRadio2">10</label>
            </div>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="ticketConsult"
              oninput="infoGeral()" />
            <label for="floatingTextarea2">Ticket da consultoria:</label>
          </div>

          <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Leave a comment here" id="geralObs" style="height: 250px"
              oninput="infoGeral()"></textarea>
            <label for="floatingTextarea2">Informações Adicionais:</label>
          </div>

          <div class="row mb-3">
            <h5>Backup?</h5>
          </div>

          <div class="mb-4">
            <div class="form-check form-check-inline">
              <input class="form-check-input" name="btnBackup" type="radio" name="simBackup" id="inlineRadio1"
                value="yes" oninput="pergBackup()" />
              <label class="form-check-label" for="inlineRadio1">Sim</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" name="btnBackup" type="radio" name="naoBackup" id="inlineRadio2"
                value="no" oninput="pergBackup()" checked />
              <label class="form-check-label" for="inlineRadio2">Não</label>
            </div>
          </div>

          <div id="telaBackup" class="mb-3" style="display: none">
            <div class="card col-sm-12 col-md-11">
              <div class="card-header">
                <h5>Informações para o Backup</h5>
              </div>
              <div class="card-body">
                <div class="mb-3 row">
                  <label for="customRange1" class="form-label">Cliente comprometido?&nbsp;<span
                      id="comprometido-value">Nota: 5</span></label>
                  <input type="range" class="form-range" id="comprometido" min="0" max="10" step="1"
                    oninput="iTec.innerHTML=Number(tecnologico.value)" onchange="infoGeral()" />
                </div>
                <div class="mb-3 row">
                  <label for="customRange1" class="form-label">Cliente tecnológico?&nbsp;<span
                      id="tecnologico-value">Nota: 5</span></label>
                  <input type="range" class="form-range" id="tecnologico" min="0" max="10" step="1"
                    oninput="iTec.innerHTML=Number(tecnologico.value)" onchange="infoGeral()" />
                </div>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="etapaBackup" style="height: 250px"
                    style="height: 100px"
                    placeholder="Preencher com informações importantes para o consultor do Backup realizar sua consultoria com mais praticidade."
                    oninput="infoGeral()"></textarea>
                  <label for="floatingTextarea2">Informações Adicionais:</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-3" id="faltouButton">
          <button type="button" class="btn btn-outline-primary" onclick="copResp2()" data-bs-toggle="modal"
            data-bs-target="#exampleModal3">
            Copiar Texto
          </button>
          <button type="button" class="btn btn-outline-danger" onclick="deleteRespGeral()">
            Apagar Tudo
          </button>
        </div>

        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Texto Copiado
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="alert alert-warning" role="alert">
                  Não esqueça de criar o Ticket no movidesk !
                </div>
                <p id="geralResp0"></p>
                <p id="geralResp1"></p>
                <p id="geralResp2"></p>
                <p id="geralResp3"></p>
                <p id="geralResp4"></p>
                <p id="geralResp5"></p>
                <p id="geralResp55"></p>
                <p id="geralResp6"></p>
                <p id="geralResp7"></p>
                <p id="geralResp8"></p>
                <p id="geralResp9"></p>
                <p id="geralResp10"></p>
                <p id="geralResp11"></p>
                <p id="geralResp12"></p>
                <p id="geralResp13"></p>
                <p id="geralResp14"></p>
                <p id="geralResp15"></p>
                <p id="geralResp16"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
<!------------------------------------------------ Migração -------------------------------------------------------------------->
<div class="container-fluid mt-3" id="migração">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <article>
        <div class="row mb-3">
          <h3>Migração</h3>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" id="officer" oninput="teste()" />
          <label for="floatingTextarea">Numero do Officer</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="valorMigra"
            oninput="textoMigra()" />
          <label for="valorMigra">Valor do Acessórias para o cliente:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="referenciaMigra"
            oninput="textoMigra()" />
          <label for="referenciaMigra">Referencia técnica e seu departamento atual:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="formaContato"
            oninput="textoMigra()" />
          <label for="formaContato">Melhor forma de contato com o cliente:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="equipeEngajada"
            oninput="textoMigra()" />
          <label for="equipeEngajada">Equipe engajada? Quais?</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="dispensaMassa"
            oninput="textoMigra()" />
          <label for="dispensaMassa">Teve dispensa em massa?</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="erp"
            oninput="textoMigra()" />
          <label for="erp">Qual sistema Contábil ?</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="smtp"
            oninput="textoMigra()" />
          <label for="smtp">SMTP Ativo ?</label>
        </div>
        <div class="row mb-3">
          <h5>Registro de uso</h5>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="regUso"
            oninput="textoMigra()" />
          <label for="regUso">Uso:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="acesso"
            oninput="textoMigra()" />
          <label for="acesso">Acesso:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="entregas"
            oninput="textoMigra()" />
          <label for="entregas">Entregas:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="robo"
            oninput="textoMigra()" />
          <label for="robo">Robô:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="gestao"
            oninput="textoMigra()" />
          <label for="gestao"> Foi aplicado Gestão de Processo?</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="app"
            oninput="textoMigra()" />
          <label for="app">Foi aplicado Aplicativo e Area Vip?</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="apla"
            oninput="textoMigra()" />
          <label for="apla">Foi aplicadoModulo APLA Foi Aplicado?</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="ticketFinal"
            oninput="textoMigra()" />
          <label for="ticketFinal">Número do Ticket de Finalização dos treinamentos:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="dispensaTicket"
            oninput="textoMigra()" />
          <label for="dispensaTicket">Houve dispensa de treinamento ? (Se sim, qual numero do ticket?)</label>
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="relatorioMigração" style="height: 150px"
             oninput="textoMigra()"></textarea>
          <label for="floatingTextarea2">Resumo do treinamento:</label>
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="obscervacaoMigração" style="height: 150px"
            oninput="textoMigra()"></textarea>
          <label for="floatingTextarea2">Observações sobre a consultoria:</label>
        </div>
        

        <div class="mb-3">
          <button type="button" class="btn btn-outline-primary" onclick="copResp3()" data-bs-toggle="modal"
            data-bs-target="#exampleModal2">
            Copiar Texto
          </button>
          <button type="button" class="btn btn-outline-danger" onclick="deleteRespMigra()">
            Apagar Tudo
          </button>
        </div>

        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Texto Copiado
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="alert alert-warning" role="alert">
                  Não esqueça de criar o Ticket de migração no movidesk !
                </div>
                <p id="Mresp1"></p>
                <p id="Mresp2"></p>
                <p id="Mresp3"></p>
                <p id="Mresp4"></p>
                <p id="Mresp5"></p>
                <p id="Mresp6"></p>
                <p id="Mresp7"></p>
                <p id="Mresp8"></p>
                <p id="Mresp9"></p>
                <p id="Mresp10"></p>
                <p id="Mresp11"></p>
                <p id="Mresp12"></p>
                <p id="Mresp13"></p>
                <p id="Mresp14"></p>
                <p id="Mresp15"></p>
                <p id="Mresp16"></p>
                <p id="Mresp17"></p>
                <p id="Mresp18"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
<!-- =================================================Aconpanhamento============================================================== -->
<div class="container-fluid mt-3" id="acomp">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <article>
        <div class="row mb-3">
          <h3>Acompanhamento</h3>
        </div>
       <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" id="officer" oninput="teste()" />
          <label for="floatingTextarea">Numero do Officer</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="contato"
            oninput="acompTexto()" />
          <label for="contato">Contato com:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="ticketAcomp"
            oninput="acompTexto()" />
          <label for="ticketAcomp">Ticket:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="AregUso"
            oninput="acompTexto()" />
          <label for="AregUso">Uso: (Justificar se não tiver)</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="Aacesso"
            oninput="acompTexto()" />
          <label for="Aacesso">Acesso:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="Aentregas"
            oninput="acompTexto()" />
          <label for="Aentregas">Entregas:</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="number" width="10" id="Arobo"
            oninput="acompTexto()" />
          <label for="Arobo">Robô:</label>
        </div>
        <div class="form-floating mb-3">
          <textarea class="form-control" placeholder="Leave a comment here" id="tratativa" style="height: 250px"
            placeholder="1"
            oninput="acompTexto()"></textarea>
          <label for="tratativa">Informações Adicionais:</label>
        </div>
        
        <div class="row mb-3">
          <h5>Backup?</h5>
        </div>

        <div class="mb-4">
          <div class="form-check form-check-inline">
            <input class="form-check-input" name="btnBackup2" type="radio" id="simBackup2" value="yes"
              oninput="pergBackup2()" />
            <label class="form-check-label" for="simBackup2">Sim</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" name="btnBackup2" type="radio" id="naoBackup2" value="no"
              oninput="pergBackup2()" checked />
            <label class="form-check-label" for="naoBackup2">Não</label>
          </div>
        </div>

        <div id="telaBackup2" class="mb-3" style="display: none">
          <div class="card col-sm-12 col-md-11">
            <div class="card-header">
              <h5>Informações para o Backup</h5>
            </div>
            <div class="card-body">
              <div class="mb-3 row">
                <label for="customRange1" class="form-label">Cliente comprometido?&nbsp;<span
                    id="comprometido2-value">Nota: 5</span></label>
                <input type="range" class="form-range" id="comprometido2" min="0" max="10" step="1"
                  oninput="iTec.innerHTML=Number(tecnologico.value)" onchange="acompTexto()" />
              </div>
              <div class="mb-3 row">
                <label for="customRange1" class="form-label">Cliente tecnológico?&nbsp;<span
                    id="tecnologico2-value">Nota: 5</span></label>
                <input type="range" class="form-range" id="tecnologico2" min="0" max="10" step="1"
                  oninput="iTec.innerHTML=Number(tecnologico.value)" onchange="acompTexto()" />
              </div>
              <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="etapaBackup2" style="height: 250px"
                  placeholder="1"
                  oninput="acompTexto()"></textarea>
                <label for="etapaBackup2">Informações Adicionais:</label>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-outline-primary" onclick="copResp4()" data-bs-toggle="modal"
            data-bs-target="#exampleModal4">
            Copiar Texto
          </button>
          <button type="button" class="btn btn-outline-danger" onclick="deleteRespAcomp()">
            Apagar Tudo
          </button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Texto Copiado
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="alert alert-warning" role="alert">
                  Não esqueça de criar o Ticket de Acompanhamento no movidesk !
                </div>
                <p id="Aresp1"></p>
                <p id="Aresp2"></p>
                <p id="Aresp3"></p>
                <p id="Aresp4"></p>
                <p id="Aresp5"></p>
                <p id="Aresp6"></p>
                <p id="Aresp7"></p>
                <p id="Aresp8"></p>
                <p id="Aresp9"></p>
                <p id="Aresp10"></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

<div class="container-fluid mt-3" id="ata">
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <article>
        <div class="row mb-3">
          <h2>Gerador de Ata de Alinhamento Inicial</h2>
        </div>
        <div class="row mb-3">
          <h3>Identificação</h3>
        </div>
          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="cliente-input"
              oninput="Ata()" />
            <label for="ClinteEmpresa">Cliente (Empresa):</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="inicio-input"
              oninput="Ata()" />
            <label for="Inicio">Início:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="finalizacao-input"
              oninput="Ata()" />
            <label for="Inicio">Finalização:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="responsavel-input"
              oninput="Ata()" />
            <label for="Inicio">Responsável Técnico (Empresa):</label>
          </div>
          
          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="tel" width="10" id="telefone-input"
              oninput="Ata()" />
            <label for="Inicio">Telefone:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="tel" width="10" id="telefone2-input"
              oninput="Ata()" />
            <label for="Inicio">Telefone fixo:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="contratante-input"
              oninput="Ata()" />
            <label for="Inicio">Contratante da Solução (Proprietário):</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="email" width="10" id="finalizacao-input"
              oninput="Ata()" />
            <label for="Inicio">E-mail:</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="consultor-input"
              oninput="Ata()" />
            <label for="Inicio">Consultor Acessórias:</label>
          </div>
          <div></div>
          <div class="form-floating mb-3">
            <input class="form-control" placeholder="Leave a comment here" type="email" width="10" id="emailConsultor-input"
              oninput="Ata()" />
            <label for="Inicio">E-mail Consultor:</label>
          </div>
        <!-- <div class="row mb-3">
          <h3>Sucesso para a empresa é quando ?</h3>
        </div>
        <div>

        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Configuração inicial" id="organizar-obrigacao-input"
              oninput="infoGeral()" />
            <label class="form-check-label" for="organizar-obrigacao">Organizar Entregas de prazos e obrigações</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Lista de Tarefas" id="flexCheckDefault2"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault2">Automatizar o envio de documentos e obrigações</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Lista/Robô" id="flexCheckDefault4"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault4">Visibilidade das entregas e facilitar a gestão da equipe</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Gestão de Processos" id="flexCheckDefault5"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault5">Garantir a entrega do documento para o cliente final tendo</label>
          </div>
        </div>
        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Robô" id="flexCheckDefault3"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault3">Facilitar a comunicação com o cliente</label>
          </div>
          <div class="form-check form-check-inline">
        </div>
        <div>
          <input class="form-check-input mb-3" type="checkbox" name="etapa" value="Robô" id="flexCheckDefault3"
            oninput="infoGeral()" />
          <label class="form-check-label" for="flexCheckDefault3">protocolos de registros</label>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="Escreva-input"
            oninput="Ata()" />
          <label for="Inicio">Escreva aqui algo fora das opçoes acima:</label>
        </div>

        <div class="row mb-3">
          <h3>Tipos de Recursos necessários - Módulos</h3>
        </div>

        <div id="etapa-geral">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Configuração inicial" id="flexCheckDefault"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault">Gestão de Processos
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Lista de Tarefas" id="flexCheckDefault2"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault2">Aplicativo e Área VIP</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Lista/Robô" id="flexCheckDefault4"
              oninput="infoGeral()" />
            <label class="form-check-label" for="flexCheckDefault4">APLA</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="etapa" value="Gestão de Processos" id="flexCheckDefault5"
              oninput="infoGeral()" />
            <label class="form-check-label mb-3" for="flexCheckDefault5">Komunic</label>
          </div>
        </div> -->

        <div class="row mb-3">
          <h3>Detalhamento do Cronograma</h3>
        </div>

        <div class="accordion" id="accordionExample1">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Alinhamento" aria-expanded="true" aria-controls="Alinhamento">
                Alinhamento inicial
              </button>
            </h2>
            <div id="Alinhamento" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="alinhamento-input"
                    oninput="Ata()" />
                  <label for="Inicio">Consultoria 1</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="dataAlin-input"
                    oninput="Ata()" />
                  <label for="Inicio">Data</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="time" width="10" id="horaAlin-input"
                    oninput="Ata()" />
                  <label for="Inicio">Hora</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="statusAlin-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#primeira-etapa" aria-expanded="false" aria-controls="primeira-etapa">
                Primeira Etapa
              </button>
            </h2>
            <div id="primeira-etapa" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="consutoria1-input"
                    oninput="Ata()" />
                  <label for="Inicio">Consultoria 1</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="dataConsu1-input"
                    oninput="Ata()" />
                  <label for="Inicio">Data</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="time" width="10" id="horaConsu1-input"
                    oninput="Ata()" />
                  <label for="Inicio">Hora</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="statusConsu1-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#segunda-etapa" aria-expanded="false" aria-controls="segunda-etapa">
                Segunda etapa
              </button>
            </h2>
            <div id="segunda-etapa" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="consutoria2-input"
                    oninput="Ata()" />
                  <label for="Inicio">Consultoria 2</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="dataConsu2-input"
                    oninput="Ata()" />
                  <label for="Inicio">Data</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="time" width="10" id="horaConsu2-input"
                    oninput="Ata()" />
                  <label for="Inicio">Hora</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="statusConsu2-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#terceira-etapa" aria-expanded="false" aria-controls="terceira-etapa">
                Terceira etapa
              </button>
            </h2>
            <div id="terceira-etapa" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="consutoria3-input"
                    oninput="Ata()" />
                  <label for="Inicio">Consultoria 3</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="dataConsu3-input"
                    oninput="Ata()" />
                  <label for="Inicio">Data</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="time" width="10" id="horaConsu3-input"
                    oninput="Ata()" />
                  <label for="Inicio">Hora</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="statusConsu3-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#quarta-etapa" aria-expanded="false" aria-controls="quarta-etapa">
                Quarta etapa
              </button>
            </h2>
            <div id="quarta-etapa" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="consutoria4-input"
                    oninput="Ata()" />
                  <label for="Inicio">Consultoria 4</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="dataConsu4-input"
                    oninput="Ata()" />
                  <label for="Inicio">Data</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="time" width="10" id="horaConsu4-input"
                    oninput="Ata()" />
                  <label for="Inicio">Hora</label>
                </div>
        
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="statusConsu4-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#quinta-etapa" aria-expanded="false" aria-controls="quinta-etapa">
                Quinta etapa
              </button>
            </h2>
            <div id="quinta-etapa" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="consutoria5-input"
                    oninput="Ata()" />
                  <label for="Inicio">Consultoria 5</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="dataConsu5-input"
                    oninput="Ata()" />
                  <label for="Inicio">Data</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="time" width="10" id="horaConsu5-input"
                    oninput="Ata()" />
                  <label for="Inicio">Hora</label>
                </div>
        
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="statusConsu5-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sexta-etapa" aria-expanded="false" aria-controls="sexta-etapa">
                Sexta etapa
              </button>
            </h2>
            <div id="sexta-etapa" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="consutoria6-input"
                    oninput="Ata()" />
                  <label for="Inicio">Consultoria 6</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="dataConsu6-input"
                    oninput="Ata()" />
                  <label for="Inicio">Data</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="time" width="10" id="horaConsu6-input"
                    oninput="Ata()" />
                  <label for="Inicio">Hora</label>
                </div>
        
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="statusConsu6-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <h3>Acompanhamento das Tarefas</h3>
        </div>
                <div class="accordion" id="accordionExample1">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cadastro-colaborador" aria-expanded="true" aria-controls="cadastro-colaborador">
                Cadastro Colaborador
              </button>
            </h2>
            <div id="cadastro-colaborador" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="cadrastro-Responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="cadrastro-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="cadrastro-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#revisao-departamento" aria-expanded="false" aria-controls="revisao-departamento">
                Revisão dos departamentos
              </button>
            </h2>
            <div id="revisao-departamento" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisao-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="revisao-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisao-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#revisao-obrigacao" aria-expanded="false" aria-controls="revisao-obrigacao">
                Revisão da obrigações
              </button>
            </h2>
            <div id="revisao-obrigacao" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisaoObrigacao-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="revisaoObrigacao-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisaoObrigacao-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#revisao-regime" aria-expanded="false" aria-controls="revisao-regime">
                Revisão dos Regimes Tributários
              </button>
            </h2>
            <div id="revisao-regime" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisaoRegime-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="revisaoRegime-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisaoRegime-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#preenchimento-planilha" aria-expanded="false" aria-controls="preenchimento-planilha">
                Preenchimento da planilha de clientes
              </button>
            </h2>
            <div id="preenchimento-planilha" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="preenchimento-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="preenchimento-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="preenchimento-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cadrastro-cliente" aria-expanded="false" aria-controls="cadrastro-cliente">
                Cadastro dos clientes
              </button>
            </h2>
            <div id="cadrastro-cliente" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="cadrastroCliente-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="cadrastroCliente-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="cadrastroCliente-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#revisao-empresas" aria-expanded="false" aria-controls="revisao-empresas">
                Revisão das empresas cadastradas
              </button>
            </h2>
            <div id="revisao-empresas" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisaoEmpresas-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="revisaoEmpresas-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="revisaoEmpresas-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <h3>E-Contínuo</h3>
        </div>

        <div class="accordion" id="accordionExample1">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#instalar-econtinuo" aria-expanded="true" aria-controls="instalar-econtinuo">
                Instalação do e-continuo
              </button>
            </h2>
            <div id="instalar-econtinuo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="econtinuo-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="econtinuo-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="econtinuo-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configurar-econtinuo" aria-expanded="false" aria-controls="configurar-econtinuo">
                Configuração do E-continuo
              </button>
            </h2>
            <div id="configurar-econtinuo" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="configurar-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="configurar-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="configurar-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#separar-guias" aria-expanded="false" aria-controls="separar-guias">
                Separar guias para cadastro
              </button>
            </h2>
            <div id="separar-guias" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="separar-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="separar-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="separar-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configuracao-guias" aria-expanded="false" aria-controls="configuracao-guias">
                Configuração de guias
              </button>
            </h2>
            <div id="configuracao-guias" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="configurarGuia-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="configurarGuia-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="configurarGuia-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#teste-guia" aria-expanded="false" aria-controls="teste-guia">
                Teste de envio de guias
              </button>
            </h2>
            <div id="teste-guia" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
              <div class="accordion-body">
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="teste-responsavel-input"
                    oninput="Ata()" />
                  <label for="Inicio">Responsavel</label>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="date" width="10" id="teste-prazo-input"
                    oninput="Ata()" />
                  <label for="Inicio">Prazo</label>
                </div>
                
                <div class="form-floating mb-3">
                  <input class="form-control" placeholder="Leave a comment here" type="text" width="10" id="teste-status-input"
                    oninput="Ata()" />
                  <label for="Inicio">Status</label>
                </div>              
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-outline-primary" id="pre-vizualizar" data-bs-toggle="modal">
            Pré Visualizar
          </button>
          <button type="button" class="btn btn-outline-danger" id="preencherPDF">
            Gerar Pdf
          </button>
        </div>
      <div>
    </div>
  </div>
</div>


<div class="container-fluid mt-3" id="notas">
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
        
<!-- HTML da ata -->
        <div class="c-39 doc-content">
          <div>
            <p class="c48 c53">
              <span
                style="
                  overflow: hidden;
                  display: inline-block;
                  margin: 0px 0px;
                  border: 0px solid #000000;
                  transform: rotate(0rad) translateZ(0px);
                  -webkit-transform: rotate(0rad) translateZ(0px);
                  width: 204.5px;
                  height: 34.71px;
                "
                ><img
                  alt=""
                  src="images/image1.png"
                  style="
                    width: 204.5px;
                    height: 34.71px;
                    margin-left: 0px;
                    margin-top: 0px;
                    transform: rotate(0rad) translateZ(0px);
                    -webkit-transform: rotate(0rad) translateZ(0px);
                  "
                  title="" /></span
              ><img />
            </p>
          </div>
          <p class="c63">
            <span class="c18 c60"
              >Cronograma de Implanta&ccedil;&atilde;o Acess&oacute;rias</span
            >
          </p>
          <ol class="c30 lst-kix_90wmzo7egkw2-0 start" start="1">
            <li class="c32 c47 li-bullet-0">
              <h2 id="h.nlyzdz7jf2ji" style="display: inline">
                <span class="c18 c6">Identifica&ccedil;&atilde;o</span>
              </h2>
            </li>
          </ol>
          <p class="c0 c32">
            <span class="c18 c26"
              >(responsabilidade pelo preenchimento: Consultor de
              Implanta&ccedil;&atilde;o)</span
            >
          </p>
          <p class="c3 c7"><span class="c18 c26"></span></p>
          <a id="t.e1ed9be709795078a1e738cc08608ec9815d6a57"></a><a id="t.0"></a>
          <table class="c62">
            <tr class="c54">
              <td class="c37" colspan="2" rowspan="1">
                <p class="c2"><span class="c16">Cliente (Empresa):</span></p>
                <p class="c0 c3"><span id="cliente-label" class="c14"></span></p>
              </td>
              <td class="c59" colspan="2" rowspan="1">
                <p class="c0 c41"><span class="c18 c16">In&iacute;cio:</span></p>
                <p class="c0 c3"><span id="inicio-label" class="c14"></span></p>
              </td>
              <td class="c45" colspan="2" rowspan="1">
                <p class="c0 c58">
                  <span class="c16">Finaliza&ccedil;&atilde;o:</span>
                  <p><span id="finalizacao-label" class="c14"></span></p>
                </p>
                <p class="c0 c3 c58"><span class="c14"></span></p>
              </td>
            </tr>
            <tr class="c34">
              <td class="c37" colspan="2" rowspan="1">
                <p class="c0">
                  <span class="c16">Respons&aacute;vel T&eacute;cnico (Empresa):</span>
                  <p><span id="responsavel-label" class="c14"></span></p>
                </p>
              </td>
              <td class="c59" colspan="2" rowspan="1">
                <p class="c0"><span class="c18 c16">Telefone:</span></p>
                <p class="c0 c3"><span id="telefone-label" class="c14"></span></p>
              </td>
              <td class="c45" colspan="2" rowspan="1">
                <p class="c0"><span class="c18 c16">Telefone:</span></p>
                <p class="c0 c3"><span class="c14"></span></p>
              </td>
            </tr>
            <tr class="c25">
              <td class="c37" colspan="2" rowspan="1">
                <p class="c0">
                  <span class="c18 c16"
                    >Contratante da Solu&ccedil;&atilde;o (Propriet&aacute;rio):</span
                  >
                </p>
                <p class="c0 c3"><span id="telefone2-label class="c14"></span></p>
              </td>
              <td class="c44" colspan="4" rowspan="1">
                <p class="c0"><span class="c16">E-mail:</span></p>
                <p class="c0 c3"><span id="contratante-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c25">
              <td class="c37" colspan="2" rowspan="1">
                <p class="c0">
                  <span class="c18 c16">Consultor Acess&oacute;rias:</span>
                </p>
                <p class="c0"><span id="consultor-label" class="c14"></span></p>
              </td>
              <td class="c44" colspan="4" rowspan="1">
                <p class="c0"><span class="c18 c16">E-mail:</span></p>
                <p class="c0"><span id="emailConsultor-label" class="c14"></span></p>
              </td>
            </tr>
          </table>
          <ol class="c30 lst-kix_90wmzo7egkw2-0" start="2">
            <li class="c46 c32 li-bullet-0">
              <h2 id="h.1yvfiw6g5dwv" style="display: inline">
                <span class="c6">Benef&iacute;cios esperados com o projeto</span>
              </h2>
            </li>
          </ol>
          <a id="t.20c0aa771a22fe39c3455f566bcc42cb9d0a3add"></a><a id="t.1"></a>
          <table class="c27">
            <tr class="c56">
              <td class="c15 c23" colspan="1" rowspan="1">
                <p class="c2">
                  <span class="c16">Benef&iacute;cios do Projeto</span>
                </p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c15" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c33"
                    >O Time de implanta&ccedil;&atilde;o tem o objetivo de entregar o
                    primeiro sucesso ao cliente. Sucesso este, que consiste em
                    entender qual a necessidade do cliente e auxiliar nas
                    configura&ccedil;&otilde;es e ajustes da ferramenta.</span
                  >
                </p>
              </td>
            </tr>
            <tr class="c57">
              <td class="c15" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >Abordaremos os pontos principais que ir&atilde;o levar o cliente
                    ao primeiro sucesso de uma forma r&aacute;pida</span
                  >
                </p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c15" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >O time de implanta&ccedil;&atilde;o ir&aacute; criar um roteiro,
                    que ter&aacute; o foco em tornar o cliente apto nas
                    funcionalidades que s&atilde;o cruciais para o atingimento dos
                    objetivos do mesmo.</span
                  >
                </p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c15" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >Esses objetivos ser&atilde;o alcan&ccedil;ados com nosso
                    Alinhamento de 1hora para entender o fluxo e expectativas do
                    cliente.</span
                  >
                </p>
              </td>
            </tr>
          </table>
          <ol class="c30 lst-kix_90wmzo7egkw2-0" start="3">
            <li class="c46 c32 li-bullet-0">
              <h2 id="h.sippditxg7yw" style="display: inline">
                <span class="c6">Objetivo do projeto</span>
              </h2>
            </li>
          </ol>
          <p class="c7">
            <span class="c18 c26"
              >(responsabilidade pelo preenchimento: Consultor de
              Implanta&ccedil;&atilde;o)</span
            >
          </p>
          <p class="c48 c3"><span class="c18 c26"></span></p>
          <a id="t.4c5933014a71e2d578d9a11cbad51a95f8c38f9d"></a><a id="t.2"></a>
          <table class="c27">
            <tr class="c5">
              <td class="c15" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c33"
                    >Facilitar a fluidez do suporte com o cliente; otimizar o processo
                    do agente que est&aacute; em campo ou no suporte</span
                  >
                </p>
              </td>
            </tr>
          </table>
          <ol class="c30 lst-kix_90wmzo7egkw2-1 start" start="1">
            <li class="c42 li-bullet-0">
              <h2 id="h.gmr81kmdkspy" style="display: inline">
                <span class="c6">Sucesso para a empresa &eacute; quando:</span>
              </h2>
            </li>
          </ol>
          <p class="c7">
            <span class="c18 c26"
              >(responsabilidade pelo preenchimento:Consultor de
              Implanta&ccedil;&atilde;o)</span
            >
          </p>
          <p class="c7 c3"><span class="c18 c26"></span></p>
          <a id="t.f99f69b642b9d93be59a62cd8af50894c5f2cece"></a><a id="t.3"></a>
          <table class="c40">
            <tr class="c5">
              <td class="c51" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c8" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >Organizar Entregas de prazos e obriga&ccedil;&otilde;es</span
                  >
                </p>
              </td>
              <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c14" id="organizar-obrigacao-label">( )</span></p>
              </td>
              <td class="c12" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >Automatizar o envio de documentos e
                    obriga&ccedil;&otilde;es</span
                  >
                </p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c51" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c8" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >Facilitar a comunica&ccedil;&atilde;o com o cliente</span
                  >
                </p>
              </td>
              <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c12" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >Visibilidade das entregas e facilitar a gest&atilde;o da
                    equipe</span
                  >
                </p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c51" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c8" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14"
                    >Garantir a entrega do documento para o cliente final tendo
                    protocolos de registros</span
                  >
                </p>
              </td>
              <td class="c35" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c12" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c14"></span></p>
              </td>
            </tr>
          </table>
          <ol class="c30 lst-kix_90wmzo7egkw2-0" start="4">
            <li class="c46 c32 li-bullet-0">
              <h2 id="h.fe318mbzomsy" style="display: inline">
                <span class="c18 c6"
                  >Tipos de Recursos necess&aacute;rios - M&oacute;dulos</span
                >
              </h2>
            </li>
          </ol>
          <p class="c7">
            <span class="c18 c26"
              >(responsabilidade pelo preenchimento:Consultor de
              Implanta&ccedil;&atilde;o)</span
            >
          </p>
          <p class="c7 c3"><span class="c18 c26"></span></p>
          <a id="t.027caf749ff87649258ecfb7d44dd75fed0a890a"></a><a id="t.4"></a>
          <table class="c40">
            <tr class="c5">
              <td class="c51" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c28" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">Gest&atilde;o de Processos</span></p>
              </td>
              <td class="c38" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c12" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c14">Aplicativo e &Aacute;rea VIP</span>
                </p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c51" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c28" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">APLA</span></p>
              </td>
              <td class="c38" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">( )</span></p>
              </td>
              <td class="c12" colspan="1" rowspan="1">
                <p class="c0"><span class="c14">Komunic</span></p>
              </td>
            </tr>
          </table>
          <p class="c3 c48"><span class="c18 c50"></span></p>
          <ol class="c30 lst-kix_90wmzo7egkw2-0" start="5">
            <li class="c46 c32 li-bullet-0">
              <h2 id="h.t8dd8dna76x4" style="display: inline">
                <span class="c18 c6">Detalhamento do Cronograma</span>
              </h2>
            </li>
          </ol>
          <p class="c7">
            <span class="c18 c26"
              >(responsabilidade pelo preenchimento: Consultor de
              Implanta&ccedil;&atilde;o)</span
            >
          </p>
          <p class="c7 c3"><span class="c18 c26"></span></p>
          <a id="t.b1a9c0612c2675e74aa695aa34b1c74d3e8554cf"></a><a id="t.5"></a>
          <table class="c61">
            <tr class="c5">
              <td class="c19" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Alinhamento</span></p>
              </td>
              <td class="c13 c43" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Data</span></p>
              </td>
              <td class="c13 c43" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Hora</span></p>
              </td>
              <td class="c13 c43" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Dura&ccedil;&atilde;o</span></p>
              </td>
              <td class="c13 c43" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
                <p class="c0"><span id="statusAlin-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c24" colspan="1" rowspan="1">
                <p class="c0"><span id="alinhamento-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="dataAlin-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="horaAlin-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2"><span class="c11">1 h</span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="statusAlin-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c17" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Consultoria 1</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Data</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Hora</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Dura&ccedil;&atilde;o</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c24" colspan="1" rowspan="1">
                <p class="c2">
                  <p class="c0"><span id="consutoria1-label" class="c14"></span></p>
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="dataConsu1-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="horaConsu1-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2"><span class="c11">1 h</span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="statusConsu1-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c17" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Consultoria 2</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Data</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Hora</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Dura&ccedil;&atilde;o</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c24" colspan="1" rowspan="1">
                <p class="c2">
                <p class="c0"><span id="consutoria2-label" class="c14"></span></p>
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="dataConsu2-label" class="c14"></span></p>
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="horaConsu2-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2"><span class="c11">1 h</span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="statusConsu2-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c17" colspan="1" rowspan="1">
                <p class="c2"><span class="c31">Consultoria 3</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Data</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Hora</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Dura&ccedil;&atilde;o</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c24" colspan="1" rowspan="1">
                <p class="c0"><span id="consutoria3-label" class="c14"></span></p>
              </td>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="dataConsu3-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="horaConsu3-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2"><span class="c11">1 h</span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="statusConsu3-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c17" colspan="1" rowspan="1">
                <p class="c2"><span class="c31">Consultoria 4</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Data</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Hora</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Dura&ccedil;&atilde;o</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c24" colspan="1" rowspan="1">
                <p class="c0"><span id="consutoria4-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0"><span id="dataConsu4-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0"><span id="horaConsu4-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2"><span class="c11">1 h</span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="statusConsu4-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c17" colspan="1" rowspan="1">
                <p class="c2"><span class="c31">Consultoria 5</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Data</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Hora</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Dura&ccedil;&atilde;o</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c24" colspan="1" rowspan="1">
                <p class="c0"><span id="consutoria5-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="dataConsu5-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="horaConsu5-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2"><span class="c11">1 h</span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="statusConsu5-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c55">
              <td class="c17" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Consultoria 6</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Data</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Hora</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Dura&ccedil;&atilde;o</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c24" colspan="1" rowspan="1">
                <p class="c0"><span id="consutoria6-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="dataConsu6-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="horaConsu6-label" class="c14"></span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2"><span class="c11">1 h</span></p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c2 c3"><span class="c11"></span></p>
                <p class="c0"><span id="statusConsu6-label" class="c14"></span></p>
              </td>
            </tr>
          </table>
          <ol class="c30 lst-kix_90wmzo7egkw2-0" start="6">
            <li class="c32 c46 li-bullet-0">
              <h2 id="h.afyyt1a858f9" style="display: inline">
                <span class="c18 c6">Acompanhamento das Tarefas</span>
              </h2>
            </li>
          </ol>
          <p class="c7 c3"><span class="c18 c26"></span></p>
          <a id="t.3cb9727a21da1cf8ade4c4c9ab648174e152b47b"></a><a id="t.6"></a>
          <table class="c61">
            <tr class="c5">
              <td class="c22 c21" colspan="1" rowspan="1">
                <p class="c2">
                  <span class="c9">Configura&ccedil;&otilde;es Iniciais</span>
                </p>
              </td>
              <td class="c20 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Atividade</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Respons&aacute;vel </span></p>
              </td>
              <td class="c4 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Prazo</span></p>
              </td>
              <td class="c4 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0"><span class="c11">Cadastro dos Colaboradores</span></p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Realizar o cadastro dos colaboradores de acordo com as
                    permiss&otilde;es</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="cadrastro-Responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="cadrastro-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="cadrastro-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11">Revis&atilde;o dos Departamentos</span>
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Revisar os departamentos existentes na ferramenta com os atuais
                    criando novos ou exclu&iacute;do os que n&atilde;o existem</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisao-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisao-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisao-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11">Revis&atilde;o das Obriga&ccedil;&otilde;es</span>
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Revisar obriga&ccedil;&otilde;es existentes e criar alguma
                    espec&iacute;fica caso n&atilde;o exista
                  </span>
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoObrigacao-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoObrigacao-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoObrigacao-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Revis&atilde;o dos Regimes Tribut&aacute;rios</span
                  >
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Revisar os regimes tribut&aacute;rios dentro do padr&atilde;o da
                    empresa</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoRegime-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoRegime-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoRegime-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11">Preenchimento da Planilha de Clientes</span>
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Preencher planilha de importa&ccedil;&atilde;o de clientes
                    disponibilizada pelo consultor</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="preenchimento-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="preenchimento-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="preenchimento-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0"><span class="c11">Cadastro dos Clientes</span></p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11">Realizar o cadastro do cliente</span>
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="cadrastroCliente-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="cadrastroCliente-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="cadrastroCliente-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11">Revis&atilde;o das Empresas Cadastradas</span>
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Realizar a revis&atilde;o das empresas com foco em Outros
                    indicadores, e-mail do cliente, obriga&ccedil;&otilde;es e
                    respons&aacute;veis pelos departamentos</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="cadrastroCliente-status-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoEmpresas-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="revisaoEmpresas-prazo-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">e-Cont&iacute;nuo</span></p>
              </td>
              <td class="c20 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Atividade</span></p>
              </td>
              <td class="c13 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Respons&aacute;vel </span></p>
              </td>
              <td class="c4 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Prazo</span></p>
              </td>
              <td class="c4 c21" colspan="1" rowspan="1">
                <p class="c2"><span class="c9">Status</span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Instala&ccedil;&atilde;o do e-Cont&iacute;nuo</span
                  >
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Realizar a instala&ccedil;&atilde;o do sistema e-cont&iacute;nuo
                    para os colaboradores que ir&atilde;o utilizar</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="econtinuo-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="econtinuo-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="configurar-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Configura&ccedil;&atilde;o do e-Cont&iacute;nuo</span
                  >
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >configurar as pastas Download e Upload de acordo com as
                    configura&ccedil;&otilde;es do cliente</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="configurar-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="configurar-status-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="configurar-prazo-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Separa&ccedil;&atilde;o de Guias para Cadastro</span
                  >
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Separar guias dentro dos par&acirc;metros de leitura para
                    cadastro.</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="separar-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="separar-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="separar-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11">Configura&ccedil;&atilde;o de Guias</span>
                </p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Realizar o cadastro das guias dentro das
                    configura&ccedil;&otilde;es que atendam a contabilidade.</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="configurarGuia-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="configurarGuia-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="configurarGuia-status-label" class="c14"></span></p>
              </td>
            </tr>
            <tr class="c5">
              <td class="c22" colspan="1" rowspan="1">
                <p class="c0"><span class="c11">Teste de envio de Guias</span></p>
              </td>
              <td class="c20" colspan="1" rowspan="1">
                <p class="c0">
                  <span class="c11"
                    >Realizar testes de envio para validar o processo de envio</span
                  >
                </p>
              </td>
              <td class="c13" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="teste-responsavel-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="teste-prazo-label" class="c14"></span></p>
              </td>
              <td class="c4" colspan="1" rowspan="1">
                <p class="c0 c3"><span class="c11"></span></p>
                <p class="c0"><span id="teste-status-label" class="c14"></span></p>
              </td>
            </tr>
          </table>
          <p class="c48 c3"><span class="c18 c26"></span></p>
        </div>
      </article>
    </div>
  </div>
</div>

<footer id="footer" class="text-center text-lg-start">
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
    Todos os Direitos Reservados -
    <a class="text-reset fw-bold" href="https://app.acessorias.com/">Acessórias</a>&reg;2023 | Sistema Desenvolvido por
    <a href="https://www.linkedin.com/in/matheus-ricci-228a06182/" target="_blank">Matheus Ricci</a>
    &
    <a href="https://www.linkedin.com/in/patrick-da-costa-cruz-08493212a/" target="_blank">Patrick C. Cruz</a>
    &
    <a href="https://www.linkedin.com/in/luiz-henrique-092653197/" target="_blank">Luiz Henrique</a>
    clique e Saiba Mais!
  </div>
</footer>

<script src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
  integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
  integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
</body>

</html>
