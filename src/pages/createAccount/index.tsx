import React, {useState} from 'react'
import CloseIcon from './../../assets/images/cross-icon.svg'
import { AppBar, Input, Button } from '@mui/material';
import Box from '@mui/material/Box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useHistory } from 'react-router-dom';

const CreateAccount = () => {
     let history = useHistory();
     function handleCreateAccount() {
          history.push('/secure-account');
     }
     let [name,setName] = useState('');
     let [nameValid,setNameValid] = useState(true);
     let [accountId,setAccountId] = useState(true);
     let [accountIdValid,setAccountIdValid] = useState(true);
     let handleChange  = (e: any) => {
          console.log(e.currentTarget.name)
          if (e.currentTarget.name === "phone") {
                setName(e.currentTarget.value);
                (name !== '') &&
                setNameValid(false)
          } else if (e.currentTarget.name === "Email") {
               setAccountId(e.currentTarget.value);
               let userIdREgx = RegExp('^[a-zA-Z0-9]{4,10}$');
               (userIdREgx.test(e.currentTarget.value)) &&
               setAccountIdValid(false)
          }
     }
     return (
         <div className="page-wrapper">
              <AppBar position="static" className="page-header">
                   <h2>Create NEAR Account</h2>
                   <div className="close-verification">
                        <Box
                            component="img"
                            alt="The house from the offer."
                            src={CloseIcon}
                        />
                   </div>
                   <span className="account-progress"></span>
              </AppBar>
              <div className="bottompage-links createAccount-content">
                   <p>Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
              </div>
              <main className="main-content">
                   <div className="middle-content">
                        <div className="form-field-main text-center">
                             <form>
                                  <div className="form-field">
                                       <label className="fieldlable" htmlFor="verification">Full Name</label>
                                       <Input
                                           name="name"
                                           type="text"
                                           onChange={handleChange}
                                           placeholder="Ex. John doe"
                                           className="form-control"
                                       />
                                  </div>
                                  <div className="form-field accountPersonalBox">
                                       <label className="fieldlable" htmlFor="verification">Account ID</label>
                                       <Input
                                           name="username"
                                           type="text"
                                           onChange={handleChange}
                                           placeholder="yourname"
                                           className="form-control"
                                       />
                                       <span>.near</span>
                                  </div>
                                  <Button variant="contained" onClick={handleCreateAccount} className="login-continue continue-button" endIcon={<ChevronRightIcon />}>
                                       Continue
                                  </Button>
                             </form>
                        </div>
                   </div>
                   <div className="terms-policy-content">
                        <p>by clicking continue you must agree to near labs <span><a>Terms & Conditions</a> and <a>Privacy Policy</a></span> </p>
                   </div>
                   <div className="bottompage-links">
                        <h3>Already have NEAR account?</h3>
                        <Button variant="contained" className="loginWith-button dark-button" endIcon={<ChevronRightIcon />}>
                             Log in with NEAR
                        </Button>
                   </div>
              </main>
         </div>
     )
}

export default CreateAccount