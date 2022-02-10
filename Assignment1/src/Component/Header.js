import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState} from React;

const Header = () => {

    const[isTextBoxVisible, setIsTextBoxVisible] = useState(false);
    const[emailId,setEmailId]=useState('nirmalparmar@gmail.com')
    const[emailId1,setEmailId1]=useState('nirmalparmar@gmail.com')
    const[isPasswordTextBoxVisible, setIsPasswordTextBoxVisible] = useState(false);
    const[Password,setPassword]=useState('default password')
    const[Passwrod1,setPassword1]=useState('default password')
    const[isAddressTextBoxVisible, setIsAddressTextBoxVisible] = useState(false);
    const[Address,setAddress]=useState('XYZ ,Halifax, Nova Scotia')
    const[Address1,setAddress1]=useState('XYZ ,Halifax, Nova Scotia')
    const emailRegex=/.+@.+\.[A-Za-z]+$/;
    const [errorEmailMessage,setEmailErrorMessage] =useState("")
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    const [errorPasswordMessage,setPasswordErrorMessage] =useState("")

    const handleOnClick = (e) => {
        if(isTextBoxVisible) {
            setEmailId(emailId1);
        }
        setIsTextBoxVisible(true);
        
    }
    const emailValue = (e) => {
        if(!emailRegex.test(e.target.value) && e.target.value){
            setEmailId1(e.target.value);
            setEmailErrorMessage("Not Proper Email Format")
          }
        else{
        setEmailErrorMessage("")
        setEmailId1(e.target.value);
        }
    }

    const handlePasswordOnClick = (e) => {
        if(isPasswordTextBoxVisible) {
            setPassword(Passwrod1);
        }
        setIsPasswordTextBoxVisible(true);
        
    }

    const passwordValue = (e) => {
        if(!passwordRegex.test(e.target.value) && e.target.value){
            setPassword1(e.target.value);
            setPasswordErrorMessage("Password shoudld be of 8 or more characters,shoudl contain capital letter,small letter,one special character and one number!! ")
      }
      else{
        setPasswordErrorMessage("");
        setPassword1(e.target.value);
    }
    }

    const handleAddressOnClick = (e) => {
        if(isAddressTextBoxVisible) {
            setAddress(Address1);
        }
        setIsAddressTextBoxVisible(true);
        
    }

    const addressValue = (e) => {
        setAddress1(e.target.value);
    }

    return (
        <>
        <nav class="navbar navbar-dark bg-dark">
        <h3 style={{color:"White", marginLeft:"45%"}}>User Profile</h3>
      </nav>,
      <div class="card" style={{width: '25rem',marginLeft:'35%',marginTop:'1%',boxShadow:'10px 10px 10px 10px grey'}}>
      <img class="card-img-top" src="prof.jpg" alt="Card image cap" style={{height: '18rem'}}  />
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: 'center'}}>Nirmal Parmar</h5>
        <p class="card-text" style={{marginBottom: '0px'}}>Emailid:-{emailId}</p>
        {isTextBoxVisible?<input type="text " value={emailId1} onChange={emailValue} />:null}
        {errorEmailMessage.length >0 ? <p style={{color:"red"}}>{errorEmailMessage}</p> : ""}
        <a href="#" style={{height: '2rem'}} onClick={handleOnClick} > Change Emailid</a>
        <p class="card-text" style={{marginBottom: '0px'}}>Password:-{Password}</p>
        {isPasswordTextBoxVisible?<input type="text " value={Passwrod1} onChange={passwordValue} />:null}
        {errorPasswordMessage.length >0 ? <p style={{color:"red"}}>{errorPasswordMessage}</p> : ""}
        <a href="#" style={{height: '2rem'}} onClick={handlePasswordOnClick}>Change Password</a>
        <p class="card-text" style={{marginBottom: '0px'}}>Address:- {Address}</p>
        {isAddressTextBoxVisible?<input type="text " value={Address1} onChange={addressValue} />:null}
        <a href="#" style={{height: '2rem'}} onClick={handleAddressOnClick}>Change Address</a>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark" style={{marginTop:"3%"}}></nav>
    </>
      );
}

export default Header;