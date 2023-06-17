import './App.css';
import WelcomePage from './pages/WelcomePage';
import ExperiencePage from './pages/ExperiencePage';
import IntroAndProjectsPage from './pages/IntroAndProjectsPage';
import Footer from './pages/Footer';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <>
            <NavigationBar/>
            <WelcomePage />
            <IntroAndProjectsPage />
            <ExperiencePage />
            <Footer/>
        </>
    );
}

export default App;
