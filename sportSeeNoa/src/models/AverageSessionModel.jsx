// AverageSessionModel.jsx

class AverageSessionModel {
    static dayMapping = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
    };

    constructor(data) {
        if (!data.sessions || !Array.isArray(data.sessions)) {
            throw new Error('Data format incorrect');
        }

        this.sessions = data.sessions.map((session) => ({
            ...session,
            day: AverageSessionModel.dayMapping[session.day],
        }));
    }
}

export default AverageSessionModel;
