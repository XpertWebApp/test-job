import React from 'react'
import CloseIcon from './../../assets/images/cross-icon.svg'
import { AppBar, Input, Button, Link } from '@mui/material';
import Box from '@mui/material/Box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const CreateAccount = (props) => {
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
               <div className="bottom-page-links createAccount-content">
                    <p>Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
               </div>
               <main className="main-content">
                    <div className="middle-content">
                    <div className="form-field-main text-center">
                         <form>
                              <div className="form-field">
                                   <label className="fieldlable" htmlFor="verification">Full Name</label>
                                   <Input
                                        type="text"
                                        label="name"
                                        placeholder="Ex. John doe"
                                        variant="contained"
                                        className="form-control"
                                   />
                              </div>
                              <div className="form-field accountPersonalBox">
                                   <label className="fieldlable" htmlFor="verification">Account ID</label>
                                   <Input
                                        type="text"
                                        label="name"
                                        placeholder="yourname"
                                        variant="contained"
                                        className="form-control"
                                   />
                                   <span>.near</span>
                              </div>
                              <Button variant="contained" tabindex="1" className="login-continue continue-button" endIcon={<ChevronRightIcon />} disabled>
                                   Continue
                              </Button>
                         </form>
                    </div>
                    </div>
                    <div className="terms-policy-content">
                         <p>by clicking continue you must agree to near labs <span><Link to="/">Terms & Conditions</Link> and <Link to="/">Privacy Policy</Link></span> </p>
                    </div>
                    <div className="bottom-page-links">
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
