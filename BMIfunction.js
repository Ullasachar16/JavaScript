function calculateBMI(weight, height) {
    return weight / (height * height);
  }
  
  const weight = 75; // in kilograms
  const height = 1.8; // in meters
  
  const bmi = calculateBMI(weight, height);
  console.log(bmi);
  