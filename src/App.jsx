import { BrowserRouter } from 'react-router-dom'
import AllRoute from './router/AllRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './css/font-awesome.min.css'
import './css/themify-icons.css'
import './css/animate.css'
import './css/flaticon.css'
import './sass/style.scss'

function App() {

  return (
    <div className="App" id='scrool'>
      <BrowserRouter>
        <AllRoute />
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
