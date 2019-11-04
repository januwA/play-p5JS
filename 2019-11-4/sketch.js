let len = 5;
let angle = 0.1; // 0.2 ~ 0.05

function setup() {
  createCanvas(400, 600);

  background(0);
  strokeWeight(2);
  for (let i = 1; i < 1000; i++) {
    let sequence = [];
    let n = i;
    do {
      n = collatz(n);
      sequence.push(n);
    } while (n !== 1);
    sequence.push(1);
    sequence.reverse();

    resetMatrix(); // 重置转换[translate]
    translate(width / 2, height);

    for (let j = 0; j < sequence.length; j++) {
      const value = sequence[j];
      rotate(value % 2 === 0 ? -angle : angle);
      stroke(random(255), random(255), 0, map(j, 0, sequence.length, 255, 50));
      line(0, 0, 0, -len);
      translate(0, -len);
    }
    sequence = null;
  }
}

function draw() {}

function collatz(n) {
  if (n % 2 === 0) {
    // even
    return n / 2;
  } else {
    // odd
    return (n * 3 + 1) / 2; // 加快归1
  }
}
