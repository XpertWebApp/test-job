import CloseIcon from './../../assets/images/cross-icon.svg'
import { AppBar, Input, Button, Link } from '@mui/material';
import Box from '@mui/material/Box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useHistory } from 'react-router-dom';

const Verification = () => {
     let history = useHistory();
     function handleVerify() {
          history.push('/create-account');
     }
     return (
          <div className="page-wrapper">
               <AppBar position="static" className="page-header">
                    <h2>Verification</h2>
                    <div className="close-verification">
                         <Box
                              component="img"
                              alt="The house from the offer."
                              src={CloseIcon}
                         />
                    </div>
               </AppBar>
               <div className="bottom-page-links verifyBy-email">
                    <h3>We've sent a 6-digit verification code to the email address </h3>
                    <Link href="#" className="bLink">johndoe@gmail.com</Link>
               </div>
               <main className="main-content">
                    <div className="middle-content">
                    <div className="form-field-main verification-form text-center">
                         <form>
                              <label className="verifylabel" htmlFor="verification">Enter verification code</label>
                              <div className="multiOTPField">
                                   <Input
                                        type="text"
                                        label="Email"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                                   <Input
                                        type="text"
                                        label="Email"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                                   <Input
                                        type="text"
                                        label="Email"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                                   <Input
                                        type="text"
                                        label="Email"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                                   <Input
                                        type="text"
                                        label="Email"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                                   <Input
                                        type="text"
                                        label="Email"
                                        placeholder=""
                                        variant="contained"
                                        className="form-control"
                                   />
                              </div>
                              <Button variant="contained" onClick={handleVerify} tabindex="1" className="login-continue continue-button" endIcon={<ChevronRightIcon />}>
                                   Continue
                              </Button>
                         </form>
                    </div>
                    </div>
                    <div className="bottom-page-links verification-links">
                         <h3>Didn't receive your code?</h3>
                         <Link href="#" className="bLink">Send to a different email address</Link>
                         <Link href="#" className="bLink">Resend your code </Link>
                    </div>
               </main>
          </div>
     )
}

export default Verification
