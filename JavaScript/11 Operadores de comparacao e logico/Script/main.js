/*
Operadores de comparação
> maior que
>= maior ou igual a
< menor que
< menor ou igual a
== igualdade (valor) - obs.: evitar utilizar
=== igualdade estrita (valor e tipo)
!= diferente (valor) - obs.: evitar utilizar
!== diferente estrito (valor e tipo)

Todos os operadores de comparação retornam um valor booleano (true or false)
 */
const n1 = 10;
const n2 = 10;
const n3 = 12;
const n4 = '12';

console.log(`Maior ${n1} > ${n2}: ${n1>n2}`);
console.log(`Maoior ou igual ${n1} >= ${n2}: ${n1>=n2}`);
console.log(`Menor ${n1} < ${n2}: ${n1<n2}`);
console.log(`Menor ou igual ${n1} <= ${n2}: ${n1<=n2}`);
console.log(`Igual ${n3} == ${n4}: ${n3==n4}`);
console.log(`Igual estrito ${n3} === ${n4}: ${n3===n4}`);
console.log(`Diferente ${n3} != ${n4}: ${n3!=n4}`);
console.log(`Diferente estrito ${n3} !== ${n4}: ${n3!==n4}`);

/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
console.log(`true&&true: ${true&&true}`);
console.log(`true&&false: ${true&&false}`);
console.log(`true||false: ${true||false}`);
console.log(`false||false: ${false||false}`);
console.log(`!true: ${!true}`);
console.log(`!!true: ${!!true}`);