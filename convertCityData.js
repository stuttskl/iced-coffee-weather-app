var fs = require("fs");
var data = JSON.parse(fs.readFileSync('city.list.json'));

const comparator = (a, b) => {
  if (a.country == "US" && b.country != "US") {
    return -1;
  }
  else if (a.country != "US" && b.country == "US") {
    return 1;
  }
  
  if (a.name > b.name) {
    return 1;
  } 
  else if (a.name < b.name) {
    return -1;
  }
  else {
    return 0;
  }
}

console.log(data[0]);

let toSave = data.map((entry) => {
  return {
    name: entry.name,
    state: entry.state,
    country: entry.country
  };
});

console.log(toSave[0]);

let arr2 = toSave.sort(comparator);

fs.writeFile('places.json', JSON.stringify(arr2), (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Success!");
  }
});