// 储存曲线的所有点
const allPoints = [];

// ε
let epsilon = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 绘制一条曲线
  for (let x = 0; x < width; x++) {
    let xval = map(x, 0, width, 0, 5);
    let yval = exp(-xval) * cos(TWO_PI * xval);
    let y = map(yval, -1, 1, height, 0);
    allPoints.push(createVector(x, y));
  }
}

function rdp(startIndex, endIndex, allPoints, rdpPoints) {
  let nextIndex = findFurthest(allPoints, startIndex, endIndex);
  if (nextIndex > 0) {
    if (startIndex != nextIndex) {
      rdp(startIndex, nextIndex, allPoints, rdpPoints);
    }
    rdpPoints.push(allPoints[nextIndex]);
    if (endIndex != nextIndex) {
      rdp(nextIndex, endIndex, allPoints, rdpPoints);
    }
  }
}

function lineDist(c, a, b) {
  let norm = scalarProjection(c, a, b);
  return p5.Vector.dist(c, norm);
}

function scalarProjection(p, a, b) {
  let ap = p5.Vector.sub(p, a);
  let ab = p5.Vector.sub(b, a);
  ab.normalize();
  ab.mult(ap.dot(ab));
  let normalPoint = p5.Vector.add(a, ab);
  return normalPoint;
}

// 返回最远的节点
function findFurthest(points, a, b) {
  let recordDistance = -1;
  let start = points[a];
  let end = points[b];
  let furthestInedx = -1;
  for (let i = a + 1; i < b; i++) {
    let currentPoint = points[i];
    let d = lineDist(currentPoint, start, end);
    if (d > recordDistance) {
      recordDistance = d;
      furthestInedx = i;
    }
  }

  if (recordDistance > epsilon) {
    return furthestInedx;
  } else {
    return -1;
  }
}

function draw() {
  background(0);

  const rdpPoints = [];
  // 保存起始点和结束点
  let total = allPoints.length;
  let startIndex = 0;
  let endIndex = total - 1;
  let start = allPoints[startIndex];
  let end = allPoints[endIndex];
  rdpPoints.push(start);
  rdp(startIndex, endIndex, allPoints, rdpPoints);
  rdpPoints.push(end);
  epsilon += 0.1;
  if (epsilon > 50) {
    epsilon = 0;
  }

  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (const v of allPoints) {
    vertex(v.x, v.y);
  }
  endShape();

  stroke(255, 0, 255);
  strokeWeight(2);
  beginShape();
  for (const v of rdpPoints) {
    vertex(v.x, v.y);
  }
  endShape();
}
