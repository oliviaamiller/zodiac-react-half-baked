import './App.css'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      {/* import and use the Header, Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <Header />
      
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer />

      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main />
      <h1>hello!</h1>
    </div>
  )
}

export default App
