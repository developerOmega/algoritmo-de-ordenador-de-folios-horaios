
//Metodo de objeto student que recibira como parametro la data de teachers 
student.orderFolioSchedule = function(teachers) {

    //Ciclo de teachers
    teachers.forEach( teacher => {
        
        //Ciclo de folios de horario de teacher
        for(let i = 0; i < teacher.folioSchedules.length; i++){
            
            //Condicional que evalua si la cantidad del folio horario es menor que la capacidad del folio horario, entonces se jecutara el codigo 
            if(teacher.folioSchedules[i].quantity < teacher.folioSchedules[i].capacity){
                
                //Varible que sera tomada como el contador del while
                let e = 0;
                
                //Variable boleana que se activara cuando la condicional que evalua la existencia del folio horario en la hora del estudiante se execute 
                let folioActive = false;
    
                //While que se ejecutara mientras la var "e" sea menor a la cantidad de horas del estudiante 
                while(e < this.times.length) {
                    
                    //Condicional que compara el id time del estudiante y el id time del folio horario
                    if(this.times[e].idTime == teacher.folioSchedules[i].time.idTime){

                        //Condicional que evaluara la existencia del folio horario en el horario del estudiante
                        if( this.times[e].folioSchedule == null ){

                            //Activar variable bolean
                            folioActive = true;

                            //Sumar 1 a la cantidad del folio horario
                            teacher.folioSchedules[i].quantity += 1;

                            //Almacenar el folio horario en el horario del estudiante
                            this.times[e].folioSchedule = teacher.folioSchedules[i];
                        }

                        //Romper ciclo de horarios de estudiante
                        break;                    
                    }
                    
                    //Sumatoria de variable e
                    e++;
    
                }
    
                //Condiconal que evalua la activacion de la variable boleana
                if( folioActive ){
                    break;
                }
    
            }
            else {
                //En caso de que la cantidad de folio horario no sea menor a la capacidad se ejecutara la sentencia continue
                continue;
            }
        }
    
    } );
}