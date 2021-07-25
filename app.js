function calc(num){
    display.value += num;
};

function is_equal(){
    disab.value = eval(display.value);
};

function back_space(){
    a = display.value;
    display.value = a.slice(0, a.length-1);
};
 
function remov(){
    display.value = "";
    disab.value ="";
};

