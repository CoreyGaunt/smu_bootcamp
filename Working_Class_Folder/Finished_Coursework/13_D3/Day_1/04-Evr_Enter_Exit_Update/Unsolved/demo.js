var austinTemps = [76, 59, 59, 73, 71];

d3.select("#content").selectAll(".temps")
    .data(austinTemps)
    .style("height",function(object) {
        return object + "px";
    });

    d3.select("#content").selectAll(".temps")
        .data(austinTemps)
        .enter()
        .append('div')
        .classed('temps',true)
        .style("height",function(object) {
            return object + "px";
        });

var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps)
    selection.enter()
    .append('div')
    .classed('temps',true)
    .merge(selection)
    .style("height",function(object) {
        return object + "px";
    });


var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps)
    selection.enter()
    .append('div')
    .classed('temps',true)
    .merge(selection)
    .style("height",function(object) {
        return object + "px";
    });

selection.exit().remove();

function update(data) {
    var selection = d3.select("#content").selectAll(".temps")
    .data(data)
    selection.enter()
    .append('div')
    .classed('temps',true)
    .merge(selection)
    .style("height",function(object) {
        return object + "px";
    });

    selection.exit().remove();
} 