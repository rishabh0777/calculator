let input = document.querySelector('input');
let btn = document.querySelectorAll('.btn');
let string = '';

let arr = Array.from(btn);
// console.log(arr);
arr.forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            input.value = string;
            if(input.value === NaN || input.value === ''){
                input.value = 'Error';
                
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            input.value = string;
        }
        else if(e.target.innerHTML == 'del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string+= e.target.innerHTML;
            input.value = string;
        }
        
    });
});