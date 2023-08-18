import "./App.css";
import { useState } from "react";

function App() {

  const [count , setCount] = useState(0)

  function decreaseHandler(){
    setCount(count - 1)
  }

  function increaseHandler(){
    setCount(count + 1)
  }

  function resetHandler(){
      setCount(0)
  }


  return (
    <div className="w-[100vw] h-[100vh] bg-[#344151] flex items-center justify-center flex-col gap-8">
      <div className="text-[#0398d4] font-medium text-2xl"> Increment & decrement</div>
      <div className="flex justify-center items-center bg-white gap-10 rounded-sm py-2 text-[#344151] text-[25px]" >
        <button onClick={decreaseHandler} className="border-r-2 w-20 text-center border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="text-5xl font-bold gap-12">
            {count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 w-20 text-center border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] py-2 px-5 rounded text-white text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
