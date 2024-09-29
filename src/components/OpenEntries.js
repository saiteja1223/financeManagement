import React, { useContext, useEffect, useState } from 'react';
import './openEntries.css'; // Importing the CSS file
import { useNavigate, useParams } from 'react-router-dom';
import { databases } from '../AppWriteConfig/config';
import { EntityProvider } from '../context/EntityContext';

function OpenEntries() {
  // const{selectedEntity}=useContext(EntityProvider);
  const {id}=useParams();
 // console.log("id"+id)
  const navigate=useNavigate();
  const [data, setData] = useState({
    name: '',
    amount: '',
    interest: '',
    date: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };


  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try{
      const dataToSend = {
        ...data,
        amount: parseInt(data.amount, 10),
        interest: parseInt(data.interest, 10),
    };
     if(!id){
      const responce=await databases.createDocument(
        '66f5750e00245ea988f8', 
        '66f57633002f27844d5b', 
        'unique()', // Use `unique()` to auto-generate a document ID
         dataToSend
      )
      try{
      const createdEntityId = responce.$id; 
      const dueData=await databases.createDocument(
        '66f5750e00245ea988f8', 
        '66f7a37700305e2f3a6c',
        'unique()',
        {
          userId:createdEntityId,
          paid:false
        }
      )
     
    }
      catch(e){
        console.log(e);
      }
    }

      else{
        const updatedDocument=await databases.updateDocument(
          '66f5750e00245ea988f8', 
          '66f57633002f27844d5b',
          id,
          dataToSend
        )
      }
    } catch(e){
      console.log(e);
    }

    // Logs the entire state object
    // Reset the form
    setData({
      name: '',
      amount: '',
      interest: '',
      date: ''
    });
    navigate('/')
  };

  const handleCancel = () => {
    // Reset the form
    setData({
      name: '',
      amount: '',
      interest: '',
      date: ''
    });
    navigate('/')
  };
  async function getdata() {
    
  
  if(id){
    try {
      const response = await databases.getDocument(
        '66f5750e00245ea988f8',    // Replace with your database ID
        '66f57633002f27844d5b',  // Replace with your collection ID
        id                     // Document ID (from useParams)
      );
     // setEntry(response); // Set the document data
     setData({
      name:response.name,
      amount:response.amount,
      interest:response.interest,
      date: response.data
    });
     console.log(response)
    } catch (error) {
      console.error('Error fetching document:', error);
    }

  }
  
}
async function handeleDelete(){
  try{
  const responce=await databases.deleteDocument(
    '66f5750e00245ea988f8', 
    '66f57633002f27844d5b', 
    id

  )
  navigate('/')
}
  catch(e){
    console.log(e);
  }
}
  useEffect(() => {
   getdata();
}, []);


  return (
    <div className='formContainer'>
      <h2 className='formTitle'>Add Entry</h2> {id&&<button className='deletebtn' onClick={handeleDelete}>Delete</button>}
      <form className='entryForm' onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='amount'>Amount:</label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={data.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='interest'>Interest (%):</label>
          <input
            type='number'
            id='interest'
            name='interest'
            value={data.interest}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            name='date'
            value={data.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='buttonGroup'>
          <button type='submit' className='submitButton'>{id?'Update':'Submit'}</button>
          <button type='button' className='cancelButton' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default OpenEntries;
