// import React, { useState, useEffect } from 'react';

// const API = 'https://dummyjson.com/comments';

// const API2 = 'https://dummyjson.com/quotes'; 

// const API3 = 'https://dummyjson.com/todos';

// const API4 = 'https://dummyjson.com/carts';

//  const MovieApi = () => {
//   const [comments, setComments] = useState([]);
//   const [filterId, setFilterId] = useState('');
//   const [filteredComments, setFilteredComments] = useState();
 
// //comments APi
//   const fetchComments = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data.comments);
//       if (data.comments.length > 0) {
//         setComments(data.comments);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
// //Quotes APi
//   const fetchQuotes = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
      
//     } catch (error) {
//       console.error(error);
//     }
//   };
//    //TODOS API
//    const fetchToDos = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
      
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //Carts
//   const fetchCarts = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
      
//     } catch (error) {
//       console.error(error);
//     };
//   }
//  //use effect

//   useEffect(() => {
//     fetchComments(API);
//     fetchQuotes(API2);
//     fetchToDos(API3);
//     fetchCarts(API4);

//   }, []);

//   const handleFilterChange = (e) => {
//     setFilterId(e.target.value);
//   };

//   useEffect(() => {
//     if (filterId) {
//       const comment = comments.filter((com) => com?.id === parseInt(filterId));
//       setFilteredComments(comment);
//     } else {
//       setFilteredComments(null);
//     }
//   }, [filterId, comments]);

//   return (
//     <div>
      
//   <div>
//   <div class="row g-3 container-fluid">
//   <div class="col-auto">
//     <h3>Enter ID</h3>
//   <label htmlfor="filterid" class="col-form-label "></label>
//   </div>
//   <div class="col-auto">

    // <input class="form-controlr" aria-describedby="passwordHelpInline"
    // type="text"
    // id="filterId"
    // value={filterId}
    // onChange={handleFilterChange}/>

//   </div>
// </div>
// </div>
//       {filteredComments?.length > 0 ? (
//         <div>
          
//           <table className='table table-dark table-striped'>
            
//             <thead>
//           <tr>
//                <h2>API DATA</h2>
//           </tr>
//           </thead>
//            <tbody>
//             <tr>
//              <td><h3 className=''>UserID</h3> </td>
//            <td><p>ID: {filteredComments[0]?.id}</p></td>
//             </tr>
//             <tr>
//               <td><h3>Body</h3></td>
//           <td><p>Body: {filteredComments[0]?.body}</p></td>
//           </tr>
//           <tr>
//           <td><h3>User Details</h3></td>
          
//           <td><p>ID: {filteredComments[0]?.user?.id}</p>
//           <p>Username: {filteredComments[0]?.user?.username}</p></td>
          
//           </tr>
          
//           </tbody>
//           </table>
//         </div>
//       ) : (
//         <p>No user find:{filterId}</p>
//       )}
      
//     </div>
//   );
//       }

// export default MovieApi;