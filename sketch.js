let m, s, t;
let compressChannels = true;
let posA_x, posA_y, posB_x, posB_y, posC_x, posC_y;
let black;
let size;

function preload() {
    img = loadImage('main.png');
    texto = loadImage('texto.png');
}

function setup() {
    createCanvas(1080, 1080);
    t = new Riso('blue');
    s = new Riso('green');
    m = new Riso('red');
    black = new Riso('black');

    posA_x = width / 4;
    posA_y = height / 4;
    posB_x = width * 0.75;
    posB_y = height / 4;
    posC_x = width / 4;
    posC_y = height * 0.75;
    size = 500;
    noLoop();
}

function draw() {
    background(255);
    clearRiso();

    let dithered_1 = ditherImage(img, 'atkinson', 100);
    m.image(dithered_1, 40, 40, 1000, 1000, 1000);

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            s.image(dithered_1, 40 + (500 * i), 40 + (500 * j), size, size);
        }
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            t.image(dithered_1, 40 + (250 * i), 40 + (250 * j), size/2, size/2);
        }
    }


    drawRiso();
}