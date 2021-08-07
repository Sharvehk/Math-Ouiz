player1_name =  localStorage.getItem("player1");
player2_name =  localStorage.getItem("player2");
player1_Score = 0;
player2_Score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

function send(){
    number1 = document.getElementById("Number1").value;
    number2 = document.getElementById("Number2").value;
    sign = document.getElementById("Sign").value;
    the_answer = parseInt(number1)+ sign +parseInt(number2); 
    if(sign == "x" ){
        the_answer = the_answer = parseInt(number1) * parseInt(number2); 
    }

    if(sign == "-" ){
        the_answer = the_answer = parseInt(number1) - parseInt(number2); 
    }

    if(sign == "+" ){
        the_answer = the_answer = parseInt(number1) + parseInt(number2); 
    }

    if(sign == "/" ){
        the_answer = the_answer = parseInt(number1) / parseInt(number2); 
    }

    Question = "<h4>"+number1+ sign +number2+"</h4>";   
    input_box = "<br>Answer : <input type='text' id='Input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = Question + input_box + check_button;    

    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value= " ";
    document.getElementById("Number2").value= " ";
    document.getElementById("Sign").value= " ";
    
}