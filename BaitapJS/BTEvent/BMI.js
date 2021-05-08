let button = document.getElementById('button');
button.addEventListener('click',checkbmi);
function checkbmi(){
   let weight = parseFloat(document.getElementById('weight').value);
   let height = parseFloat(document.getElementById('height').value);
   let bmi = (weight/(height*height));
   // alert(bmi);
   if (weight == height)
      document.getElementById('ketqua').innerText= ("Unvalid");
   if (bmi < 18)
      document.getElementById('ketqua').innerText=("Underweight");
   else if (bmi < 25.0)
      document.getElementById('ketqua').innerText=("Normal");
   else if (bmi < 30.0)
      document.getElementById('ketqua').innerText=("Overweight");
   else if(bmi > 10 && bmi ==30)
      document.getElementById('ketqua').innerText=("Obese");
   else
      document.getElementById('ketqua').innerText= ("Unvalid");

}
