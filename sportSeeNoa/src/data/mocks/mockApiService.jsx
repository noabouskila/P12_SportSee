
// import { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";

// export const fetchUserMainData = async(userId) =>{

//     const {id} = useParams();
//     const [userData , setUserData ] = useState(null)
   

//     useEffect(()=>{
//         async function fetchData(){
//             try{
//                 const response = await fetch(`http://localhost:3000/user/${userId}/`)
//                 const userData = await response.json()

//                 if (!response.ok) {
//                     throw new Error('Erreur lors du chargement des données');
//                   }

//                 setUserData(userData)

//             }catch(error){
//                 console.error("Erreur lors de la récupération des données : ", error);
//             }
//         }
//         fetchData()
//     },[id])
    
  


    
// }