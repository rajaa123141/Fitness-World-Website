function bmiCaluculate()
{
    let weight=document.getElementById('w1')
    let input=weight.value
    let height=document.getElementById('h1')
    let input2=height.value
    let em=document.getElementById('em')
    let answer=input/input2
    em.innerHTML="<h3>YOUR BMI IS :</h3>"+answer

}
function registration()
{
    let age=document.getElementById('r1')
    let am=document.getElementById('am')
    let value=age.value
    if(value>22)
    {
       am.innerText="registration sucessfull"
    }
    else{
        am.innerText="sorry ur age is under limit"
    }

}