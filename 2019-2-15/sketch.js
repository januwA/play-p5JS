let sourceLink = 'https://api.github.com/users/';
let inputname;

function setup() {
  noCanvas();
  inputname = select('#inputname');
  inputname.changed(getValue);
}


function getValue() {
  const v = inputname.value();
  loadJSON(sourceLink + v, getData);
}


function getData(data) {
  console.log(data);
  createElement('h3', data.login);
  createImg(data.avatar_url).size(100, 100);
}