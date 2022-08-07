import { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import './App.css';
import ContextState from './context/ContextState';
import Notification from './components/notification/Notification'

function App() {
 
  const [notification, setNotification] = useState(false)

  return (
    <>
      <ContextState>
          <Router>
                <AnimatedRoutes setNotification={setNotification}/> 
          </Router>

          {notification && <Notification setNotification={setNotification}/>}
      </ContextState>
    </>
  );
}

export default App;
