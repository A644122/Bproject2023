const bd=document.querySelector('.changecolor');
const allbutton=document.querySelectorAll('.buttons1');
// console.log(allbutton);
allbutton.forEach(function(item){
    console.log(item);
    item.addEventListener('click',function(value){
        console.log(value);
        console.log(value.target);
        if(value.target.id === 'red'){
            bd.style.backgroundColor=value.target.id;
        }
        if(value.target.id === 'green'){
            bd.style.backgroundColor=value.target.id;
        }
        if(value.target.id === 'blue'){
            bd.style.backgroundColor=value.target.id;
        }
        if(value.target.id === 'white'){
            bd.style.backgroundColor=value.target.id;
        }

    })
});