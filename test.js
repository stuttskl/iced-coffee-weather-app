const comparator = (a, b) => {
  if (a.city > b.city) {
    return 1;
  } 
  else if (a.city < b.city) {
    return -1;
  }
  else {
    return 0;
  }
}

let cityData = [
  {
    city: "Seattle",
    country: "US",
  },
  {
    city: "San Diego",
    country: "US",
  },
  {
    city: "Salem",
    country: "US",
  },
  {
    city: "San Francisco",
    country: "US",
  },
  {
    city: "SeattleB",
    country: "US",
  },
  {
    city: "SeattleC",
    country: "US",
  },
  {
    city: "SeattleD",
    country: "US",
  },
];

console.log("Running test");
let arr2 = cityData.sort(comparator);
console.log(arr2.filter(word => word.city.toLowerCase().startsWith("sea")));