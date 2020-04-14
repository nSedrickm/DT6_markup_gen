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


  var label = "<label for='"+input_id +"'"+">"+label+"</label>";

  var input = "\n"+"<input type='"+input_type +"'"+"id='"+input_id+"'"+"class='"+input_class+"'"+">";

    return label  +  input;
}

function display() {
  get_values();
  output.textContent = gen_code(tag, id, css_class, message);
}

function display_input() {
  get_values();
  output_2.textContent = gen_input(label, input_type, input_id, input_class);
}

//tooltip
var tooltip_1 = document.getElementById("tooltip_1");
var tooltip_2 = document.getElementById("tooltip_2");

// copy output to clipboard
document.querySelector('#clip-1').addEventListener('click', () => {
  navigator.clipboard.writeText(document.querySelector('#output').textContent)
    .then(() => {
      tooltip_1.innerHTML = "Copied";
    })
    .then(() => {
       setTimeout(function () {tooltip_1.innerHTML="Copy"}, 2000);
    })
    .catch(() => {
      console.log('Failed to copy text from output.');
    });
});


// copy output-2 to clipboard
document.querySelector('#clip-2').addEventListener('click', () => {
  navigator.clipboard.writeText(document.querySelector('#output-2').textContent)
    .then(() => {
      tooltip_2.innerHTML = "Copied";
    })
    .then(() => {
      setTimeout(function () {tooltip_2.innerHTML="Copy"}, 2000);
   })
    .catch(() => {
      console.log('Failed to copy text from output-2');
    });
});

