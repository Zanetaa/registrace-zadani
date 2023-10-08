import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <div className="container"></div>
      <header>
        <div className="logo" />
        <h1>React webová aplikace Ahoj </h1>
      </header>
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí{' '}
          <a href="https://www.npmjs.com/package/create-czechitas-app">
            create-czechitas-app
          </a>
          .
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
