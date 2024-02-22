//calculator
const btnNum = document.querySelectorAll("#main #containor .btnNum")
const cls = document.querySelector(".cls")
let input = document.querySelector('input')
const res = document.querySelector('.res')
console.log(btnNum)
const btnArr = Array.from(btnNum)
console.log(btnArr)

btnArr.map((btn)=>{
    btn.addEventListener("click", (e)=>{
        input.value += e.target.value
    })
})
cls.addEventListener("click", ()=>{
    input.value = '';
})
res.addEventListener("click", ()=>{
    const result = eval(input.value)
    input.value = result
})



