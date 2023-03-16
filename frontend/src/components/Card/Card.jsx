import React from 'react';
import './Card.css';
import Button from '../Button/Button';

function Card({ title, value, image, onEdit, onDelete }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <img src={'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/sollu/media/uploads/produtos/foto/bff4093e8b6513802-soft-preto-sollu-calcados-01.JPG' } alt={title} className="card-image" />
        <p className="card-value">R$ {value}</p>
      </div>
      <div className="btns">
        <Button onClick={onEdit} children={'Editar'} className={'btn1'} />
        <Button onClick={onDelete} children={'Deletar'} className={'btn2'} />
      </div>
    </div>
  );
}

export default Card;