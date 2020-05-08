
//Metodo de objeto student que recibira como parametro la data de teachers 
student.orderFolioSchedule = function(teachers) {
    
    //Ciclo de teachers
    teachers.forEach( teacher => {
        
        //Ciclo de folios de horario de teacher
        for(let i = 0; i < teacher.folioSchedules.length; i++){

            //Condicional que evalua si la cantidad del folio horario es menor que la capacidad del folio horario, entonces se jecutara el codigo     
            if(teacher.folioSchedules[i].quantity < teacher.folioSchedules[i].capacity){
                
                //Buscar horario de estudiante utilizando la funcion filter 
                //Recibira la condicion de id folio horaio de estudiante tiene que ser igual a id folio horario de teacher  
                let time = this.times.filter( time => time.idTime === teacher.folioSchedules[i].time.idTime);
                
                //Variable boleana que se activara cuando la condicional que evalua la existencia del folio horario en la hora del estudiante se execute                 
                let folioActive = false;

                //Condicional que evaluara la existencia del folio horario en el horario del estudiante
                if( time[0].folioSchedule == null ){

                    //Activar variable bolean
                    folioActive = true;

                    //Sumar 1 a la cantidad del folio horario
                    teacher.folioSchedules[i].quantity += 1;

                    //Almacenar el folio horario en el horario del estudiante
                    time[0].folioSchedule = teacher.folioSchedules[i];
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