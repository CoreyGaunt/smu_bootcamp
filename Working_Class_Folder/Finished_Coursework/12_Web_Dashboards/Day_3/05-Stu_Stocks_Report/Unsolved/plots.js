var apiKey = "7B4YLLRCkz2VzEyTQkZy";

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function getMonthlyData() {

  var queryUrl = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&collapse=monthly&api_key=${apiKey}`;
  d3.json(queryUrl).then(function(data) {
    // @TODO: Unpack the dates, open, high, low, close, and volume
    var name = data.dataset.name;
    var dates = unpack(data.dataset.data,0);
    var open = unpack(data.dataset.data,1);
    var high = unpack(data.dataset.data,2);
    var low = unpack(data.dataset.data,3);
    var close = unpack(data.dataset.data,4);
    var volume = unpack(data.dataset.data,5);
    
    buildTable(dates, open, high, low, close, volume);
  });
}

function buildTable(dates, open, high, low, close, volume) {
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = 0; i < 12; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(dates[i]);
    trow.append("td").text(open[i]);
    trow.append("td").text(high[i]);
    trow.append("td").text(low[i]);
    trow.append("td").text(close[i]);
    trow.append("td").text(volume[i]);
  }
}

function buildPlot() {
  var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2017-01-01&end_date=2018-11-22&api_key=${apiKey}`;

  d3.json(url).then(function(data) {

    
    // @TODO: Unpack the dates, open, high, low, and close prices
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data,0);
    var open = unpack(data.dataset.data,1);
    var high = unpack(data.dataset.data,2);
    var low = unpack(data.dataset.data,3);
    var close = unpack(data.dataset.data,4);
    var volume = unpack(data.dataset.data,5);

    getMonthlyData();

    // Closing Scatter Line Trace
    var trace1 = {
      // @TODO: YOUR CODE HERE
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: close
    };

    // Candlestick Trace
    var trace2 = {
      // @TODO: YOUR CODE HERE
      type: "candlestick",
      x: dates,
      high: high,
      low: low,
      open: open,
      close: close
    };

    var data = [trace1, trace2];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      },
      showlegend: false
    };

    Plotly.newPlot("plot", data, layout);

  });
}

buildPlot();
