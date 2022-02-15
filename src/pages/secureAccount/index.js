import React from 'react'
import CloseIcon from './../../assets/images/cross-icon.svg'
import { AppBar, Input, Button, Link } from '@mui/material';
import Box from '@mui/material/Box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const SecureAccount = (props) => {
     return (
          <div className="page-wrapper">
               <AppBar position="static" className="page-header">
                    <h2>Secure your account</h2>
                    <div className="close-verification">
                         <Box
                              component="img"
                              alt="The house from the offer."
                              src={CloseIcon}
                         />
                    </div>
                    <span className="account-progress thirdpro"></span>
               </AppBar>
               <div className="bottom-page-links createAccount-content">
                    <p>Keep your apps safe from other with access to your computer.</p>
               </div>
               <main className="main-content">
                    <div className="middle-content secure-account">
                    <div className="form-field-main text-center">
                         <form>
                              <div className="form-field">
                                   <label className="fieldlable" htmlFor="verification">Password</label>
                                   <Input
                                        type="text"
                                        label="name"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                              </div>
                              <div className="form-field">
                                   <label className="fieldlable" htmlFor="verification">Confirm Password</label>
                                   <Input
                                        type="text"
                                        label="name"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                              </div> 
                              <Button variant="contained" tabIndex="1" className="login-continue continue-button" endIcon={<ChevronRightIcon />}>
                                   Continue
                              </Button>
                         </form>
                         <p className="appInfo">claudio@metapool.app</p>
                    </div>
                    </div>
                    <div className="terms-policy-content">
                         <p>By creating a NEAR account, you agree to the NEAR Wallet <span><Link to="/">Terms & Conditions</Link> and <Link to="/">Privacy Policy</Link></span> </p>
                    </div>
               </main>
          </div>
     )
}

export default SecureAccount
