import ReactDOM from 'react-dom/client'
import { AppRouter } from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import "./styles/null.css"
import "./styles/variables.css"
import "./styles/globalStyles.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
)
