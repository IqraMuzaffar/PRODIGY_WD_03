import React, { useState } from "react";
import Square from "./Square";
function Boxgrid(){

    const [IsXturn, setXturn]=useState(true);
    const [State, setState]=useState(Array(9).fill(null));
    //check winner
    //display winner

    //reset game
   const handleReset=()=> {
        setState(Array(9).fill(null))
    }

    const checkWinner=()=>{

        const winners=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ]

       for (let winner of winners){
        const [a,b,c]=winner;
        if(State[a]!=null && State[a]===State[b] && State[b]===State[c]){
            return State[a];
        }
       }
       return false;
    }

 const isWinner=checkWinner(); 
    

   const handleClick = (index) => {
     if (State[index] !== null) {
       return;
     }
     const copyState = [...State];
     copyState[index] = IsXturn ? "X" : "O";
     setState(copyState);
     setXturn(!IsXturn);
   };

    return (
      <>
        {isWinner ? (
          <div>
            <h1> {`Congratulations, ${isWinner} is the winner!!`} </h1>
          </div>
        ) : (
          <div className="main">
            <h4>Player {IsXturn ? "X" : "O"}, please move</h4>

            <div className="board">
              <div className="row">
                <Square
                  onClick={() => handleClick(0)}
                  value={State[0]}
                ></Square>
                <Square
                  onClick={() => handleClick(1)}
                  value={State[1]}
                ></Square>
                <Square
                  onClick={() => handleClick(2)}
                  value={State[2]}
                ></Square>
              </div>
              <div className="row">
                <Square
                  onClick={() => handleClick(3)}
                  value={State[3]}
                ></Square>
                <Square
                  onClick={() => handleClick(4)}
                  value={State[4]}
                ></Square>
                <Square
                  onClick={() => handleClick(5)}
                  value={State[5]}
                ></Square>
              </div>
              <div className="row">
                <Square
                  onClick={() => handleClick(6)}
                  value={State[6]}
                ></Square>
                <Square
                  onClick={() => handleClick(7)}
                  value={State[7]}
                ></Square>
                <Square
                  onClick={() => handleClick(8)}
                  value={State[8]}
                ></Square>
              </div>
            </div>

            <div className="btn-container">
              <button onClick={handleReset} className="reset btn">
                Reset
              </button>

              {isWinner && (
                <button className="play-again btn">Play Again</button>
              )}
            </div>
          </div>
        )}
      </>
    );


    
}


export default  Boxgrid;