function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(125, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 180, 100, 300, 300);

    fill(255, 0, 0);
    stroke(0, 255, 0);
    circle(50, 50, 80)
    
    fill(0, 255, 0);
    stroke(255, 0, 0);
    circle(130, 50, 80)

    fill(0, 255, 0);
    stroke(255, 0, 0);
    circle(50, 130, 80)

    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(190, 45, 280, 20)

    fill(0, 255, 0);
    stroke(255, 0, 0);
    circle(527, 50, 80)

    fill(255, 0, 0);
    stroke(0, 255, 0);
    circle(607, 50, 80)

    fill(0, 255, 0);
    stroke(255, 0, 0);
    circle(607, 130, 80)

    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(607, 180, 20, 270)

    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(50, 180, 20, 270)

    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(50, 430, 540, 20)
}
function take_snapshot()
{
   save('photo.png');
}