# La déclaration "switch"

Une instruction `switch` peut remplacer plusieurs vérification `if`.

Cela donne un moyen plus descriptif de comparer une valeur avec plusieurs variantes.

## La syntaxe

Le `switch` a un ou plusieurs blocs `case` (cas) et une valeur par défaut facultative.

Cela ressemble à ceci : 

```js no-beautify
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- La valeur de `x` est vérifiée pour une égalité stricte avec la valeur du premier `case` (c'est-à-dire, `value1`), puis du second (`value2`) et ainsi de suite.
- Si l'égalité est trouvée, `switch` commence à exécuter le code à partir du `case` correspondant, jusqu'au prochain `break` (ou jusqu'à la fin du switch).
- Si aucun cas ne correspond, le code par défaut (`default`) est exécuté (s'il existe).

## Un exemple

Un exemple de `switch` (le code exécuté est mis en évidence) :

```js run
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Trop petit' );
    break;
*!*
  case 4:
    alert( 'Exactement' );
    break;
*/!*
  case 5:
    alert( 'Trop grand' );
    break;
  default:
    alert( "Je ne connais pas ces valeurs" );
}
```

Ici, le `switch` commence à comparer `a` avec le premier `case` dont la valeur est `3`. La correspondance échoue.

Ensuite `4`, c’est une correspondance. L’exécution commence donc à partir du `case 4` jusqu’au prochain `break`.

**S'il n'y a pas de `break`, l'exécution continue avec le `case` suivant sans aucun contrôle.**

Un exemple sans `break`:

```js run
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Trop petit' );
*!*
  case 4:
    alert( 'Exactement' );
  case 5:
    alert( 'Trop grand' );
  default:
    alert( "Je ne connais pas ces valeurs" );
*/!*
}
```

Dans l'exemple ci-dessus, nous verrons l'exécution séquentielle de trois `alert` : 

```js
    alert( 'Exactement' );
    alert( 'Trop grand' );
    alert( "Je ne connais pas ces valeurs" );
```

````smart header="Toute expression peut être un argument `switch/case`"
`Switch` et `case` permettent des expressions arbitraires.

Par exemple :

```js run
let a = "1";
let b = 0;

switch (+a) {
*!*
  case b + 1:
    alert("cela fonctionne, car +a est 1, exactement égal à b+1");
    break;
*/!*

  default:
    alert("cela ne fonctionne pas");
}
```
Ici `+a` donne `1`, qui est comparé à `b + 1` dans le `case`, et le code correspondant est exécuté.
````

## Groupement de "case"

Plusieurs variantes de `case` partageant le même code peuvent être regroupées.

Par exemple, si nous voulons que le même code soit exécuté pour les `case 3` et `case 5` :

```js run no-beautify
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Bon!');
    break;

*!*
  case 3:                    // (*) groupé deux cas
  case 5:
    alert('Mauvais!');
    alert("Pourquoi ne prends-tu pas un cours de maths ?");
    break;
*/!*

  default:
    alert('Le résultat est étrange. Vraiment.');
}
```

Maintenant, les `3` et `5` affichent le même message.

La possibilité de "grouper" les `case` est un effet secondaire de la façon dont le `switch/case` fonctionne sans interruption. Ici, l’exécution du `case 3` commence à partir de la ligne `(*)` et passe par le `case 5`, car il n’ya pas de `break`.

## Le type compte

Soulignons que le contrôle d’égalité est toujours strict. Les valeurs doivent être du même type pour correspondre.

Par exemple, considérons le code suivant :

```js run
let arg = prompt("Entrez une valeur ?")
switch (arg) {
  case '0':
  case '1':
    alert( 'Un ou zéro' );
    break;

  case '2':
    alert( 'Deux' );
    break;

  case 3:
    alert( "N'exécute jamais !" );
    break;
  default:
    alert( 'Une valeur inconnue' )
}
```

1. Pour `0`, `1`, la première `alert` est exécutée.
2. Pour `2`, la deuxième `alert` est exécutée.
3. Mais pour `3`, le résultat du prompt est une chaîne de caractères `"3"`, ce qui n’est pas strictement égal `===` au chiffre `3`. Nous avons donc un code mort dans le `case 3`! La variante par défaut sera donc exécutée.
