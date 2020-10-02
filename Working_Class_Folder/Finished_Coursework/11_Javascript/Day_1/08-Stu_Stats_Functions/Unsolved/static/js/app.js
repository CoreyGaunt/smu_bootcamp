var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];
var sum = 0
var dist_sum = 0
var monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23]
var mileRunTimes = [5.06, 4.54, 5.56, 4.40, 7.10]



function mean(array_name) {
    for (var s = 0; s < array_name.length; s++) {
        sum += array_name[s];
        average = sum / array_name.length;
    }
    console.log(`The mean value of this array is equal to ${average}`);
}

function variance(array_name) {
    for (var s = 0; s < array_name.length; s++) {
        sum += array_name[s];
        average = sum / array_name.length;
        dist = (array_name[s] - average) ** 2;
        dist_sum += dist;
        varianceValue = dist_sum / array_name.length;
    }
    console.log(`The variance of this array is equal to ${varianceValue}`);
}

function std_dev(array_name) {
    for (var s = 0; s < array_name.length; s++) {
        sum += array_name[s];
        average = sum / array_name.length;
        dist = (array_name[s] - average) ** 2;
        dist_sum += dist;
        varianceValue = dist_sum / array_name.length;
        stdValue = Math.sqrt(varianceValue);
    }
    console.log(`The standard deviation of this array is equal to ${stdValue}`);
}