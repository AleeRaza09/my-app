    import React, { useState } from 'react';
   

    const Task = () => {
    const [apiData, setApiData] = useState({
        comments: [],
        quotes: [],
        todos: []
    });
    const [apiType, setApiType] = useState('');
    const [searchId, setSearchId] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [fetchLabel, setFetchLabel] = useState('');

    const fetchApiData = async (apiEndpoint, dataType) => {
        try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setApiData({ ...apiData, [dataType]: data[dataType] });
        setFilteredData(data[dataType]); 
        setFetchLabel(`Fetch ${dataType}`);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    const handleButtonClick = (apiType) => {
        setApiType(apiType);
        fetchApiData(`https://dummyjson.com/${apiType}`, apiType);
    };

    const handleSearch = () => {
       
        const dataToShow = apiData[apiType].filter(item => item.id === parseInt(searchId));
        setFilteredData(dataToShow);
    };

    const renderTable = () => {
        const dataToShow = filteredData;

        if (dataToShow && dataToShow.length > 0) {
        return (
            <div  className="table-container overflow-auto">
            <table className='table table-dark table-container' >
                
            <thead>    
                <tr>
                <th>ID</th>
                {apiType === 'comments' && <th>Body</th>}
                {apiType === 'comments' && <th>Post ID</th>}
                {apiType === 'quotes' && <th>Quote</th>}
                {apiType === 'quotes' && <th>Author</th>}
                {apiType === 'todos' && <th>Todo</th>}
                {apiType === 'todos' && <th>User ID</th>}
                </tr>
            </thead>
            <tbody>
                {dataToShow.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    {apiType === 'comments' && <td>{item.body}</td>}
                    {apiType === 'comments' && <td>{item.postId}</td>}
                    {apiType === 'quotes' && <td>{item.quote}</td>}
                    {apiType === 'quotes' && <td>{item.author}</td>}
                    {apiType === 'todos' && <td>{item.todo}</td>}
                    {apiType === 'todos' && <td>{item.userId}</td>}
                </tr>
                ))}
            </tbody>
            
            </table>
            </div>
        );
    } else {
        return 
        }
       
    };

    return (
      <div className='container'> 
        <div className='row'>
            
        <div className='col-sm-3'>
        <h2 style={{color:'white',fontSize:'40px',fontFamily:'bold'}}>
            {fetchLabel}</h2>    
        <div>
        <button  className="btn btn-primary"
               onClick={() => handleButtonClick('comments')}>Fetch Comments</button>
        </div>
     
      
        
        <div>
        <button  className= 'btn btn-primary' 
               onClick={() => handleButtonClick('quotes')}>Fetch Quotes</button>
        </div>
        
        
        <div>
        <button className  ='btn btn-primary'
                
            onClick={() => handleButtonClick('todos')}>Fetch Todos</button>
        </div>
        </div>
        <div className='col-sm-6'>
        {renderTable()}
        </div>
        <div className='col-sm-3'>
        <div>
            <h3 style={{color:'white',fontSize:'40px',fontFamily:'bold'}}>Search Here</h3>
            <input className='form-control'
            type="number"
            placeholder="Enter ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            />
            <button className='btn btn-primary' onClick={handleSearch}>Search</button>
            </div>
        </div>
      </div>
      </div>    
    );
    };

    export default Task