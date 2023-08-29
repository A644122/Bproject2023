// Form selected//
const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    // console.log(e);
    e.preventDefault();
    const ht=parseInt(document.querySelector('#height').value);
   
   
    const wt= parseInt(document.querySelector('#weight').value);
    // console.log(`rhis is weight : ${wt}`);

    const result =document.querySelector('#result');

  if(ht === '' || ht < 0 || isNaN(ht)){
    result.innerHTML=`please input valid height ${ht}`;
  }else if(wt === '' || wt < 0 || isNaN(wt)){
    result.innerHTML=`please input valid weight ${wt}`;
  }
  else{
   const Bmi= (wt/((ht*ht)/1000)).toFixed(2);
   result.innerHTML =`<span>${Bmi}</span>`
  }
  

});
