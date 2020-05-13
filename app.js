// Target Form Element
const form = document.querySelector('#loan-form').addEventListener('submit', function (e) {
  document.querySelector('#loading').style.display = 'block';
  document.querySelector('#results').style.display = 'none';

  setTimeout(loanCalculator, 1200);

  e.preventDefault();
});

// Loan claculator calculation
function loanCalculator(e) {
  // Select Input Target
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  // Select Output Target
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Select Value and Calculate
  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayment = parseFloat(years.value) * 12;

  // Monthly Payment Calculate
  const x = Math.pow(1 + calculateInterest, calculatePayment);
  const monthly = (principal * x * calculateInterest) / (x - 1);

  // Assign Calculate Value
  if (isFinite(monthly.toFixed(4)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayment).toFixed(2);
    totalInterest.value = ((monthly * calculatePayment) - principal).toFixed(2);

    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
  } else {
    errorCalculate('Please Check Your Information!');
    document.querySelector('#loading').style.display = 'none';
  }
}

// Error Calculate
function errorCalculate(error) {
  // Create Error Div
  const errorDiv = document.createElement('div');
  // Add Class
  errorDiv.className = 'alert alert-warning';
  // Add Text Content
  errorDiv.appendChild(document.createTextNode(error));

  // Target Two Element For Include error
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Include ErrorDiv in Card Before Heading
  card.insertBefore(errorDiv, heading);

  // SetTime For ErrorDiv
  setTimeout(errorTime, 2000);
}

// Error Thime Function
function errorTime() {
  document.querySelector('.alert').remove();
}
