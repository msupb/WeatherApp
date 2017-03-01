app.service('DateService', function(){
  this.startDay = function() {
    date = new Date();  //skapar nytt datumobjekt
    addDay = 1;
    date.setDate(date.getDate() + addDay); //sätter datumet till dagens datum + ett dygn framåt
    date.setHours(7, 0, 0, 0); // sätter vilken timma på dygnet datumobjektet ska börja på
    return date;
  };
  this.endDay = function() { //samma funktionalitet som ovan, sätter tiden två dygn framåt
    date = new Date();
    addDay = 2;
    date.setDate(date.getDate() + addDay);
    date.setHours(7, 0, 0, 0);
    return date;
  };
});
