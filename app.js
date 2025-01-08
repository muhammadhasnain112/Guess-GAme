let score = Math.floor(Math.random() * 10 );
let remain = 3;
for (let a = 0;a < 3;a++){
    let usernum = prompt(`Enter Your Number Between 1 To 10 \n& You Have A ${remain} Chance` );
    --remain
    if(score == usernum){
        alert("YOU WIN ")
     break
    }else{
        alert(`Number Is Not Match`)
    }
}
if(remain == 0){

       alert(`Game Over`)
}
