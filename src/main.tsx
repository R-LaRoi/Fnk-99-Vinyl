
import { BrowserRouter  as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx'
import './index.css'


// const domain: string = process.env.VITE_AUTH0_DOMAIN as string
// const clientId: string = process.env.VITE_CLIENT_ID as string



ReactDOM.createRoot(document.getElementById('root')!).render(
<Auth0Provider
// domain={domain}
// clientId={clientId}
  domain="dev-bjnhccdumqc8ddxz.us.auth0.com"
  clientId="mz3rjloOk8dQA5BycrzgIRXx50FmnGkE"
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <Router>
  <App />
  </Router>
  </Auth0Provider>
)


