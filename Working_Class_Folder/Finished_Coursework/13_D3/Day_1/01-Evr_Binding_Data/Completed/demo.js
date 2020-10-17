var arr = [50, 55, 53];

d3.select("ul").selectAll("li")
.each(function(d,i) {
console.log("element",this);
console.log("data",d);
console.log("index",i);
});

d3.select("ul").selectAll("li").data();

d3.select("ul").selectAll("li")
.data(arr)
.text(function(d) {
    return d;
});