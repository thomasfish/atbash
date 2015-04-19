function update() {
  var text = el("normal").value;
  el("atbash").value = atbash(text);
}
function atbash(input) {
  var output = '';
  var len = input.length;
  var i = -1;
  var code;

  while (++i < len) {
    code = input.charCodeAt(i);

    if (code >= 97 && code <= 122) { // a-z
      output += String.fromCharCode(code + (122 - code - (code - 97)));
      continue;
    }

    if (code >= 65 && code <= 90) { // A-Z
      output += String.fromCharCode(code + (90 - code - (code - 65)));
      continue;
    }

    output += input[i];
  }

  return output;
}
function el(id) {
  return document.getElementById(id);
}
