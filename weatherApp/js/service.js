app.service('DateService', function(){
  this.startDay = function() {
    date = new Date();  //Create date object
    addDay = 1;
    date.setDate(date.getDate() + addDay); //Set date to current date + one day ahead
    date.setHours(7, 0, 0, 0); // Set hour to start forecast
    return date;
  };
  this.endDay = function() { 
    date = new Date();
    addDay = 2;
    date.setDate(date.getDate() + addDay);
    date.setHours(7, 0, 0, 0);
    return date;
  };
});
