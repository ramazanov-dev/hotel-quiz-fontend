import ReactDOM from 'react-dom/client'
import {AppRouter} from './components/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import {IconsCollection} from "./components/Icon";
import "./styles/null.css"
import "./styles/variables.css"
import "./styles/globalStyles.css"
import App from './components/App';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <IconsCollection/>
    <App/>
  </BrowserRouter>
)
