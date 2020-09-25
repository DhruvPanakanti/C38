var canvas, backgroundImage;
//making gamestates
var gameState = 0;
var playerCount;
//making the player count
var allPlayers;
//distance between the players
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
//loading the images
function preload(){
  car1Img=loadImage("images/car1.png");
  car2Img=loadImage("images/car2.png");
  car3Img=loadImage("images/car3.png");
  car4Img=loadImage("images/car4.png");
  trackImg=loadImage("images/track.jpg");
}

//making a canvas,calling the database from firebase,calling game
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

//to clear and update the playerCount
function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
