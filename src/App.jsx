import './App.css'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

function App() {

  return (
    <>
        <div className='page-container'>
          <Header></Header>
          <Nav></Nav>

          <div className='content'>
          </div>

          <Footer></Footer>
        </div>
    </>
  )
}

export default App
