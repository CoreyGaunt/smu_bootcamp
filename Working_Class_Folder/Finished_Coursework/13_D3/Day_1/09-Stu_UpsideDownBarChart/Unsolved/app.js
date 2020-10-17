// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-area")
    .append("svg")
    .attr("width",400)
    .attr("height",600);



// Vertical Bar Chart
svg.selectAll("rect")
    .data(booksReadThisYear)
    .enter()
    .append("rect")
    .classed("bar",true)
    .attr("width",50)
    .attr("height", function(d) {
        return d * 10;
    })
    .attr("x",function(d,i) {
        return i * 100;
    });


// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
