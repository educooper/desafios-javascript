**
 * Contagem de Cédulas
 * 
 * Desafio:
 * - Faça a leitura de um valor inteiro. Em seguida, 
 * calcule o menor número de notas possíveis (cédulas) 
 * onde o valor pode ser decomposto. As notas que você 
 * deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
 * 
 * - Na sequência mostre o valor lido e a relação de notas 
 * necessárias.
 * 
 * Entrada:
 * - Você receberá um valor inteiro N (0 < N < 1000000).
 * 
 * Saída:
 * - Exiba o valor lido e a quantidade mínima de notas de 
 * cada tipo necessárias, seguindo o exemplo de saída abaixo. 
 * Após cada linha deve ser imprimido o fim de linha.
 */

let valor = parseInt(11257);
let notas = 0;
function contar(x){
	while (valor >= x){
	(valor -= x);
	(notas += 1);
	}
	console.log(notas + " nota(s) de R$ "+ x +",00 reais\r");
	notas = 0;
  return x;
}
console.log(valor + "\r");
contar(100);
contar(50);
contar(20);
contar(10);
contar(5);
contar(2);
contar(1);
