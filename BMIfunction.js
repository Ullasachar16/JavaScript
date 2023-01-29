function calculateBMI(weight, height) {
    var bmi=weight / Math.pow(height,2);
    return Math.round(bmi);
  }
  calculateBMI();
  