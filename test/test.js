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

//test display()
if (get_values() && gen_code(test_tag, test_id, test_class, message)) {
  console.log("function: display() -> test:pass");
} else {
  console.log("function: display() -> test:fail");
}
