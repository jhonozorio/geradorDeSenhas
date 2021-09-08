const rand = (min, max) => Math.floor(Math.random() * (max - min) + min) ;

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '!@#$%&*()-_/?<>{}[]';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

const geraSenha = (qnt, minuscula, maiuscula, numero, simbolo) => {
  const senhaArray = [];
  qnt = Number(qnt);

  console.log(qnt);

  for(let i = 0; i < qnt; i++){
   minuscula && senhaArray.push(geraMinuscula());
   maiuscula && senhaArray.push(geraMaiuscula());
   numero && senhaArray.push(geraNumero());
   simbolo && senhaArray.push(geraSimbolo());
  };

  return senhaArray.join('').slice(0, qnt);
};

export default geraSenha;
