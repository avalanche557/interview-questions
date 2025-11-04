import { useRef, useState } from 'react';
import './App.css';

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink']
const DIAMETER = 20

const Circle = ({clientX, clientY, color}) => {
  return(
    <span
      style={{
        position: 'absolute',
        top:clientY - DIAMETER,
        left: clientX - DIAMETER,
        backgroundColor: color,
        borderRadius: "50%",
        height: `${DIAMETER}px`,
        width: `${DIAMETER}px`,
      }}
    />
  )
}

function App() {
  const boxref = useRef(null)
  const [circleList, setCircleList] = useState([])
  const [stack, setStack]= useState([])

  const generateCircle = (event) => {
    if(boxref.current) {
      const {clientX, clientY} = event
      const rect = boxref.current.getBoundingClientRect()
      const _clientX = clientX - rect.left;
      const _clientY = clientY - rect.top;
      const colorIndex =  Math.floor((Math.random() * 10 ) - 5) 
      console.log(colorIndex)
      const color = COLORS[colorIndex]
      if(colorIndex >= 0) {
        setCircleList([...circleList, {id: Date.now(), clientX:_clientX, clientY:_clientY, color}])
      }
    }
  }

  const undoClick = () => {
    const value = circleList.pop()
    setStack([...stack, value])
    setCircleList([...circleList])
  }

  const redoClick = () => {
    const value = stack.pop()
    setStack([...stack])
    setCircleList([...circleList, value])
  }

  const resetClick = () => {
     setStack([])
    setCircleList([])
  }

  return (
   <div className='gameContainer'>
     <div className='actionConatiner'>
          <button onClick={undoClick}>Undo</button>
          <button onClick={redoClick}>Redo</button>
          <button onClick={resetClick}>Reset</button>
        </div>
      <div className='circleContainer' onClick={generateCircle} ref={boxref}>
       
        {circleList.map((circle) => {
          return(<Circle clientX={circle.clientX} clientY={circle.clientY} color={circle.color}/>)
        })}
      </div>
   </div>
  );
}

export default App;
