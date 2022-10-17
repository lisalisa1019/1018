#步驟一

const palettes = [["#feebe1", "#f2b897", "#d97645", "#f594c9", "#e25088", "#d81354", "#ec423c", "#b31429", "#68182d", "#4f171a"],
  ["#cc5803", "#e2711d", "#ff9505", "#ffb627", "#ffc971"],
["#ffdd44", "#ff7744", "#ff0044", "#cc0044", "#880044", "#440044", "#110044", "#000033", "#000011"]]

const palette = palettes[Math.floor(Math.random() * palettes.length)]

---

# 步驟二

const palettes = [["#feebe1", "#f2b897", "#d97645", "#f594c9", "#e25088", "#d81354", "#ec423c", "#b31429", "#68182d", "#4f171a"],
  ["#cc5803", "#e2711d", "#ff9505", "#ffb627", "#ffc971"],
["#ffdd44", "#ff7744", "#ff0044", "#cc0044", "#880044", "#440044", "#110044", "#000033", "#000011"]]

const palette = palettes[Math.floor(Math.random() * palettes.length)]

function setup() {
  noLoop();
  createCanvas(600, 600);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background("#ffefd6");
  let tileWidth = 50;
  let tileRadius = tileWidth / 2;
  let inradiusDm = tileWidth / 1.1547005;
  let xPos = 0;

  let longLeg = inradiusDm / 2;
  let hyp = longLeg / cos(30);
  let shortLeg = sqrt(pow(hyp, 2) - pow(longLeg, 2));

  noFill();


#步驟二


const palettes = [["#feebe1", "#f2b897", "#d97645", "#f594c9", "#e25088", "#d81354", "#ec423c", "#b31429", "#68182d", "#4f171a"],
  ["#cc5803", "#e2711d", "#ff9505", "#ffb627", "#ffc971"],
["#ffdd44", "#ff7744", "#ff0044", "#cc0044", "#880044", "#440044", "#110044", "#000033", "#000011"]]

const palette = palettes[Math.floor(Math.random() * palettes.length)]

function setup() {
  noLoop();
  createCanvas(600, 600);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background("#ffefd6");
  let tileWidth = 50;
  let tileRadius = tileWidth / 2;
  let inradiusDm = tileWidth / 1.1547005;
  let xPos = 0;

  let longLeg = inradiusDm / 2;
  let hyp = longLeg / cos(30);
  let shortLeg = sqrt(pow(hyp, 2) - pow(longLeg, 2));

  noFill();
	
	 translate(width / 2, height / 2);
  scale(1.7);
  translate(-width / 2, -height / 2);

  for (let j = 0; j < (height / tileWidth - 1) * 1.5; j++) {
    for (let i = 0; i < width / inradiusDm; i++) {
      if (j % 2 === 1) {
        xPos = inradiusDm * i;
      } else {
        xPos = longLeg + inradiusDm * i;
      }

	 //cuts off the last hex for every even numbered row
      if (j % 2 === 1 || (j % 2 != 1 && i < width / inradiusDm - 1)) {
        push();
        translate(xPos, ((j / 2) * 3 + 0.5) * tileRadius);
        let randomCol = palette[floor(random(palette.length))];
        fill(randomCol);
        polygon(0, 0, tileRadius, 6);
        randomCol = palette[floor(random(palette.length))];
        fill(randomCol);
        polygon(0, 0, tileRadius - random(5, 15));
        pop();
      }
    }
  }
}

---

#步驟四
const palettes = [["#feebe1", "#f2b897", "#d97645", "#f594c9", "#e25088", "#d81354", "#ec423c", "#b31429", "#68182d", "#4f171a"],
  ["#cc5803", "#e2711d", "#ff9505", "#ffb627", "#ffc971"],
["#ffdd44", "#ff7744", "#ff0044", "#cc0044", "#880044", "#440044", "#110044", "#000033", "#000011"]]

const palette = palettes[Math.floor(Math.random() * palettes.length)]

function setup() {
  noLoop();
  createCanvas(600, 600);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background("#ffefd6");
  let tileWidth = 50;
  let tileRadius = tileWidth / 2;
  let inradiusDm = tileWidth / 1.1547005;
  let xPos = 0;

  let longLeg = inradiusDm / 2;
  let hyp = longLeg / cos(30);
  let shortLeg = sqrt(pow(hyp, 2) - pow(longLeg, 2));

  noFill();

  translate(width / 2, height / 2);
  scale(1.7);
  translate(-width / 2, -height / 2);

  for (let j = 0; j < (height / tileWidth - 1) * 1.5; j++) {
    for (let i = 0; i < width / inradiusDm; i++) {
      if (j % 2 === 1) {
        xPos = inradiusDm * i;
      } else {
        xPos = longLeg + inradiusDm * i;
      }
      //cuts off the last hex for every even numbered row
      if (j % 2 === 1 || (j % 2 != 1 && i < width / inradiusDm - 1)) {
        push();
        translate(xPos, ((j / 2) * 3 + 0.5) * tileRadius);
        let randomCol = palette[floor(random(palette.length))];
        fill(randomCol);
        polygon(0, 0, tileRadius, 6);
        randomCol = palette[floor(random(palette.length))];
        fill(randomCol);
        polygon(0, 0, tileRadius - random(5, 15));
        pop();
      }
    }
  }
}

function polygon(x, y, radius, npoints = 6) {
  let angle = 60 / npoints;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + sin(a) * radius;
    let sy = y + cos(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
