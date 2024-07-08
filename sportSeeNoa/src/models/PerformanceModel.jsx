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

        const { kind, data: sessions } = data;


        // transforme les données de performance pour inclure les etiquettes de type  kindTypeLabels
        this.sessions = sessions.map((entry) => {
            const type = kind[entry.kind]; // recupere le type de l'etiquette en question pas encore traduite
            // return { ...entry, kind: PerformanceModel.kindTypeLabels[type] }; // Crée une nouvelle entrée avec l'étiquette du type traduite par  kindTypeLabels
            return { ...entry, kind: PerformanceModel.kindTypeLabels[type] }; 
        });
    }
}

export default PerformanceModel;
