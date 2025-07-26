let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
let sum = 0

for(var i = 0; i < round; i++)
{
    var ans = prompt("หัว หรือ ก้อย พิมพ์มาเลย !!")
    var random_ans = ""
    if(Math.floor(Math.random() * 10) <= 4){
        random_ans = "หัว"
    }

    else{
        random_ans = "ก้อย"
    }

    if(ans == random_ans){
        alert("ตอบถูก !! ยินดีด้วย")
        var score = 1
    }
    else{
        alert("ตอบผิด !! เสียใจด้วย")
        var score = 0
    }
    console.log(random_ans + " : " + ans)
    sum += parseInt(score)
    
}

document.getElementById("game-list").innerHTML = "คะแนนรวมของคุณคือ " + sum + " คะแนน"
console.log(sum)