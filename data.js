times = [
    {
        idTime: 1,
        timesInit: '7:00',
        timesEnd: '8:00',
    },
    {
        idTime: 2,
        timesInit: '8:00' ,
        timesEnd: '9:00',
    },
    {
        idTime: 3,
        timesInit: '9:00',
        timesEnd: '10:00',
    },
    {
        idTime: 4,
        timesInit: '10:00',
        timesEnd: '11:00',
    },
    {
        idTime: 5,
        timesInit:'11:00',
        timesEnd: '12:00',
    },
    {
        idTime: 6,
        timesInit: '12:00',
        timesEnd: '13:00',
    },
    {
        idTime: 7,
        timesInit: '13:00',
        timesEnd: '14:00',
    },
    {
        idTime: 8,
        timesInit: '14:00',
        timesEnd: '15:00',
    },
    {
        idTime: 9,
        timesInit: '15:00',
        timesEnd: '16:00',
    },
    {
        idTime: 10,
        timesInit: '16:00',
        timesEnd: '17:00',
    },
    {
        idTime: 11,
        timesInit: '17:00',
        timesEnd: '18:00',
    },
    {
        idTime: 12,
        timesInit: '18:00',
        timesEnd: '19:00',
    },
    {
        idTime: 13,
        timesInit: '19:00',
        timesEnd: '20:00',
    },
    {
        idTime: 14,
        timesInit: '20:00',
        timesEnd: '21:00',
    }
]

teachers = [
    {
        idTeacher: 1,
        name: 'Javier',
        folioSchedules: [
            {
                idFolioSchedule: 1,
                time: times[0],
                capacity: 30,
                quantity: 20
            },
            {
                idFolioSchedule: 2,
                time: times[1],
                capacity: 30,
                quantity: 0
            },
            {
                idFolioSchedule: 3,
                time: times[3],
                capacity: 30,
                quantity: 0
            }
        ]
    },
    {
        idTeacher: 2,
        name: 'Erika',
        folioSchedules: [
            {
                idFolioSchedule: 4,
                time: times[1],
                capacity: 30,
                quantity: 30 
            },
            {
                idFolioSchedule: 5,
                time: times[0],
                capacity: 30,
                quantity: 22
            },
            {
                idFolioSchedule: 6,
                time: times[5],
                capacity: 30,
                quantity: 0
            }
        ]
    },
    {
        idTeacher: 3,
        name: 'Victor',
        folioSchedules: [
            {
                idFolioSchedule: 7,
                time: times[1],
                capacity: 30,
                quantity: 30 
            },
            {
                idFolioSchedule: 8,
                time: times[2],
                capacity: 30,
                quantity: 25
            },
            {
                idFolioSchedule: 9,
                time: times[3],
                capacity: 30,
                quantity: 2
            }
        ]
    },
    {
        idTeacher: 4,
        name: 'Ignacio',
        folioSchedules: [
            {
                idFolioSchedule: 10,
                time: times[2],
                capacity: 30,
                quantity: 25
            },
            {
                idFolioSchedule: 11,
                time: times[3],
                capacity: 30,
                quantity: 10
            },
            {
                idFolioSchedule: 12,
                time: times[4],
                capacity: 30,
                quantity: 1
            }
        ]
    },
    {
        idTeacher: 5,
        name: 'Raquel',
        folioSchedules: [
            {
                idFolioSchedule: 13,
                time: times[4],
                capacity: 30,
                quantity: 20
            },
            {
                idFolioSchedule: 14,
                time: times[2],
                capacity: 30,
                quantity: 15
            },
            {
                idFolioSchedule: 15,
                time: times[5],
                capacity: 30,
                quantity: 6
            }
        ]
    },
    {
        idTeacher: 6,
        name: 'Fernando',
        folioSchedules: [
            {
                idFolioSchedule: 16,
                time: times[4],
                capacity: 30,
                quantity: 30
            },
            {
                idFolioSchedule: 17,
                time: times[5],
                capacity: 30,
                quantity: 18
            },
            {
                idFolioSchedule: 18,
                time: times[6],
                capacity: 30,
                quantity: 2
            }
        ]
    }
]

