// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
function citiesFilter(city) {
    return city.Increase_from_2016 > 15000;
}

// 2. Use filter() to pass the function as its argument

var filteredCities = top15Cities.filter(citiesFilter);

// Check to make sure you filtered your cities correctly
console.log(filteredCities)


// 3. Use the map method with the arrow function to return all the filtered cities' names.
var filteredNames = filteredCities.map(city => city.City);

//  Check your filtered cities
console.log(filteredNames)

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var filteredPopulation = filteredCities.map(city => city.population);

//  Check the populations of your filtered cities
console.log(filteredPopulation)

// 5. Create your trace.
var trace1 = {
    x: filteredNames,
    y: filteredPopulation,
    type:"bar"
};

// 6. Create the data array for our plot
var data = [trace1];

// 7. Define our plot layout
var layout = {
    title:"Top 15 Cities With Populations Larger Than 15,000",
    xaxis: {title:"Cities"},
    yaxis: {title:"Population"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot",data,layout);