import React, { useState } from 'react'
import Button from '../Button/Button'
import './ModalEdit.css'

const Modal = ({ onClose, children, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

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
            placeholder="Digite o novo nome:" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input 
            type="text" 
            placeholder="Digite o novo valor:" v
            alue={value} onChange={(e) => setValue(e.target.value)} 
          />
          <Button onClick={handleSubmit} children={'Enviar'}className={'btn'}/>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  )
}

export default Modal