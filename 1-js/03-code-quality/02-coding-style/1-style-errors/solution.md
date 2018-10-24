
Vous pouvez noter ce qui suit :

```js no-beautify
function pow(x,n)  // <- pas d'espace entre les arguments
{  // <- accolade sur une ligne séparée
  let result=1;   // <- pas d'espaces des deux côtés de =
  for(let i=0;i<n;i++) {result*=x;}   // <- pas d'espaces
  // le contenu de {...} devrait être sur une nouvelle ligne
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // <-- techniquement possible,
// mais mieux vaut en faire 2 lignes, il n'y a également pas d'espaces et de ;
if (n<0)  // <- pas d'espaces à l'intérieur (n < 0), et devrait être une ligne supplémentaire au-dessus
{   // <- accolade sur une ligne séparée
  // ci-dessous - une longue ligne, peut être utile de la scinder en 2 lignes
  alert(`Puissance de ${n} n'est pas pris en charge, veuillez entrer un nombre entier supérieur à zéro`);
}
else // <- pourrait l'écrire sur une seule ligne comme "} else {"
{
  alert(pow(x,n))  // pas d'espaces et ;
}
```

La variante réparée :

```js
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  alert(`Puissance de ${n} n'est pas pris en charge,
    veuillez entrer un nombre entier supérieur à zéro`);
} else {
  alert( pow(x, n) );
}
```
