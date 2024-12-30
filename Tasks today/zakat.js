let gold=1000;

function Zaaqa(x){
    if (x>gold)
        {
            num_of_times=x/gold;
            y=(gold * 2.5)/100;
            return y * num_of_times;
        }
    else if(x==gold){return (x * 2.5)/100;}
    else{return"No Zaaqa";}
}

let x=Zaaqa(2000);
console.log("Zaaqa is "+x);