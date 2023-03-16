import React from 'react';
import './EmptyCard.css';


function Card(props) {

  return (
    <div className="card" onClick={() => props.onClick()}>
      <div className='add'>+</div>
    </div>
  );
}

export default Card;