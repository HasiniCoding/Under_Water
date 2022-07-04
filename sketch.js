
var canvas
var backgroundImage, jewelsImage, sharkImage, playerImage, seaweedImage





function preload() {
backgroundImage = loadImage("Background.jpeg")
jewelsImage = loadImage("Jewels.jpeg")
seaweedImage = loadImage("SeaWeed.jpeg")
sharkImage = loadImage("Shark.png")
playerImage = loadImage("Diver-Vector-PNG.png")
}


function setup() {
canvas = createCanvas(windowWidth,windowHeight)


}


function draw() {
background(backgroundImage)

}