const fight = document.getElementById("fight");
const bag = document.getElementById("bag");
const pokemon = document.getElementById("pokemon");
const run = document.getElementById("run");
const text = document.getElementById("text");
var moveMenu = false;

fight.addEventListener("click", function(e) {
    if(!moveMenu){
        moveMenu = true;

        fight.innerHTML = "Thunderbolt"
        fight.style.backgroundColor = "gold"
        fight.style.fontSize = "40px"


        bag.innerHTML = "Iron Tail"
        bag.style.backgroundColor = "gray"

        pokemon.innerHTML = "Agility"
        pokemon.style.backgroundColor = "magenta"

        run.innerHTML = "Surf"
        run.style.backgroundColor = "blue"
    }
    else{
        text.innerHTML = "Pikachu used Thunderbolt!"
        moveBar(120);
        moveMenu = false;
    }
});


function moveBar(damage){
    var elem = document.getElementById("oppGreenBar");
    var width = elem.value;
    var id = setInterval(frame, 10);
    function frame(){
            if(width == 0){clearInterval(id);}
            if(damage == 0){clearInterval(id);}
            else{
                damage--;
                width--;
                elem.value = width;
            }
    }
}

