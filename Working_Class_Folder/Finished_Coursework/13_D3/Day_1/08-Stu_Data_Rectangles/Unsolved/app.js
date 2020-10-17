// Data which we will be using to build our rectangle
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("#svg-area")
    .append("svg")
svg.attr("width","600px").attr("height","400px");

var rectangles = svg.selectAll("rect");
rectangles.data(booksReadThisYear)
    .enter()
    .append("rect")
    .classed("bar",true)
    .attr("x",50)
    .attr("y",50)
    .attr("width",50)
    .attr("height", function(d) {
        return d * 10;
    })
    .attr("stroke","blue")
    .attr("stroke-width","5")
    .attr("fill","yellow")

// Append a rectangle and set its height in relation to the booksReadThisYear value

