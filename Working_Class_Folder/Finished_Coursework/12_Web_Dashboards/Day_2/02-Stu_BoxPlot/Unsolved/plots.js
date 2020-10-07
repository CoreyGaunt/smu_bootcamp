// @TODO: YOUR CODE HERE
var trace1 = {
    y: temps.newyork,
    name: "New York",
    type: "box",
    boxpoints: "all"
};

var trace2 = {
    y: temps.houston,
    name: "Houston",
    type: "box",
    boxpoints: "all"
};

var data = [trace1,trace2];

var layout = {
    title: "Temperatures in New York and Houston",
    yaxis: {title:"Degrees (F)"}
};

Plotly.newPlot("plot",data,layout)