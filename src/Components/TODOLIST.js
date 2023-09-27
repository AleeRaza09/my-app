import React, { useState }  from 'react';


function TODOLIST(){

  const [activity,setAcitivity] = useState("");
  const [listdata,setListData] = useState("");
  const Addactivity = () => {
    // setListData(...listdata,activity); 
    // console.log(listdata);
    setListData((listdata)=>{
      const updatelist = [...listdata,activity]; 
      console.log(updatelist);
      setAcitivity("");
      return updatelist
      
        
    })
  }
  function removeactivity(i){
    const updatedlist= listdata.filter((elem,id)=>{
      return i!= id;
    })
      setListData(updatedlist); 
     
    }
  return (
   <>
   
     <div className="header">
     
       <div ><h1>TODOLIST</h1></div>   

        <input type='text' placeholder='Add Acitivity' value={activity} 
        onChange={(e)=>setAcitivity(e.target.value)}></input>

         <button onClick={Addactivity} >Add</button>
         <h1>Here your List</h1>
      
            { listdata!=[] && listdata.map((data,i)=>{

              
              return(
                    <p key={i} 
                            > 
                    <div className='listdata'>{data}</div>
                    <div> <button className='btn-position' onClick={()=>removeactivity(i)}>Remove(-)</button></div>
                    
                    </p>

                                    
                       

          )
            } )}
   
     </div>
    

   </>
     
  )}

export default TODOLIST