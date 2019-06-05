var days_of_a_year = (function(){
  return function(year){
    try {
      if ((typeof(year) === "string") || (year > 2019) ||  (year % 1 !== 0) ) {
        throw new Error();
      }
      let start = new Date(year,0, 0), end = new Date(year,11,31), diff = end-start, days = diff/(1000*60*60*24);
      return days;
      }
      catch(e ){
        console.log("Год в нечисловом формате, месяц больше 12 или не целое число");
        }
  };
  })();
  
  console.log(days_of_a_year(202.2));//365
  console.log(days_of_a_year(2019));//366























// function daysInMonth(month,year) {
//   try {
//     if ((typeof(year) === "string") || (month > 12) ||  (month % 1 !== 0) ) {
//       throw new SyntaxError('Emtpy array');
//     }
    
//   monthNum =  new Date(Date.parse(month +" 1,"+year)).getMonth()+1
//     return new Date(year, monthNum, 0).getDate();
//     }

//     catch(e ){
//       console.log("Год в нечисловом формате, месяц больше 12 или не целое число");
//       }
// }

// daysInYear(2019); // 365
// daysInYear('2019'); // exception
// daysInYear(2020); // 366
// daysInYear(2020.2); // exception
// daysInYear(2100); // 365
// daysInYear({year: 2100}); // exception