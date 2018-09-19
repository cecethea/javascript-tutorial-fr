# Le mode moderne, "use strict"

JavaScript a longtemps évolué sans problèmes de compatibilité. De nouvelles fonctionnalités ont été ajoutées au langage, mais les anciennes fonctionnalités n’ont pas été modifiées.

Cela a l'avantage de ne jamais casser le code existant. Mais l'inconvénient était que toute erreur ou décision imparfaite prise par les créateurs de JavaScript restait bloquée dans lea langage pour toujours.

Il en avait été ainsi jusqu'en 2009 lorsque ECMAScript 5 (ES5) est apparu. Il a ajouté de nouvelles fonctionnalités au langage et modifié certaines des fonctionnalités existantes. Pour conserver l'ancien code, la plupart des modifications sont désactivées par défaut. Il leur faut une permission explicite avec une directive spéciale `"use strict"`.

## "use strict"

La directive ressemble à une chaînede caractères : `"use strict"` or `'use strict'`. Lorsqu'il se trouve en haut du script, l'ensemble du script fonctionne de manière "moderne".

Par exemple

```js
"use strict";

// ce code fonctionne de manière moderne
...
```

Nous allons apprendre les fonctions (un moyen de regrouper les commandes) bientôt.

Notons également que `"use strict"` peut être placé au début d'une fonction (pour la plupart des types de fonctions) au lieu du script entier. Le mode strict est alors activé uniquement dans cette fonction. Mais généralement, les gens l'utilisent pour tout le script.


````warn header="Assurez-vous que \"use strict\" est en haut"
Assurez-vous que `"use strict"` est en haut du script, sinon le mode strict peut ne pas être activé.

Il n'y a pas de mode strict ici :

```js no-strict
alert("un peu de code");
// "use strict" ci-dessous est ignoré, il doit être en haut

"use strict";

// le mode strict n'est pas activé
```

Seuls les commentaires peuvent apparaître avant `"use strict"`.
````

```warn header="Il n'y a aucun moyen d'annuler `use strict`"
Il n'y a pas de directive `"no use strict"` ou similaire, qui réactiverait l'ancien comportement.

Une fois que nous entrons dans le mode strict, il n’ya plus de retour possible.
```

## Toujours utiliser "use strict"

Les différences entre le mode `"strict"` et le mode par "défaut" doivent encore être couvertes.

Dans les chapitres suivants, au fur et à mesure que nous apprendrons les fonctionnalités du langage, nous noterons les différences du mode strict. Heureusement, il n'y en a pas beaucoup. Et ils rendent notre vie meilleure.

À ce stade, il suffit de savoir en général :

1. La directive `"use strict"` fait passer le moteur en mode "moderne", modifiant le comportement de certaines fonctionnalités intégrées. Nous les verrons en détails pendant que nous étudions.
2. Le mode strict est activé par `"use strict"` en haut du fichier. Il existe également plusieurs fonctionnalités de langage telles que "classes" et "modules" qui permettent un mode strict automatiquement.
3. Le mode strict est pris en charge par tous les navigateurs modernes.
4. Il est toujours recommandé de lancer les scripts avec `"use strict"`. Tous les exemples de ce tutoriel le supposent, sauf si (très rarement) c'est spécifié autrement.

```
