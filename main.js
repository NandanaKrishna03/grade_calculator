

const grade=(event)=>{
    event.preventDefault()
    const input = document.getElementById("mark"); 
const inputValue = mark.value; 

let result="";

    if(inputValue>=90){
        result = "A+ Grade";
         }
    else if(inputValue>=80&& inputValue<=89){
        result = "A Grade";
    }
    else if(inputValue>=70&& inputValue<=79){
        result = "B+ Grade";
    }
    else if(inputValue>=60&& inputValue<=69){
        result = "B Grade";
    }
    else if(inputValue>=50&& inputValue<=59){
        result = "C+ Grade";
    }
    else if(inputValue>=40&& inputValue<=49){
        result = "C Grade";
    }
    else if(inputValue>=30&& inputValue<=39){
        result = "D+ Grade";
    }
    else if(inputValue>=20&& inputValue<=29){
        result = "D Grade";
    }
    else {
        result = "E Grade";
    }

if(inputValue>=40){
    Current_status ="PASSED"
}
else{
    Current_status ="FAILED" 
}

document.getElementById("outputDisplay").innerText=result
document.getElementById("outputDisplay2").innerText=Current_status
}
window.onload = function () {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", grade);

}

