student.orderFolioSchedule = function(teachers) {
    teachers.forEach( teacher => {
    
        for(let i = 0; i < teacher.folioSchedules.length; i++){
    
            if(teacher.folioSchedules[i].quantity < teacher.folioSchedules[i].capacity){
    
                let time = this.times.filter( time => time.idTime === teacher.folioSchedules[i].time.idTime);
                let folioActive = false;

                if( time[0].folioSchedule == null ){
                    folioActive = true;
                    teacher.folioSchedules[i].quantity += 1;
                    time[0].folioSchedule = teacher.folioSchedules[i];
                }   
    
                if( folioActive ){
                    break;
                }
    
            }
            else {
                continue;
            }
        }
    
    } );
}