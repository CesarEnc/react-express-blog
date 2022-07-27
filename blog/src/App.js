import './App.css';
import HomePage  from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './components/NavBar';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className='App'>
    <Router>
    <NavBar/>
    <Routes>
    <Route path= "/" element={<HomePage/>}/>
    <Route path= "/about" element={<AboutPage/>}/>
    <Route path= "/articles-list" element={<ArticleList/>}/>
    <Route path= "/article/:name" element={<ArticlePage/>}/>
    </Routes>
    </Router>
    </div>

  )
}

export default App;
