const gloriaPires = {
  nome: "Glória Pires"
};

const fabioJunior = {
  nome: "Fabio Júnior"
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

const mariaDeLosRemedios = {
  nome: "María De Los Remedios"
};

const pedroTernera = {
  nome: "Pedro Ternera"
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

const cleoPires = {
  nome: "Cleo Pires",
  mae: gloriaPires,
  pai: fabioJunior
};


const fiuk = {
  nome: "Fiuk",
  mae: cristinaKarthalian,
  pai: fabioJunior
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

function maeDe(pessoa) {
  return pessoa.mae.nome;
};

function paiDe(pessoa) {
  return pessoa.pai.nome;
};
