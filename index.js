
var generate = document.querySelector('.btn');

generate.addEventListener('click',

function Calculate(){

/****** get data from the froms ******/

var dateCal = document.getElementById('date').value;
var monthCal = document.getElementById('month').value;
var yearCal = document.getElementById('year').value;

/********** Get date from the system*/
var currentDate = new Date();
var systemCurrentDate = currentDate.getDate();
var systemCurrentMonth = 1 + currentDate.getMonth();
var systemCurrentYear = currentDate.getFullYear();

/* Define the number for months avaliable and how they End */

var months = [31,28,31,30,31,30,31,31,30,3,30,31];

/******** Calulate the current age using the data avaliable */

/***** Date Calculation ******/
if(dateCal > systemCurrentDate && monthCal <= 12 && systemCurrentYear > yearCal && dateCal <=31 ){
    
    systemCurrentDate = systemCurrentDate + months[systemCurrentMonth -1];
}else{
    return(
         document.getElementById('error1').innerHTML= 'This field is Required',
         document.getElementById('error2').innerHTML= 'This field is Required',
         document.getElementById('error3').innerHTML= 'This field is Required',
         document.getElementById('date').classList.add('error_message'),
         document.getElementById('month').classList.add('error_message'),
         document.getElementById('year').classList.add('error_message'),
         document.getElementById('l1').classList.add('error_message'),
         document.getElementById('l2').classList.add('error_message'),
         document.getElementById('l3').classList.add('error_message')
         );

}
/*****Calculate Months******/
if(monthCal > systemCurrentMonth){
    systemCurrentMonth = systemCurrentMonth + 12;
    systemCurrentYear = systemCurrentYear - 1;
    
}
document.getElementById('error1').innerHTML= '',
document.getElementById('error2').innerHTML= '',
document.getElementById('error3').innerHTML= '',
document.getElementById('date').classList.remove('error_message'),
         document.getElementById('month').classList.remove('error_message'),
         document.getElementById('year').classList.remove('error_message'),
         document.getElementById('l1').classList.remove('error_message'),
         document.getElementById('l2').classList.remove('error_message'),
         document.getElementById('l3').classList.remove('error_message')

var requestDate = systemCurrentDate - dateCal;
var requestMonth = systemCurrentMonth - monthCal;
var requestYear = systemCurrentYear - yearCal; 

document.getElementById('Answer1.1').innerHTML = requestYear;
document.getElementById('Answer1.2').innerHTML = requestMonth;
document.getElementById('Answer1.3').innerHTML = requestDate ;


}
);

 