teachers2 = [
    {
        idTeacher: 1,
        name: 'Aldo',
        folioSchedules: [
            {
                idFolioSchedule: 1,
                time: times[0],
                capacity: 30,
                quantity: 30
            },
            {
                idFolioSchedule: 2,
                time: times[3],
                capacity: 30,
                quantity: 10
            },
            {
                idFolioSchedule: 3,
                time: times[4],
                capacity: 30,
                quantity: 1
            }
        ]
    },
    {
        idTeacher: 2,
        name: 'Corpus',
        folioSchedules: [
            {
                idFolioSchedule: 4,
                time: times[0],
                capacity: 30,
                quantity: 20 
            },
            {
                idFolioSchedule: 5,
                time: times[1],
                capacity: 30,
                quantity: 2
            },
            {
                idFolioSchedule: 6,
                time: times[2],
                capacity: 30,
                quantity: 0
            }
        ]
    },
    {
        idTeacher: 3,
        name: 'Eduardo',
        folioSchedules: [
            {
                idFolioSchedule: 7,
                time: times[1],
                capacity: 30,
                quantity: 20 
            },
            {
                idFolioSchedule: 8,
                time: times[2],
                capacity: 30,
                quantity: 12
            },
            {
                idFolioSchedule: 9,
                time: times[3],
                capacity: 30,
                quantity: 2
            }
        ]
    },
    {
        idTeacher: 4,
        name: 'Enrrique',
        folioSchedules: [
            {
                idFolioSchedule: 10,
                time: times[1],
                capacity: 30,
                quantity: 25
            },
            {
                idFolioSchedule: 11,
                time: times[3],
                capacity: 30,
                quantity: 10
            },
            {
                idFolioSchedule: 12,
                time: times[5],
                capacity: 30,
                quantity: 1
            }
        ]
    },
    {
        idTeacher: 5,
        name: 'Miriam',
        folioSchedules: [
            {
                idFolioSchedule: 13,
                time: times[4],
                capacity: 30,
                quantity: 30
            },
            {
                idFolioSchedule: 14,
                time: times[6],
                capacity: 30,
                quantity: 15
            },
            {
                idFolioSchedule: 15,
                time: times[7],
                capacity: 30,
                quantity: 6
            }
        ]
    },
    {
        idTeacher: 6,
        name: 'Fernando',
        folioSchedules: [
            {
                idFolioSchedule: 16,
                time: times[5],
                capacity: 30,
                quantity: 30
            },
            {
                idFolioSchedule: 17,
                time: times[6],
                capacity: 30,
                quantity: 18
            },
            {
                idFolioSchedule: 18,
                time: times[7],
                capacity: 30,
                quantity: 2
            }
        ]
    }
]

studentTimes = [
    {
        idTime: 1,
        timesInit: '7:00',
        timesEnd: '8:00',
    },
    {
        idTime: 2,
        timesInit: '8:00' ,
        timesEnd: '9:00',
    },
    {
        idTime: 3,
        timesInit: '9:00',
        timesEnd: '10:00',
    },
    {
        idTime: 4,
        timesInit: '10:00',
        timesEnd: '11:00',
    },
    {
        idTime: 5,
        timesInit:'11:00',
        timesEnd: '12:00',
    },
    {
        idTime: 6,
        timesInit: '12:00',
        timesEnd: '13:00',
    },
    {
        idTime: 7,
        timesInit: '13:00',
        timesEnd: '14:00',
    },
    {
        idTime: 8,
        timesInit: '14:00',
        timesEnd: '15:00',
    },
    {
        idTime: 9,
        timesInit: '15:00',
        timesEnd: '16:00',
    },
    {
        idTime: 10,
        timesInit: '16:00',
        timesEnd: '17:00',
    },
    {
        idTime: 11,
        timesInit: '17:00',
        timesEnd: '18:00',
    },
    {
        idTime: 12,
        timesInit: '18:00',
        timesEnd: '19:00',
    },
    {
        idTime: 13,
        timesInit: '19:00',
        timesEnd: '20:00',
    },
    {
        idTime: 14,
        timesInit: '20:00',
        timesEnd: '21:00',
    }
]
studentTimes.forEach( time => time.folioSchedule = null );

student = {
    id: 1,
    name: 'Alexander',
    times: studentTimes
}
