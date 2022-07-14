document.write("Q1<br>")
var now = new Date();
document.write(now)

// document.write("<br>Q2<br>")
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// document.write("Current Month " + monthNames[now.getMonth()]);
// document.write("<br>Q3<br>")
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// document.write(days[now.getDay()])

// document.write("<br>Q4<br>")
// daya = now.getDay()
// var fun=6;
// var fun2 = 0;
// if(fun===daya || fun2===daya)
// {
//     document.write("Its Fun Day")

// }
// else{
//     document.write("Its Week day :(")
// }
// document.write("<br>Q5<br>")
// var dayy = now.getDate();
// var targetedDay =15;
// if(targetedDay > dayy)
// {
//     document.write("First fifteen days of the month")
// }
// else
// {
//     document.write("Last days of the month")
// }

// document.write("<br>Q6<br>")
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)



// document.write("<br>Q7<br>")
// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// document.write(c)
// if (c <= "12:" || c <= "25:" )
// {
//     document.write("Its PM")
// }
// else{
//     document.write("Its AM")
// }


// document.write("<br>Q8<br>")
// var latter = new Date();
// latter.setMonth(11)
// latter.setDate(31)
// document.write(latter)


// document.write("<br>Q9<br>")
// var ago = moment.duration(moment().diff("2015-06-18")).humanize() + " ago";

// document.write(ago);

// document.write("<br>Q11<br>")
// var preDate = new Date();
// preDate.setHours(4)
// document.write(preDate)

// document.write("<br>Q12<br>")
// var latdate = new Date();
// latdate.setFullYear(1922)
// document.write(latdate)



// document.write("<br>Q13<br>")
// var age = +prompt("Enter Your Age")
// curYear = now.getFullYear(); 
// diffr = curYear - age;
// document.write("Your Age is: "+age+"<br>")
// document.write("Your birth year is: "+diffr)