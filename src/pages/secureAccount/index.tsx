import React, { useState } from 'react'
import CloseIcon from './../../assets/images/cross-icon.svg'
import { AppBar, Input, Button, Link } from '@mui/material';
import Box from '@mui/material/Box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CopyIcon from './../../assets/images/copy-icon.svg'
import { useHistory } from 'react-router-dom';


interface PageProps {
     label: string,
     tabIndex: string,
     className: string,
     contained: string,
     placeholder: string,
}

const SecureAccount = () => {
     const [seedPhrase, setseedPhrase] = useState(false)
     function showSeed(){
          setseedPhrase(true)
     }
     let history = useHistory();
     function handleContinueLogin() {
          history.push('/dashboard');
     } 
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
               <div className="bottompage-links createAccount-content">
                    <p>Keep your apps safe from other with access to your computer.</p>
               </div>
               {
                    seedPhrase ?
                    <main className="main-content">
                         <div className="middle-content seed-phrase">
                              <h2>Seed phrase</h2>
                              <ul className="seed-card-box">
                                   <li><span>1</span> gather</li>
                                   <li><span>2</span> engage</li>
                                   <li><span>3</span> father</li>
                                   <li><span>4</span> plant</li>
                                   <li><span>5</span> indego</li>
                                   <li><span>6</span> dental</li>
                                   <li><span>7</span> sick</li>
                                   <li><span>8</span> fungus</li>
                                   <li><span>9</span> river</li>
                                   <li><span>10</span> morning</li>
                                   <li><span>11</span> love</li>
                                   <li><span>12</span> cow</li>
                              </ul>
                              <button type="button" className="btn copy-seed">
                                   <img src={CopyIcon} alt="Copy"/>
                                   Copy Seed 
                              </button>
                              <Button onClick={handleContinueLogin} variant="contained" className="login-continue continue-button" endIcon={<ChevronRightIcon />}>
                                   Continue to Login in
                              </Button>
                         </div>
                    </main>
                    :
                    <main className="main-content">
                         <div className="middle-content secure-account">
                              <div className="form-field-main text-center">
                                   <form>
                                        <div className="form-field">
                                             <label className="fieldlable" htmlFor="verification">Password</label>
                                             <Input 
                                                  type="text"
                                                  className="form-control"
                                             />
                                        </div>
                                        <div className="form-field">
                                             <label className="fieldlable" htmlFor="verification">Confirm Password</label>
                                             <Input
                                                  type="text"
                                                  placeholder=""
                                                  className="form-control"
                                             />
                                        </div> 
                                        <Button variant="contained" onClick={showSeed} className="login-continue continue-button" endIcon={<ChevronRightIcon />}>
                                             Continue
                                        </Button>
                                   </form>
                                   <p className="appInfo">claudio@metapool.app</p>
                              </div>
                         </div>
                         <div className="terms-policy-content">
                              <p>By creating a NEAR account, you agree to the NEAR Wallet <span><a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></span> </p>
                         </div>
                    </main>
               }
          </div>
     )
}

export default SecureAccount
