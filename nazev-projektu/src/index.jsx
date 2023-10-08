import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './component/Registrationn/reistr';

const App = () => {
  return (
    <div className="container">
      <Registration />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
