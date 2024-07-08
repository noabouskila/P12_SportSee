import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PerformanceModel from '../models/PerformanceModel';


function UsePerformanceApi() {

    const {id} = useParams();
    const [performanceData , setPerformanceData ] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`http://localhost:3000/user/${id}/performance`)

                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }

                const data = await response.json()
                console.log('Données reçues de l\'API :', data);  
              

                const model = new PerformanceModel(data.data);
                setPerformanceData(model.sessions);
                

            } catch (error) {
                setError(error)
                console.error("Erreur lors de la récupération des données : ", error);
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[id])
    
    
    return { performanceData ,  loading , error}
}

export default UsePerformanceApi;

