import Desc from "./components/Desc"
import Content from "./components/Content"
import Footer from "./components/Footer"
import headerImg from './assets/header.svg'
import './App.css'


function App() {

  return (
    <div className="app">
        <img className="app__image" src={headerImg} alt="header" />
        <Desc />
        <Content />
        <Footer />
    </div>
  )
}

export default App
