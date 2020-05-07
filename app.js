student.orderFolioSchedule = function(teachers) {
    teachers.forEach( teacher => {
    
        for(let i = 0; i < teacher.folioSchedules.length; i++){
    
            if(teacher.folioSchedules[i].quantity < teacher.folioSchedules[i].capacity){
    
                let e = 0;
                let folioActive = false;
    
                while(e < this.times.length) {
                    
                    if(this.times[e].idTime == teacher.folioSchedules[i].time.idTime){
                        if( this.times[e].folioSchedule == null ){
                            folioActive = true;
                            teacher.folioSchedules[i].quantity += 1;
                            this.times[e].folioSchedule = teacher.folioSchedules[i];
                        }
                        break;                    
                    }
    
                    e++;
    
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