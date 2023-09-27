import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    Reg: '',
    con: '',
    idcard: '',
    pwd: '',
  });

  const [Allentery, setAllentry] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitform = (e) => {
    e.preventDefault();
    const newentry = { ...formData };
    setAllentry([...Allentery, newentry]);
    // Reset form fields by setting the state back to empty values
    setFormData({
      fname: '',
      lname: '',
      Reg: '',
      con: '',
      idcard: '',
      pwd: '',
    });
  };

  return (
    <>
      <h1>Form</h1>

      <form action="" className="Form1" onSubmit={submitform}>
        <label htmlFor="fname">First name:</label><br></br>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        ></input><br></br>

        <label htmlFor="lname">Last name:</label><br></br>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        ></input><br></br>

        <label htmlFor="Reg">Registration number:</label><br></br>
        <input
          type="text"
          id="Reg"
          name="Reg"
          value={formData.Reg}
          onChange={handleChange}
        ></input><br></br>

        <label htmlFor="con">Contact:</label><br></br>
        <input
          type="text"
          id="con"
          name="con"
          value={formData.con}
          onChange={handleChange}
        ></input><br></br>

        <label htmlFor="idcard">ID Card:</label><br></br>
        <input
          type="text"
          id="idcard"
          name="idcard"
          value={formData.idcard}
          onChange={handleChange}
        ></input><br></br>

        <label htmlFor="dep">Password:</label><br></br>
        <input
          type="text"
          id="pwd"
          name="pwd"
          value={formData.pwd}
          onChange={handleChange}
        ></input><br></br>

        <input type="submit" value="submit"></input>
      </form>

      <div>
        {Allentery.map((Curele, index) => {
          return (
            <div key={index}>
              <p>First Name: {Curele.fname}</p>
              <p>Last Name: {Curele.lname}</p>
              <p>Registration Number: {Curele.Reg}</p>
              <p>Contact: {Curele.con}</p>
              <p>ID Card: {Curele.idcard}</p>
              <p>Password: {Curele.pwd}</p>
            </div>
            
          );

        })}  
      </div>
    </>
  );
}

export default Form;
