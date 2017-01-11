/**
 * Created by Stoyan on 1/11/2017.
 */
var food = [];
var score;
var height = (window).innerHeight;
var width = (window).innerWidth;

//Generates the food array
function placeFoodStart() {

    // 10 times, generate a random x,y, place it in the food array.
    for (var count = 0; count < 2; count++) {
        var foodX = getRandomPositionX();
        var foodY = getRandomPositionY();
        food.push({x: foodX, y: foodY});
        createFood(food[count].x, food[count].y);
        //console.log(food[count].x)
        // console.log(food[count].y);
    }

}

function placeFood() {
    // 10 times, generate a random x,y, place it in the food array.
        var foodX = getRandomPositionX();
        var foodY = getRandomPositionY();
        createFood(foodX, foodY);
}

function getRandomPositionX() {
    //use the width of the window to generate the max width possible to put the food in.
    return Math.floor((Math.random() * width) + 1);
}

function getRandomPositionY() {
    //use the height of the window to generate the max height possible to put the food in.
    return Math.floor((Math.random() * height) + 1);
}

function eatFood(x, y) {
    // for (var count = 0; count < 2; count++) {
    //     if (food[count].x == x && food[count].y == y) {
    //         food.splice(count, 1, {x: getRandomPositionX(), y: getRandomPositionY()});
    //         score++;
    //         placeFood();
    //     }
    // }
    console.log("FishX: " + x + " FishY: " + y);

    $('.food').each(function(i, obj) {
    //get the x an y values of the element
        var elementY = parseInt($(this).css('transform').split(',')[5]);
        var elementX = parseInt($(this).css('transform').split(',')[4]);

        if(y > elementY - 50 && y < elementY + 50 && x > elementX - 50 && x < elementX + 50) {
            console.log("EAT IT MOTHERFUCKER");
        }
    });
}

function createFood(x,y) {
    console.log("creatingFood");
    var newNode = document.createElement('div');
    newNode.className = 'food';
    newNode.style.transform = "translate(" + x + "px," + y + "px)";
    document.getElementById('c-swimming-pool').appendChild(newNode);
}

placeFoodStart();
eatFood(2, 1);