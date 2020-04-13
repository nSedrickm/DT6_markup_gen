// module code_generator.js
console.log("generator.js loaded");


var tag = null,
    id=null ,
    css_class=null,
    message=null;

function get_values() {
tag = document.getElementById("tag").value;
id = document.getElementById("id").value;
css_class= document.getElementById("class").value;
message=document.getElementById("text").value;
}

var output = document.getElementById("output");
var button = document.getElementById("button").addEventListener("click", display);

function gen_code(tag, id, css_class, message) {
var result =  "<" + tag + " id='" + id + "'" + " class='" + css_class + "'" +">" + message + "</" + tag + ">" ;
return result;
}

function display() {
    get_values();
    output.textContent = gen_code(tag,id,css_class,message);
}


