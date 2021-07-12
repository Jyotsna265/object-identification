function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

img = "";
status = "";

function preload()
{
    img = loadImage('dog_cat.jpg')
}

function draw()
{
image(img, 0, 0, 640, 420);
fill("#42f5ef")
text("Dog", 45, 75);
noFill();
stroke("#42f5ef");
rect(30, 60,450,350);

fill('#42f5ef')
text("Cat", 320, 120);
noFill();
stroke("#42f5ef");
rect(300, 90, 270, 320);
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objecDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
        console.log(results)
    }
}