

class ActivityModel {

    constructor(data) {
        if (!data.sessions || !Array.isArray(data.sessions)) {
            throw new Error('Data format incorrect');
        }

        this.sessions = data.sessions.map((session , index) => ({
            name: (index + 1).toString(),
            kilogram: session.kilogram,
            calories: session.calories,

        }));
    }
}

export default ActivityModel;
