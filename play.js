var score = 00;

function agains(){
    document.getElementById("resbut").style.display = "none";
    document.getElementById("cpuside").style.display = "none";
    document.getElementById("userside").style.display = "none";
    document.getElementById("central").style.display = "initial";

}

function play1(par1){
    var com= Math.floor(Math.random()*3)+1;

    if(com == 1){
        com = "R";
    }
    else if(com == 2){
        com = "P";
    }
    else if(com == 3){
        com = "S";
    }

    if(com == par1){
        document.getElementById("announcement").innerText = "Draw";
    
    }
    else if (com == "R" && par1==="S"){
        score =score - 1;
        document.getElementById("announcement").innerText = "Com wins";
    }
    else if (com == "P" && par1==="R"){
        score =score - 1;
        document.getElementById("announcement").innerText = "Com wins";
    }
    else if (com == "S" && par1==="P"){
        score =score - 1;
        document.getElementById("announcement").innerText = "Com wins";
    }
    else{
        score =score + 1;
        document.getElementById("announcement").innerText = "User wins";
    }
    document.getElementById("scores").innerText=score;    

    
    document.getElementById("central").style.display = "none";


    f = document.getElementById("userselected");
    g = document.getElementById("cpuselected");

    if(com == "R"){
        g.setAttribute("src", "./asset/icon-rock.svg");
        g.style.borderColor = "hsl(229, 64%, 46%)";
    }
    else if(com == "S"){
        g.style.borderColor = "red";
        g.setAttribute("src", "./asset/icon-scissors.svg");
    }
    else if(com == "P"){
        g.style.borderColor = "yellow";
        g.setAttribute("src", "./asset/icon-paper.svg");
    }    

    if(par1 == "R"){
        f.setAttribute("src", "./asset/icon-rock.svg");
        f.style.borderColor = "hsl(229, 64%, 46%)";
            }
    else if(par1 == "S"){
        f.setAttribute("src", "./asset/icon-scissors.svg");
        f.style.borderColor = "red";
    }
    else if(par1 == "P"){
        f.setAttribute("src", "./asset/icon-paper.svg");
        f.style.borderColor = "yellow";}    

    document.getElementById("cpuside").style.display = "initial";
    document.getElementById("userside").style.display = "initial";
    document.getElementById("resbut").style.display = "initial";

}