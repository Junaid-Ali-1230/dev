const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)   // this usecase will give empty value

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stopping sending form values to URL upon sumitting

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //sjow the result
    results.innerHTML = `<span>${bmi}</span>`;

    // Creating an element to show the message
    const h2 = document.createElement('h2');
    let text = '';

    if (bmi < 18.6) {
      text = 'You are underWeight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      text = 'You are Healthy';
    } else {
      text = 'You are underWeight';
    }
    h2.textContent = text;
    document.querySelector('#weight-guide').appendChild(h2);
  }
});
