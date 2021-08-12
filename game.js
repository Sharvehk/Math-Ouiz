Player1_name = localStorage.getItem("player1");
Player2_name = localStorage.getItem("player2");
Player1_score = 0;
Player2_score = 0;

document.getElementById("player1_name").innerHTML = Player1_name+" : ";
document.getElementById("player2_name").innerHTML = Player2_name+" : ";

document.getElementById("player1_score").innerHTML = " "+Player1_score;
document.getElementById("player2_score").innerHTML = " "+Player2_score;

document.getElementById("Players_name").innerHTML = "Question Turn - " + Player1_name;
document.getElementById("Players_name2").innerHTML = "Answer Turn - " + Player2_name;

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

question_turn = "player1";
answer_turn = "player2";

function check(){

    get_answer = document.getElementById("Input_check_box").value;
    if(get_answer == the_answer){
        Player2_score = Player2_score + 1;
        document.getElementById("player2_score").innerHTML = Player2_score;
    }
    else{
        Player1_score = Player1_score + 1;
        document.getElementById("player1_score").innerHTML = Player1_score;
    }


    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("Players_name").innerHTML = "Question Turn - " + Player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("Players_name").innerHTML = "Question Turn - " + Player1_name;
    }

    
    if(answer_turn == "player2"){
        answer_turn = "player1";
        document.getElementById("Players_name2").innerHTML = "Answer Turn - " + Player1_name;
    }
    else{
        answer_turn = "player2";
        document.getElementById("Players_name2").innerHTML = "Answer Turn - " + Player2_name;
    }

    document.getElementById("output").innerHTML = "";

    
}