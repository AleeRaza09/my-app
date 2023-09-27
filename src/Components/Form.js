import React, { useState } from 'react';

function Form() {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [Reg, setReg] = useState('');
  const [con, setcon] = useState('');
  const [idcard, setidcard] = useState('');
  const [pwd, setpwd] = useState('');

  const [Allentery, setAllentry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();
    const newentry = {fname: fname, lname: lname, Reg: Reg, con: con, idcard: idcard, pwd: pwd };
    setAllentry([...Allentery, newentry]);
    // Reset form fields
    setfname('');
    setlname('');
    setReg('');
    setcon('');
    setidcard('');
    setpwd('');
  };

  return (
    <>
      <h1>Form</h1>

      <form action="" className="Form" onSubmit={submitform}>
        <label htmlFor="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname" value={fname} onChange={(e) => setfname(e.target.value)}></input><br></br>

        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value={lname} onChange={(e) => setlname(e.target.value)}></input><br></br>

        <label htmlFor="Reg">Registration number:</label><br></br>
        <input type="text" id="Reg" name="Reg" value={Reg} onChange={(e) => setReg(e.target.value)}></input><br></br>

        <label htmlFor="con">Contact:</label><br></br>
        <input type="text" id="con" name="con" value={con} onChange={(e) => setcon(e.target.value)}></input><br></br>

        <label htmlFor="idcard">ID Card:</label><br></br>
        <input type="text" id="idcard" name="idcard" value={idcard} onChange={(e) => setidcard(e.target.value)}></input><br></br>

        <label htmlFor="dep">Password:</label><br></br>
        <input type="text" id="pwd" name="pwd" value={pwd} onChange={(e) => setpwd(e.target.value)}></input><br></br>

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
