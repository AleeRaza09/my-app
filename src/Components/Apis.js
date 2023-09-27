  // import React, { useState,useeffect } from 'react';

  // const API = 'https://dummyjson.com/comments';
  // const API2 = 'https://dummyjson.com/quotes';
  // const API3 = 'https://dummyjson.com/todos';

  // function Apis() {

  //   const [data, setData] = useState([]);
  //   const [filter, setFilter] = useState(null);
  //   const [enterid1,setEnterid1] = useState(null);
  //   const [enterid2,setEnterid2] = useState(null);
  //   const [enterid3,setEnterid3] = useState(null);
    

   

  //   const fetchData = async (api) => {
  //     console.log('id1',enterid1,'id2',enterid2,'id3',enterid3,'api',api)

  //     try {
  //       const res = await fetch(api);
  //       const data = await res.json();
  //       if (data) {
  //         setData(data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   const filteredData = (data) => {
  //     return data?.filter((d) => d.id === parseInt(filter));
  //   };
  //   const handleSubmit1 = (e) => {
  //     e.preventDefault();
  //     if (enterid1) {
  //       setFilter(enterid1);  
  //       fetchData(API);
      

  //     }
  //   };
  //   const handleSubmit2 = (e) => {
  //     e.preventDefault();
  //     if (enterid2) {
  //     setFilter(enterid2); 
      
  // console.log('iod',enterid2)
  //     fetchData(API2);
  //     }
  //   };
  //   const handleSubmit3 = (e) => {
  //     e.preventDefault();
  //     if (enterid3) {
  //       setFilter(enterid3); 
        
  //       fetchData(API3);
  //     }

      
  //   };

  //   return (
  //     <>
  //       <div>
  //         <div className="container-fluid">
  //           <div className="row">
  //             <div className="col-2">
  //               <h3>Display Data</h3>


  //               <button
  //               className="btn btn-primary"
  //               onClick={() => fetchData(API)}
  //               >
  //             Comments API
  //             </button>
                    
  //                       <button
  //                         className="btn btn-primary"
  //                         onClick={() => {
  //                           fetchData(API2)
  //                         }}
  //                       >
  //                         Quotes API
  //                       </button>
                    
  //                       <button
  //                         className="btn btn-primary"
  //                         onClick={() => fetchData(API3)}
  //                       >
  //                         TODOS API
  //                       </button>
                    
                
  //             </div>
  //           </div>
  //           <div className="col-sm-8">
  //             {data?.comments?.length > 0 && (
  //               <div>
  //                 <h2>Fetched Data from API 1</h2>
  //                 <div>
  //                   <form onSubmit={handleSubmit1}>
  //                   <div>
  //                   <input 
  //                     placeholder="Enter ID..."
  //                     onChange={(e) => setEnterid1(e.target.value)
                                        
  //                     }
  //                   />
  //                   </div>
  //                   <div>
  //                   <button className=' btn-primary sub'>Submit</button>
  //                   </div>
                    
  //                   </form>
  //                 </div>
  //                 <div>
  //                   <table className='table table-dark'>
  //                     <thead>
  //                       <tr>
  //                         <th>ID</th>
  //                         <th>Body</th>
  //                         <th>User detail</th>
  //                       </tr>
  //                     </thead>
  //                     <tbody>
  //                       {filter ? (
  //                         <tr key={filteredData(data?.comments)[0]?.id}>
  //                           <td>
  //                             <p>{filteredData(data?.comments)[0]?.id}</p>
  //                           </td>
  //                           <td>
  //                             <p>{filteredData(data?.comments)[0]?.body}</p>
  //                           </td>
  //                           <td>
  //                             <p>
  //                               id:{filteredData(data?.comments)[0]?.user?.id}
  //                             </p>
  //                             <p>
  //                               username:
  //                               {filteredData(data?.comments)[0]?.user?.username}
  //                             </p>
  //                           </td>
  //                         </tr>
  //                       ) : (
  //                         data?.comments?.map((comment) => (
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
  //             {data?.quotes?.length > 0 && (
  //               <div>
  //                 <h2>Fetched Data from API 2</h2>
  //                 <div>
                    
  //                 <form onSubmit={handleSubmit2} >
  //                     <div>
  //                   <input 
  //                     placeholder="Enter ID..." 
  //                     onChange={(e) => setEnterid2(e.target.value)}
  //                   />
  //                   <button className=' btn-primary'>Submit</button>
  //                   </div>
                  
  //                   </form>
                    
                  
  //                 </div>
  //                 <table className='table table-dark'>
  //                   <thead>
  //                     <tr>
  //                       <th>ID</th>
  //                       <th>Quote</th>
  //                       <th>Author</th>
  //                     </tr>
  //                   </thead>
  //                   <tbody>
  //                     {filter ? (
  //                       <tr key={filteredData(data?.quotes)[0]?.id}>
  //                         <td>{filteredData(data?.quotes)[0]?.id}</td>
  //                         <td>{filteredData(data?.quotes)[0]?.quote}</td>
  //                         <td>{filteredData(data?.quotes)[0]?.author}</td>
  //                       </tr>
  //                     ) : (
  //                       data?.quotes?.map((quote) => (
  //                         <tr key={quote.id}>
  //                           <td>{quote.id}</td>
  //                           <td>{quote.quote}</td>
  //                           <td>{quote.author}</td>
  //                         </tr>
  //                       ))
  //                     )}
  //                   </tbody>
  //                 </table>
  //               </div>
  //             )}
  //             {data?.todos?.length > 0 && (
  //               <div>
  //                 <h2>Fetched Data from API 3</h2>
  //                 <div>
                  
  //                 <form onSubmit={handleSubmit3} >
                  
  //                     <div>

  //                   <input
  //                     placeholder="Enter ID..." 
  //                     onChange={(e) => setEnterid3(e.target.value)}
  //                   />
  //                   <button className=' btn-primary'>Submit</button>
  //                   </div>
                  
  //                   </form>
              
  //                 </div>
  //                 <table className='table table-dark'>
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
  //                       <tr key={filteredData(data?.todos)[0]?.id}>
  //                         <td>{filteredData(data?.todos)[0]?.id}</td>
  //                         <td>{filteredData(data?.todos)[0]?.todo}</td>
  //                         <td>
  //                           {filteredData(data?.todos)[0]?.completed
  //                             ? 'true'
  //                             : 'false'}
  //                         </td>
  //                         <td>{filteredData(data?.todos)[0]?.userId}</td>
  //                       </tr>
  //                     ) : (
  //                       data?.todos.map((todo) => (
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

  // export default Apis;

