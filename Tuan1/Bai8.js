function printForecast(arr) {
    let forecastStr = '';
  
    for (let i = 0; i < arr.length; i++) {
      forecastStr += `===>  ${arr[i]}°C in ${i + 1} days `;
    }

    console.log(forecastStr + '   ');
  }
  
  // Test data
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
  
  // Test the function 
  printForecast(data1);
  printForecast(data2);
  