// First Attempt
function alphabetPosition(text) {
  let indices = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.toUpperCase().charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      indices += ` ${charCode - 64}`;
    }
  }
  
  return indices.slice(1);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));