function calculateBMI(weight, height) {
    var bmi=weight / Math.pow(height,2);
    return Math.round(bmi);
  }
  var bmii=calculateBMI(65,1.8); 
  console.log(bmii);
  