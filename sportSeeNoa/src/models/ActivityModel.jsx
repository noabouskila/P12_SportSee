

class ActivityModel {

    constructor(data) {
        if (!data.sessions || !Array.isArray(data.sessions)) {
            console.log(data)
            throw new Error('Data formatttt incorrect');
           
        }

       
        this.sessions = data.sessions.map((session , index) => ({
            name: (index + 1).toString(),
            kilogram: session.kilogram,
            calories: session.calories,

        }));
       
    }
}

export default ActivityModel;




