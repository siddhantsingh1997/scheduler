import moment from "moment";

const Validate={
    
    PastDate(value) {
        const currentDate = new Date(); 
        const selectedDate = new Date(value); 
        const same =function isSameDay(selectedDate, currentDate) {
            return selectedDate.getFullYear() === currentDate.getFullYear() &&
            selectedDate.getDate() === currentDate.getDate() &&
            selectedDate.getMonth() === currentDate.getMonth();
          }
        if ( selectedDate >= currentDate  ) {
          
            return false;
           
          } else {
            
              if(!same(selectedDate, currentDate))
              return true;
              else
              return false;
          }
    },
     timeinBetween(currentStartTime,currentEndTime,compareTime){

        const comp =  function toMins(time) {
            var parts = time.split(':');
            return (+parts[0] * 60 + +parts[1]) || 0;
          }
          
        var f = comp(currentStartTime),
        t = comp(currentEndTime),
        ft, tt;
       
      for (var i = 0; i < compareTime.length; i++) {
        ft = comp( compareTime[i].start_time); 
        tt = comp(compareTime[i].end_time);
        if ((f >= ft && f <= tt) || (t >= ft && t <= tt) || (f<ft && t>tt) ) {
          return false;
        }
      
      }
      return true;
        
        
     }

}

export default Validate;