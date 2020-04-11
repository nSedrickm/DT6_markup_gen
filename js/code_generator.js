// module code_generator.js
console.log("generator.js loaded");

let tag = document.getElementById("tag").value;
let id = document.getElementById("id").value;
let css_class= document.getElementById("class").value;
let message=document.getElementById("text").value;
let output = document.getElementById("output");

console.log(tag , id, css_class, message);

let button = document.getElementById("button").addEventListener("click", display);

function gen_code(tag, id, css_class, message) {

let result =  "<" + tag + " id='" + id + "'" + " class='" + css_class + "'" +">" + message + "</" + tag + ">" ;

console.log(result);

return result;

}

function display() {
    console.log("button clicked");
    console.log("tag :" + tag , "id :" + id , "class :" + css_class, "message :" +  message);
    output.textContent = gen_code(tag,id,css_class,message);
    }


