var trace1 = {
    x:data.map(row => row.pair),
    y:data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar"
};

var trace2 = {
    x:data.map(row => row.pair),
    y:data.map(row => row.romanSearchResults),
    text: data.map(row => row.romanName),
    name: "Roman",
    type: "bar"
};

var data = [trace1,trace2];

var layout = {
    title: "Greek vs Roman gods search results",
    barmode: "stack"
  };

Plotly.newPlot("plot",data,layout);