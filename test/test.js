//test.js
//Loads after generator.js so function calls can be direct :)
console.log("test.js loaded");

//test get_values()
get_values();
if (tag) {
  console.log("function: get_values() -> test:pass");
} else {
  console.log("function: get_values() -> test:fail");
}

//test gen_code()
var test_tag = "h4",
  test_id = "heading-4",
  test_class = "h-class",
  message = "Testing";
if (
  gen_code(test_tag, test_id, test_class, message) ==
  "<h4 id='heading-4' class='h-class'>Testing</h4>"
) {
  console.log("function: gen_code() -> test:pass");
} else {
  console.log("function: gen_code() -> test:fail");
}

//test gen_input()
var test_label = "sample",
  test_input_id = "samp_id",
  test_input_type = "text",
  test_input_class = "samp_class";
if (
  gen_input(test_label, test_input_type, test_input_id, test_input_class) ==
  "<label for='samp_id'>sample</label><input type='text'id='samp_id'class='samp_class'>"
) {
  console.log("function: gen_input() -> test:pass");
} else {
  console.log("function: gen_input() -> test:fail");
}
if (get_values() && gen_code(test_tag, test_id, test_class, message)) {
  //test display()
  console.log("function: display() -> test:pass");
} else {
  console.log("function: display() -> test:fail");
}

//test display_input()
if (get_values() && gen_code(label, input_type, input_id, input_class)) {
  console.log("function: display_input() -> test:pass");
} else {
  console.log("function: display_input() -> test:fail");
}
