import React, { useEffect, useState } from 'react'
import './dues.css'
import EntityDues from './EntityDues'
import { databases } from '../AppWriteConfig/config'
import { Query } from 'appwrite';       
function Dues() {
    const[usersData,setUsersData]=useState();
    const [userStatus,setUserStatus]=useState();
    const [combinedData, setCombinedData] = useState([]);
    

    async function getDetails(){
      const responce=await databases.listDocuments('66f5750e00245ea988f8','66f57633002f27844d5b')
      setUsersData(responce.documents)

      
      
    } 
    async function getUserStatus() {
        const responce=await databases.listDocuments('66f5750e00245ea988f8','66f7a37700305e2f3a6c')
        setUserStatus(responce.documents)
       
    }
   
   

    useEffect(()=>{
     
        getDetails();
        getUserStatus();
      
    },[])
    useEffect(() => {
        if (usersData?.length > 0 && userStatus?.length > 0) {
            const mergedData = usersData.map(user => {
                const status = userStatus.find(status => status.userId === user.$id) || {}; // Match by user ID
                return {
                    ...user,
                    status: status.paid || false, // Default to false if no status found
                    bill:status.paid||false
                };
            });
            setCombinedData(mergedData);
        
        }
    }, [usersData, userStatus]);
   async function handlePaidStatus(user){
 
    try{
        const documentId = await getDocumentByUserId(user.$id); 
        if(documentId){
       const res=await databases.updateDocument(
        '66f5750e00245ea988f8',
        '66f7a37700305e2f3a6c',
        documentId,
        {paid:!user.status}

    )
     setCombinedData(prevData =>
        prevData.map(u =>
            u.$id === user.$id ? { ...u, status: !u.status } : u
        )
    );
    
}   
}
  
    catch(e){
        console.log("paidupdate"+e)
    }

    }
    async function getDocumentByUserId(userId) {
        try {
           
          const response = await databases.listDocuments(
            '66f5750e00245ea988f8',  // Your database ID
            '66f7a37700305e2f3a6c',  // Your collection ID
            [
              Query.equal('userId', userId)  // Filters by the userId field
            ]

          );
          return response.documents[0].$id; 
         
        } catch (error) {
          console.error('Error:', error);
        }
      }
    function handleBillStatus(){

    }
      
  return (
    <div>
       
        <div>
            <EntityDues users={combinedData} handleUserPaidStatus={handlePaidStatus} bill={handleBillStatus}></EntityDues>
        </div>
    </div>
  )
}

export default Dues