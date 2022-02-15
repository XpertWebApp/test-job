import React from 'react'
import Logo from './../../assets/images/logo.svg'
import { AppBar, Input, Button, Link } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';


interface PageProps {
     contained: string,
     placeholder: string,
}
interface allyProps {
    id:string,
    'aria-controls':string,
}
function TabPanel(props:any) {
     const { children, value, index, ...other } = props;
   
     return (
       <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
       >
         {value === index && (
           <Box sx={{ p: 3 }}>
             <Typography>{children}</Typography>
           </Box>
         )}
       </div>
     );
   }
   TabPanel.propTypes = {
     children: PropTypes.node,
     index: PropTypes.number.isRequired,
     value: PropTypes.number.isRequired,
   };
   function a11yProps (index: number) :allyProps {
     return {
       id: `simple-tab-${index}`,      
       'aria-controls': `simple-tabpanel-${index}`,
     };
   }

const Login = (props:PageProps) => {
     const [value, setValue] = React.useState(0);
     const handleChange = (event:any, newValue:any) => {
          setValue(newValue); 
     }; 
     const history = useNavigate();
     const handleOTP = () =>{
          alert('Hello')
          // history.push('/otp');
     }
    const defaultProps = {
          foo: "default",
          placeholder: ""
     };
    const returnTabId = (index:number):string=>{
        return  `simple-tab-${index}`
    }
    const returnControls = (index:number):string=>{
        return  `simple-tabpanel-${index}`
    }
     return (
          <div className="page-wrapper">
               <AppBar position="static" className="page-header">
                    <Box
                         component="img"
                         alt="The house from the offer."
                         src={Logo}
                    />
               </AppBar>
               <main className="main-content">
                    <div className="middle-content">
                         <Box sx={{ width: '100%' }}>
                              <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                                   <Tabs value={value} onChange={handleChange} className="loginTabs" aria-label="basic tabs example" centered>
                                        <Tab
                                            label="Email"
                                            id={returnTabId(0)}
                                            aria-controls={returnControls(0)}
                                        />
                                        <Tab
                                            label="Phone"

                                        />
                                   </Tabs>
                              </Box>
                              <TabPanel value={value} index={0}>
                                   <div className="form-field-main text-center">
                                        <form>
                                             <Input
                                                  type="text"
                                                  placeholder="johndoe@gmail.com"
                                                  className="form-control"
                                             />
                                             <Button  className="login-continue continue-button" endIcon={<ChevronRightIcon />}>
                                                  Continue
                                             </Button>
                                        </form>
                                   </div>
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                   <div className="form-field-main text-center">
                                        <form>
                                             <Input
                                                  type="text"
                                                  placeholder="Ex (337) 378 8383"
                                                  className="form-control"
                                             />
                                             <Button variant="contained" className="login-continue continue-button" endIcon={<ChevronRightIcon />} disabled>
                                                  Continue   
                                             </Button>    
                                        </form>       
                                   </div>
                              </TabPanel>
                         </Box> 
                    </div>
                    <div className="terms-policy-content"> 
                         <p>by clicking continue you must agree to near labs <span><Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link></span> </p>
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

export default Login
