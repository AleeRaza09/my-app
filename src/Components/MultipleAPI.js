// import React, { useState } from 'react';

// const API = 'https://dummyjson.com/comments';
// const API2 = 'https://dummyjson.com/quotes';
// const API3 = 'https://dummyjson.com/todos';

// function MultipleAPI() {
//   const [comments, setComments] = useState([]);
//   const [quotes, setQuotes] = useState([]);
//   const [todos, setToDos] = useState([]);
//   const [filter, setFilter] = useState(null);

//   const filteredComments = comments?.filter(
//     (comment) => comment.id === parseInt(filter)
//   );

//   const filteredQuotes = quotes?.filter(
//     (quote) => quote?.id === parseInt(filter)
//   );

//   const filteredTodos = todos?.filter((todo) => todo.id === parseInt(filter));
//   // Function to fetch data from the Comments API
//   const fetchComments = async () => {
//     try {
//       const res = await fetch(API);
//       const data = await res.json();
//       console.log(data.comments);
//       if (data.comments.length > 0) {
//         setComments(data.comments);
//         setQuotes(null);
//         setToDos(null);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to fetch data from the Quotes API
//   const fetchQuotes = async () => {
//     try {
//       const res = await fetch(API2);
//       const data = await res.json();
//       if (data.quotes.length > 0) {
//         setQuotes(data.quotes);
//         setComments(null);
//         setToDos(null);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Function to fetch data from the TODOS API
//   const fetchToDos = async () => {
//     // window.location.reload();
//     try {
//       const res = await fetch(API3);
//       const data = await res.json();
//       if (data.todos.length > 0) {
//         setToDos(data.todos);
//         setComments(null);
//         setQuotes(null);
//       }
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-sm-4">
//               <table className='btns'>
//                 <tr>
//                   <h5>Display Data</h5>
//                   <div>
//                     <td>
//                       <button
//                         className="btn btn-primary"
//                         onClick={fetchComments}
//                       >
//                         Comments API
//                       </button>
//                     </td>
//                   </div>
//                   <div>
//                     <td>
//                       <button className="btn btn-primary" onClick={fetchQuotes}>
//                         Quotes API
//                       </button>
//                     </td>
//                   </div>
//                   <div>
//                     <td>
//                       <button className="btn btn-primary" onClick={fetchToDos}>
//                         TODOS API
//                       </button>
//                     </td>
//                   </div>
//                 </tr>
//               </table>
//             </div>
//           </div>
//           <div className="col-sm-8">
//             {comments?.length > 0 && (
//               <div>
//                 <h2>Fetched Data from API 1</h2>
//                 <div>
//                   <input
//                     placeholder="Enter ID..."
//                     onChange={(e) => setFilter(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <table className='table table-dark table-striped'>
//                     <thead>
//                       <tr>
//                         <th>ID</th>
//                         <th>Body</th>
//                         <th>User detail</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filter ?(
//                         <tr key={filteredComments[0]?.id}>
//                           <td>
//                             <p>{filteredComments[0]?.id}</p>
//                           </td>
//                           <td>
//                             <p>{filteredComments[0]?.body}</p>
//                           </td>
//                           <td>
//                             <p>id:{filteredComments[0]?.user?.id}</p>
//                             <p>
//                               username:{filteredComments[0]?.user?.username}
//                             </p>
//                           </td>
//                         </tr>
//                       ) : (
//                         comments.map((comment) => (
//                           <tr key={comment.id}>
//                             <td>
//                               <p>{comment.id}</p>
//                             </td>
//                             <td>
//                               <p>{comment.body}</p>
//                             </td>
//                             <td>
//                               <p>id:{comment.user.id}</p>
//                               <p>username:{comment.user.username}</p>
//                             </td>
//                           </tr>
//                         ))
//                       )}
//                       {}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}
//             {quotes?.length > 0 && (
//               <div>
//                 <h2>Fetched Data from API 2</h2>
//                 <div>
//                   <input
//                     placeholder="Enter ID..."
//                     onChange={(e) => setFilter(e.target.value)}
//                   />
//                 </div>
//                 <table className='table table-dark table-striped'>
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>Quote</th>
//                       <th>Author</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filter ? (
//                       <tr key={filteredQuotes[0]?.id}>
//                         <td>{filteredQuotes[0]?.id}</td>
//                         <td>{filteredQuotes[0]?.quote}</td>
//                         <td>{filteredQuotes[0]?.author}</td>
//                       </tr>
//                     ) : (
//                       quotes.map((quote) => (
//                         <tr key={quote.id}>
//                           <td>{quote.id}</td>
//                           <td>{quote.quote}</td>
//                           <td>{quote.author}</td>
//                         </tr>
//                       ))
//                     )}
//                     {}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             {todos?.length > 0 && (
//               <div>
//                 <h2>Fetched Data from API 3</h2>
//                 <div>
//                   <input
//                     placeholder="Enter ID..."
//                     onChange={(e) => setFilter(e.target.value)}
//                   />
//                 </div>
//                 <table className='table table-dark table-striped'>
//                   <thead>
//                     <tr>
//                       <th>ID</th>
//                       <th>todo</th>
//                       <th>completed</th>
//                       <th>UserID</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filter ? (
//                       <tr key={filteredTodos[0]?.id}>
//                         <td>{filteredTodos[0]?.id}</td>
//                         <td>{filteredTodos[0]?.todo}</td>
//                         <td>
//                           {filteredTodos[0]?.completed ? 'true' : 'false'}
//                         </td>
//                         <td>{filteredTodos[0]?.userId}</td>
//                       </tr>
//                     ) : (
//                       todos.map((todo) => (
//                         <tr key={todo.id}>
//                           <td>{todo.id}</td>
//                           <td>{todo.todo}</td>
//                           <td>{todo.completed ? 'true' : 'false'}</td>
//                           <td>{todo.userId}</td>
//                         </tr>
//                       ))
//                     )}
                    
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MultipleAPI
