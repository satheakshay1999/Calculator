let screen =document.getElementById('input');
let buttonss=document.querySelectorAll('button');
let screenValue ='';
for( let item of buttonss)
{
    item.addEventListener('click' , (e)=> {
       let  buttonText=e.target.innerText;
        console.log(`button text is `,buttonText);
        if(buttonText=='x'){
            buttonText = '*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }else if(buttonText == 'C') 
        {
            screenValue = "" ;
            screen.value=screenValue;   
        }
        else if(buttonText == '=')
        {
           screen.value =eval(screenValue);
           screenValue = screen.value ;
        }else
        {
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}