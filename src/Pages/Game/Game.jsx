import React, { useEffect, useState, useRef } from "react";
import { FiShuffle, FiRefreshCw } from "react-icons/fi";
import img from '../../assets/raju.jpg'

// Sliding Puzzle (3x3) — single-file React component
// Requirements satisfied: React + Tailwind CSS + react-icons
// Usage: drop this file as App.jsx (or App.tsx with minor tweaks) into a Vite/CRA React project
// Make sure Tailwind CSS and react-icons are installed and configured.

const GRID_SIZE = 3;
const SOLVED = [1,2,3,4,5,6,7,8,0]; // 0 is the blank

function countInversions(arr){
  const a = arr.filter(x => x !== 0);
  let inv = 0;
  for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
      if(a[i] > a[j]) inv++;
    }
  }
  return inv;
}

function isSolvable(board){
  // For odd grid (3x3) puzzle is solvable if inversion count is even
  return countInversions(board) % 2 === 0;
}

function shuffleBoard(){
  let arr = [...SOLVED];
  // Fisher-Yates shuffle until solvable and not solved
  do{
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  } while(!isSolvable(arr) || arr.join() === SOLVED.join());
  return arr;
}

function indexToCoord(index){
  return { row: Math.floor(index / GRID_SIZE), col: index % GRID_SIZE };
}

function areAdjacent(i1, i2){
  const a = indexToCoord(i1);
  const b = indexToCoord(i2);
  const dr = Math.abs(a.row - b.row);
  const dc = Math.abs(a.col - b.col);
  return (dr + dc) === 1;
}

export default function Game(){
  const [board, setBoard] = useState(SHUFFLE_ON_FIRST_RENDER());
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // start timer when component mounts or when board changes from initial
    clearInterval(timerRef.current);
    setSeconds(0);
    timerRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  if (won) {
    clearInterval(timerRef.current);   // ⛔ Timer Stop
  }
}, [won]);


  useEffect(() => {
    setWon(board.join() === SOLVED.join());
  }, [board]);

  useEffect(() => {
    function onKey(e){
      if(won) return;
      // arrow keys to move the blank
      const blankIndex = board.indexOf(0);
      const { row, col } = indexToCoord(blankIndex);
      let targetRow = row, targetCol = col;
      if(e.key === 'ArrowUp') targetRow = row + 1; // move tile down into blank
      if(e.key === 'ArrowDown') targetRow = row - 1;
      if(e.key === 'ArrowLeft') targetCol = col + 1;
      if(e.key === 'ArrowRight') targetCol = col - 1;
      if(targetRow === row && targetCol === col) return;
      if(targetRow < 0 || targetRow >= GRID_SIZE || targetCol < 0 || targetCol >= GRID_SIZE) return;
      const targetIndex = targetRow * GRID_SIZE + targetCol;
      attemptMove(targetIndex);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [board, won]);

  function attemptMove(tileIndex){
    const blankIndex = board.indexOf(0);
    if(!areAdjacent(tileIndex, blankIndex)) return false;
    const newBoard = [...board];
    [newBoard[blankIndex], newBoard[tileIndex]] = [newBoard[tileIndex], newBoard[blankIndex]];
    setBoard(newBoard);
    setMoves(m => m + 1);
    return true;
  }

  function onTileClick(i){
    if(won) return;
    attemptMove(i);
  }

  function shuffle(){
    const newBoard = shuffleBoard();
    setBoard(newBoard);
    setMoves(0);
    setSeconds(0);
    setWon(false);
  }

  function reset(){
    setBoard([...SOLVED]);
    setMoves(0);
    setSeconds(0);
    setWon(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">Pazzle 3*3</h1>
          <div className="flex gap-2 items-center">
            <button onClick={shuffle} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow hover:shadow-md border">
              <FiShuffle /> <span className="text-sm">Shuffle</span>
            </button>
            <button onClick={reset} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow hover:shadow-md border">
              <FiRefreshCw /> <span className="text-sm">Reset</span>
            </button>
          </div>
        </header>

        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {board.map((val, idx) => (
              <button
                key={idx}
                onClick={() => onTileClick(idx)}
                className={`aspect-square rounded-xl flex items-center justify-center text-2xl font-semibold transition-transform select-none ${val === 0 ? 'bg-transparent border border-dashed border-slate-200' : 'bg-sky-500 text-white shadow-lg hover:scale-105'}`}
                aria-label={val === 0 ? 'Blank tile' : `Tile ${val}`}>
                {val !== 0 ? val : ''}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-slate-600">
            <div>Moves: <span className="font-medium text-slate-800">{moves}</span></div>
            <div>Time: <span className="font-medium text-slate-800">{formatTime(seconds)}</span></div>
            <div className="text-right">
              <div>শর্ত: ১ থেকে ৮ নম্বর টাইল ঘুরাবে — ৯ নম্বর ঘর খালি।</div>
            </div>
          </div>

          {won && (
            <div className="mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
              🎉 অভিনন্দন! আপনি পাজেলটি সম্পূর্ণ করেছেন। Moves: {moves}, Time: {formatTime(seconds)}
            </div>
          )}

          <div className="mt-4 text-xs text-slate-500">
            টিপস: টাইলগুলো ক্লিক করে সরান বা কীবোর্ডের অ্যারো কী ব্যবহার করুন। Shuffle বোতাম চাপলে নতুন শাফল হবে।
          </div>
        </div>

        <footer className="mt-4 text-center text-xs text-slate-400">
         
        </footer>
      </div>
    </div>
  );
}

// ---------- helpers ----------
function formatTime(sec){
  const mm = String(Math.floor(sec / 60)).padStart(2, '0');
  const ss = String(sec % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

function SHUFFLE_ON_FIRST_RENDER(){
  // create a valid shuffled board on first render
  return shuffleBoard();
}
