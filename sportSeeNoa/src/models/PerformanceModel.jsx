class PerformanceModel {


    // definit les ettiquette de performance (par la traduction)
    static kindTypeLabels = {

        intensity: "Intensité",
        speed: "Vitesse",
        strength: "Force",
        endurance: "Endurance",
        energy: "Energie",
        cardio: "Cardio",

    }


    constructor(data) {

        if (!data.data || !Array.isArray(data.data)) {
            throw new Error('Data format incorrect');
        }


        // // trouve les données correspondant à l'id en question
        // const userPerformance = data.data.find(user => user.userId === parseInt(id));

        // if (!userPerformance) {
        //     throw new Error('Données de performance non trouvées');
        // }

        // destructuration des données pour les recuperer
        // const { kind, data: performanceEntries } = userPerformance;
        const { kind, data: sessions } = data;


        // transforme les données de performance pour inclure les etiquettes de type  kindTypeLabels
        this.sessions = sessions.map((entry) => {
            const type = kind[entry.kind]; // recupere le type de l'etiquette en question pas encore traduite
            return { ...entry, kind: PerformanceModel.kindTypeLabels[type] }; // Crée une nouvelle entrée avec l'étiquette du type traduite par  kindTypeLabels
        });
    }
}

export default PerformanceModel;
