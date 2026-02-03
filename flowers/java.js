
let yn = "";

while (yn.toUpperCase() != "SIM" && yn.toUpperCase() != "NAO") {
  yn = window.prompt("ACEITA AS FLORES? (*SIM/NAO*)");
  if (yn.toUpperCase() == "SIM") {
    window.alert("QUE BOM QUE ACEITOU, ESPERO QUE GOSTE DAS FLORES!!!");
  } else if (yn.toUpperCase() == "NAO") {
    window.alert("QUE PENA QUE VC NAO TEM ESCOLHA, VAI TER QUE ACEITAR MESMO ASSIM!!!");
  }
  else { window.alert("RESPOSTA INVALIDA!!!"); }
}
window.alert("EU TE AMO LETICIA OLIVEIRA SOARES!!!");
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
