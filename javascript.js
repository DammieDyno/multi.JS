let h4 = document.getElementById("h4")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

function liquidity() {
    h4.innerHTML = ""
    if(input1.value > input2.value){
        alert('inoperative figure,first input has to be less than second input')
    }else{
        for (let index  = input1.value; index <= input2.value; index++) {
          for (let stoploss = 0; stoploss <=20 ; stoploss++) {
           h4.innerHTML += `<p> ${index} x ${stoploss} =  ${index * stoploss} </p>`   
          }  
        }
    }
    
}