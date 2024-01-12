let num1 = ""
let num2 = ""
let operation = ""
let total = ""

const calculate = (e)=> {
    const val = e.target.innerText
    const type = e.target.getAttribute("type")
    if(type === 'num'){
        if(!operation){
            num1 += val
        }else{
            num2 += val
        }
    }else if(type === 'operation'){
        
    }

}

const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
    btn.addEventListener('click', calculate)
})


