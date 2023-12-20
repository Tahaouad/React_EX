import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { uname, upass } = e.target.elements;
    setName(uname.value);

    const userData = db.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== upass.value) {
        setError({ name: 'upass', message: errors.upass });
      } else {
        setIsSubmit(true);
      }
    } else {
      setError({ name: 'uname', message: errors.uname });
    }
  };

  const renderError = (name) =>
    name === error.name && <div className='error'>{error.message}</div>;

  const renderForm = (
    <div className='login-form'>
      <div className='title'>Connexion</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label>L'identifiant</label>
            <input type='text' name='uname' required />
            {renderError('uname')}
          </div>
          <div className='input-container'>
            <label>Mot de passe</label>
            <input type='password' name='upass' required />
            {renderError('upass')}
          </div>
          <div className='button-container'>
            <button type='submit'>Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );

  const db = [
    { username: 'Tahaouad', password: '12345' },
    { username: 'AhmadDouyry', password: '54321' },
  ];

  const errors = {
    uname: 'Votre identifiant est incorrect.',
    upass: 'Votre mot de passe est incorrect.',
  };

  return (
    <div className='app'>
      {isSubmit ? (
        <div>
          <div className='title'>Accueil</div>
          <div>Bonjour {name}</div>
        </div>
      ) : (
        renderForm
      )}
    </div>
  );
}

export default App;
