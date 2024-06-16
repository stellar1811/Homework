import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
