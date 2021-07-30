function adduser(){
    Player1name = document.getElementById("player1_name_input").value;
    Player2name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1",Player1name);
    localStorage.setItem("player2",Player2name);
    window.location = "game.html";
}