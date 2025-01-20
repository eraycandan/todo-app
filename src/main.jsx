import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './scss/style.scss';
import { TodoProvider } from './context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(

  //! context apiden gelen provider
  <TodoProvider>
    <App />
  </TodoProvider>

)
