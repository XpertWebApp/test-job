import { AppBar } from '@mui/material';
import Logo from './../../assets/images/logo-icon.svg'
import Notification from './../../assets/images/notification.svg'
import Settings from './../../assets/images/settings.svg'

const Dashboard = () => {
     return (
          <div className="page-wrapper">
               <AppBar position="static" className="page-header dashboard-header">
                    <img src={Logo} alt="Logo"/>
                    <div className="searchform">
                         <select className="form-control">
                              <option value=""> Johndoe.near </option>
                         </select>
                    </div>
                    <div className="header-right">
                         <img src={Notification} alt="Notification"/>
                         <img src={Settings} alt="Setting"/>
                    </div>
               </AppBar>
               <main className="main-content">
                    <div className="middle-content text-center">
                         <h2>Welcome Back!! John Doe</h2>
                    </div>
               </main>
          </div>
     )
}

export default Dashboard