import React, { useState } from 'react';

const API = 'https://dummyjson.com/comments';
const API2 = 'https://dummyjson.com/quotes';
const API3 = 'https://dummyjson.com/todos';

function Apis() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [searchData, setSearchData] = useState([]);

  const filteredData = (data) => {
    const fData = data?.filter((d) => d.id === parseInt(filter));
    setSearchData(fData);
    return fData;
   
   
   
  };
  console.log(filter);

  const fetchData = async (api) => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      if (data) {
        setData(data);
      
      
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <table>
                <tr>
                  <h5 className='ha'>Display Data</h5>
                  <div>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => fetchData(API)}
                         
                        
                       
                                >
                        Comments API
                      </button>
                    </td>
                  </div>
                  <div>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => fetchData(API2)}
  
                      >  
                        Quotes API
                      </button>
                    </td>
                  </div>
                  <div>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => fetchData(API3)
                         

                        }
                      >
                        TODOS API
                      </button>
                    </td>
                  </div>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-sm-8">
            {data?.comments?.length > 0 && (
              <div>
                <h2>Fetched Data from API 1</h2>
                <div>
                  <input
                    placeholder="Enter ID..."
                    onChange={(e) => setFilter(e.target.value)
                     }
                   
                  />
                  <button className='btn' onClick={() => filteredData(data?.comments) }>
                    Search
                  </button>
                </div>
                <div>
                  <table className='table table-dark'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Body</th>
                        <th>User detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      { searchData[0] ? (
                        <tr key={searchData[0]?.id}>
                          <td>
                            <p>{searchData[0]?.id}</p>
                          </td>
                          <td>
                            <p>{searchData[0]?.body}</p>
                          </td>
                          <td>
                          <p>id:{searchData[0]?.user?.id}</p>
                            <p>
                              username:
                              {searchData[0]?.id?.user?.username}
                            </p>
                          </td>
                        </tr>
                      ) : (
                        data?.comments?.map((comment) => (
                          <tr key={comment.id}>
                            <td>
                              <p>{comment.id}</p>
                            </td>
                            <td>
                              <p>{comment.body}</p>
                            </td>
                            <td>
                              <p>id:{comment.user.id}</p>
                              <p>username:{comment.user.username}</p>
                            </td>
                          </tr>
                        ))
                      )}
                      {}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {data?.quotes?.length > 0 && (
              <div>
                <h2>Fetched Data from API 2</h2>
                <div>
                  <input
                    placeholder="Enter ID..."
                    onChange={(e) => setFilter(e.target.value)}
                   
                  />
                  <button onClick={() => filteredData(data?.quotes)}>
                    Search
                  </button>
                </div>
                <table className='table table-dark'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Quote</th>
                      <th>Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchData[0] ? (
                      <tr key={searchData[0]?.id}>
                        <td>{searchData[0]?.id}</td>
                        <td>{searchData[0]?.quote}</td>
                        <td>{searchData[0]?.author}</td>
                      </tr>
                    ) : (
                      data?.quotes?.map((quote) => (
                        <tr key={quote.id}>
                          <td>{quote.id}</td>
                          <td>{quote.quote}</td>
                          <td>{quote.author}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
            {data?.todos?.length > 0 && (
              <div>
                <h2>Fetched Data from API 3</h2>
                <div>
                  <input
                    placeholder="Enter ID..."
                    onChange={(e) => setFilter(e.target.value)}
                    
                  />
                  <button onClick={() => filteredData(data?.todos)}>
                    Search
                  </button>
                </div>
                <table className='table table-dark'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>todo</th>
                      <th>completed</th>
                      <th>UserID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchData[0] ? (
                      <tr key={searchData[0]?.id}>
                        <td>{searchData[0]?.id}</td>
                        <td>{searchData[0]?.todo}</td>
                        <td>{searchData[0]?.completed ? 'true' : 'false'}</td>
                        <td>{searchData[0]?.userId}</td>
                      </tr>
                    ) : (
                      data?.todos.map((todo) => (
                        <tr key={todo.id}>
                          <td>{todo.id}</td>
                          <td>{todo.todo}</td>
                          <td>{todo.completed ? 'true' : 'false'}</td>
                          <td>{todo.userId}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Apis;