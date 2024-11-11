import Footer from './Components/Footer/Footer'
import './index.css'
import Routes from './Routes'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
