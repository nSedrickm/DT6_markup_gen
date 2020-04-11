// module test.js
import {gen_code , display} from '../js/code_generator';

if(
gen_code(h1, main_header, header_class, welcome) == '<h1 id="main_header" class="header_class">Welcome</h1>') {

 console.log("function: gen_code test pass")
}
else {
    console.log("function: gen_code: test fail");
}

