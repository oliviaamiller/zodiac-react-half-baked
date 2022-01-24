import './App.css'
import Footer from './Footer/Footer.js'
import Main from './Main/Main.js'
import Header from './Header/Header.js'
import { zodiac } from './data.js'
{/* import the zodiac array */}

function App(props) {
  return (
    <div className="App">
      {/* import and use the Header, Main, and Footer components here */
        <><Header name={props.name} />
          <Footer year={props.year}/>
          <Main zodiacs={zodiac} />
        </>
      }
      {/* the Header component needs a string passed in as the `name` prop */}
      
      
      {/* the Footer component needs a year passed in as the `year` prop */}
      

      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      
    </div>
  )
}

export default App
