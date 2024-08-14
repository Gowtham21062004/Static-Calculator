function clr(){
    document.getElementById('res').innerHTML = "0"
}

function cal(val){
    let res = document.getElementById('res');
    if(res.innerText == 0){
        res.innerHTML = val;
    }
    else{
        res.innerHTML += val;
    }
}

function solve(){
    let exp = document.getElementById('res').innerText;
    let res = eval(exp);
    document.getElementById('res').innerHTML = res;
}
