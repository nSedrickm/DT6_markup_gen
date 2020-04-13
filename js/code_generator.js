// module code_generator.js
console.log("generator.js loaded");

var tag = null,
  id = null,
  css_class = null,
  message = null,
  label = null,
  input_type = null,
  input_id = null,
  input_class = null;

function get_values() {
  tag = document.getElementById("tag").value;
  id = document.getElementById("id").value;
  css_class = document.getElementById("class").value;
  message = document.getElementById("text").value;
  label = document.getElementById("label").value;
  input_type = document.getElementById("input_type").value;
  input_id = document.getElementById("input_id").value;
  input_class = document.getElementById("input_class").value;
}

var output = document.getElementById("output");
var output_2 = document.getElementById("output-2");

var button = document
  .getElementById("button")
  .addEventListener("click", display);
var button_2 = document
  .getElementById("button-2")
  .addEventListener("click", display_input);

function gen_code(tag, id, css_class, message) {
  var result =
    "<" +
    tag +
    " id='" +
    id +
    "'" +
    " class='" +
    css_class +
    "'" +
    ">" +
    message +
    "</" +
    tag +
    ">";
  return result;
}

function gen_input(label, input_type, input_id, input_class) {
  let result =
    "<label for='" +
    input_id +
    "'" +
    ">" +
    label +
    "</label>" +
    "\n" +
    "<input type='" +
    input_type +
    "'" +
    "id='" +
    input_id +
    "'" +
    "class='" +
    input_class +
    "'" +
    ">";

  console.log("gen_input() :" + result);

  return result;
}

function display() {
  get_values();
  output.textContent = gen_code(tag, id, css_class, message);
}

function display_input() {
  get_values();
  output_2.textContent = gen_input(label, input_type, input_id, input_class);
}
