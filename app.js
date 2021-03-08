// Bai 1
document.querySelector('#bai1 button').addEventListener('click', (e) => {
  e.preventDefault();
  let sum = 0;

  document.querySelectorAll('#bai1 input').forEach(input => {sum += parseFloat(input.value);});

  document.querySelector('#bai1 h4').innerHTML = `Điểm trung bình: ${(sum/3).toFixed(2)}`;
})

// Bai 2
document.querySelector('#bai2 button').addEventListener('click', (e) => {
  e.preventDefault();
  let sum = 0;

  const celcius = document.querySelector('#bai2 input').value
  const fahrenheit = 9/5 * celcius + 32;

  document.querySelector('#bai2 h4').innerHTML = `Độ F: ${fahrenheit}`;
})

// Bai 3
document.querySelector('#bai3-4 button').addEventListener('click', (e) => {
  e.preventDefault();

  const radius = parseFloat(document.querySelector('#bai3-4 input').value);
  const perimeter = (2 * radius * Math.PI).toFixed(2);
  const acreage = (Math.pow(radius, 2) * Math.PI).toFixed(2);

  const h4 = document.querySelectorAll('#bai3-4 h4');
  h4[0].innerHTML = `Chu vi: ${perimeter}`;
  h4[1].innerHTML = `Diện tích: ${acreage}`;
})
