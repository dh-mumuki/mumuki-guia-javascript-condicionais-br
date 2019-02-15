const mariaDeLosRemedios = {
  nome: "María De Los Remedios"
};

const pedroTernera = {
  nome: "Pedro Ternera"
};

const gloriaPires = {
  nome: "Gloria Pires"
};

const fabioJunior = {
  nome: "Fabio Junior"
};

const cristinaKarthalian = {
  nome: "Cristina Karthalian"
};

const noelyLima = {
  nome: "Noely Lima"
};

const xororo = {
  nome: "Xororó"
};

const sofiaMontiel = {
  nome: "Sofía Montiel"
};

const arturoDeLaPiedad = {
  nome: "Arturo De La Piedad"
};

const pilarTernera = {
  nome: "Pilar Ternera",
  mae: mariaDeLosRemedios,
  pai: pedroTernera
};

const cleo = {
  nome: "Cleo Pires",
  mae: gloriaPires,
  pai: fabioJunior
};

const fiuk = {
  nome: "Fiuk",
  mae: cristinaKarthalian,
  pai: fabioJunior
};

const ursulaIguaran = {
  nome: "Úrsula Iguarán"
};

const joseArcadioPadre = {
  nome: "José Arcadio"
};

const joseArcadio = {
  nome: "José Arcadio",
  mae: ursulaIguaran,
  pai: joseArcadioPadre
};

const coronelAureliano = {
  nome: "Coronel Aureliano",
  mae: ursulaIguaran,
  pai: joseArcadioPadre
};

const sofiaDeLaPiedad = {
  nome: "Sofía De La Piedad",
  mae: sofiaMontiel,
  pai: arturoDeLaPiedad
};

const arcadio = {
  nome: "Arcadio",
  mae: pilarTernera,
  pai: joseArcadio
};

const aurelianoJose = {
  nome: "Arcadio",
  mae: pilarTernera,
  pai: coronelAureliano
};

const aurelianoSegundo = {
  nome: "Aureliano Segundo",
  mae: sofiaDeLaPiedad,
  pai: arcadio
};

const remedios = {
  nome: "Remedios",
  mae: sofiaDeLaPiedad,
  pai: arcadio
};

const sandy = {
  nome: "Sandy",
  mae: noelyLima,
  pai: xororo
};

const junior = {
  nome: "Junior",
  mae: noelyLima,
  pai: xororo
};

function maeDe(persona) {
  return persona.mae.nome;
};

function paiDe(persona) {
  return persona.pai.nome;
};

function temOMesmoPai(unaPersona, otraPersona) {
  return paiDe(unaPersona) == paiDe(otraPersona);
};
 
function temAMesmaMae(unaPersona, otraPersona) {
  return maeDe(unaPersona) == maeDe(otraPersona);
};
 
function saoMeioIrmaos(unaPersona, otraPersona) {
  return temAMesmaMae(unaPersona, otraPersona) != temOMesmoPai(unaPersona, otraPersona) ;
};
