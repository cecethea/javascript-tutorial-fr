
function readNumber() {
  let num;

  do {
    num = prompt("Entrez un nombre s'il vous plaît", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;
  
  return +num;
}
