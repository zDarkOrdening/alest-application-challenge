import React, { useState } from 'react';
import Button from '../Button/Button';
import './Modal.css';

const Modal = ({ onClose, children, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!title || !value) {
      setError('Por favor, preencha todos os campos!');
      return;
    }
    onSubmit(title, value);
    setError('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>{children}</h3>
          <button type="button" className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Digite o nome:"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Digite o valor:"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            required
          />
          <Button onClick={handleSubmit} children={'Enviar'} className={'btn'} />
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;