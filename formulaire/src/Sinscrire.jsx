import React, { useState } from 'react';

function Sinscrire() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [photo, setPhoto] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();

    
    setUsername('');
    setPassword('');
    setDob('');
    setCity('');
    setGender('');
    setHobbies([]);
    setPhoto(null);

  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setHobbies((prevHobbies) =>
      isChecked ? [...prevHobbies, value] : prevHobbies.filter(hobby => hobby !== value)
    );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <div className='registration-form'>
      <div className='title'>Inscription</div>
      <form onSubmit={handleRegistration}>
        <div className='input-container'>
          <label>Identifiant</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className='input-container'>
          <label>Mot de passe</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className='input-container'>
          <label>Date de naissance</label>
          <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div className='input-container'>
          <label>Ville</label>
          <select value={city} onChange={(e) => setCity(e.target.value)} required>
            <option value=''>Sélectionnez votre ville</option>
            <option value='Casa'>CasaBlanca</option>
            <option value='Kech'>marakech</option>
          </select>
        </div>
        <div className='input-container'>
          <label>Genre</label>
          <div>
            <label>
              <input type='radio' name='gender' value='male' onChange={(e) => setGender(e.target.value)} required />
              Homme
            </label>
            <label>
              <input type='radio' name='gender' value='female' onChange={(e) => setGender(e.target.value)} required />
              Femme
            </label>
           
          </div>
        </div>
        <div className='input-container'>
          <label>Loisirs</label>
          <div>
            <label>
              <input type='checkbox' value='sports' onChange={handleCheckboxChange} />
              Sports
            </label>
            <label>
              <input type='checkbox' value='music' onChange={handleCheckboxChange} />
              Musique
            </label>
          </div>
        </div>
        <div className='input-container'>
          <label>Photo</label>
          <input type='file' accept='image/*' onChange={handleFileChange} />
        </div>
        <div className='button-container'>
          <button type='submit'>S'inscrire</button>
        </div>
      </form>
    </div>
  );
}

export default Sinscrire;
