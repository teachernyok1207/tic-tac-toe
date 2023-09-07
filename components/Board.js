import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid #97921C',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, disabled, onClick }) => (
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} disabled={disabled} />
        ))}
    </div>
)

export default Board;