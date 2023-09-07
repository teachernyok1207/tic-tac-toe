import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Confetti from "react-confetti";
import Board from './Board';

const styles = {
    width: 'auto',
    margin: '10px auto 0px auto',
};

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const [start, setStart] = useState(false);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <button className="game-button" onClick={handleStart} disabled={start}>
            New Game
        </button>
    )
    
    function handleStart(){
        setBoard(Array(9).fill(null))    
        setStart(true)
    }
    
    React.useEffect(()=>{
        if ((winner)||(board.indexOf(null) === -1)){
            setStart(false)   
        }
    })
    
    function GameText(){
        if (winner){
            return `Winner: ${winner}`
        }else if(board.indexOf(null) === -1){
            return `It's a Tie!`
        }else{
            return `Next Player: ${xIsNext ? "X" : "O"}`  
        }
    }
    
    return (
        <div className="game-set">
            {winner && <Confetti />}
            <h1 className="game-title">TIC-TAC-TOE</h1>
            <Board squares={board} onClick={handleClick} disabled={!start}/>
            <div style={styles}>
                <p className="game-text"><GameText /></p>
            </div>
            {renderMoves()}
        </div>
    )
}

export default Game;