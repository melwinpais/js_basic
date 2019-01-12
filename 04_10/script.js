var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);


var house = new Object();
console.log(house);

var house = {
  address:  "1 York Street, NSW 2000",
  levels: 2,
  rooms: 4,
  capacity: 10,
  views: 0,

  updateViews: function() {
    return ++this.views;
  }
}

console.log(house);
console.log(house.updateViews());
console.log(house);
