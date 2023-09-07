import React from 'react';

const style = {
    background: '#E6E166',
    border: '2px solid #97921C',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, disabled, onClick }) => (
    <button className="game-square" style={style} onClick={onClick} disabled={disabled}>
        {value}
    </button>
);

export default Square;