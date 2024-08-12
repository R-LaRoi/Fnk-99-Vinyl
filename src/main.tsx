
import { BrowserRouter  as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
 
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Auth0Provider
  domain='dev-bjnhccdumqc8ddxz.us.auth0.com'
  clientId='mz3rjloOk8dQA5BycrzgIRXx50FmnGkE'
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <Router>
  <App />
  </Router>
  </Auth0Provider>
)
