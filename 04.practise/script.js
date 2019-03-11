'use strict';

// NavBar dropdown
$('#navbarDropdownMenuLink').click(() => {
$('#navbarDropdownMenu').slideToggle();
})

//Footer

var today = new Date();
var year = today.getFullYear();

document.getElementById("js-current-year").innerHTML = year;

// BMI Calculator
function calculate (height, weight) {
var height=Number(document.getElementById("js-bmi-height").value);
var weight=Number(document.getElementById("js-bmi-weight").value);

var bmi = weight/((height/100)*(height/100));
bmi = Math.round(bmi,2);
console.log(bmi);


var result = document.getElementById("result")
    result.innerHTML="Your Body Mass Index is " + bmi.toFixed(2)
    if(bmi < 18.5){
        info.innerHTML=". It is considered underweight"
        $('#result').show();
    }
    else if(bmi >= 18.5 && bmi <= 25){
        info.innerHTML=". It is a healthy weight"
        $('#result').show();
    }
    else if(bmi > 25){
        info.innerHTML=". It is considered overweight"
        $('#result').show();
    }
    else if(isNaN(bmi)){
        $('#result').hide();
    }
}

// Facts // I GIVE UP

const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
      title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
      description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
      img: 'http://lorempixel.com/200/200/food'
    },
  ];

  // Ads

  $('#js-ad-close').click(() => {
    document.getElementById("js-ad").getAttribute("href");
    window.open(href, '_blank');
    console.log("href");
  });
