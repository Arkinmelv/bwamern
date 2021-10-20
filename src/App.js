import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return <div className="App">
    <Router>
      <Route path="/" component={LandingPage}></Route>
    </Router>
  </div>;
}

export default App;