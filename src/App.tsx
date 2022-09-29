import './App.scss';
import reactLogo from './assets/react.svg';
import { cards, headerProps } from './Data';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Main, MainProps } from './layout/Main';

function App() {
   const mainProps: MainProps = {
    cards,
  };
  return (
    <div className="App">
      <Header {...headerProps} />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Masszázs és Ajaktöltés</h1>
      <Main {...mainProps}/>

      <Footer />
    </div>
  );
}

export default App;
