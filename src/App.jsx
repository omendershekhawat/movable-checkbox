import { useState } from 'react'

import './App.css'
function App() {
  const [clickedTasks, setClickedTasks] = useState([]);
  const [leftData, setleftData] = useState([{id:"Item 1" ,value:"Item1"},{id:"Item 2",value:"Item2"},{id:"Item 3" ,value:"Item3"},{id:"Item 4" ,value:"Item4"}])
  const [rightData, setrightData] = useState([])



  const handleChange = (e) => {
    if (e.target.checked === true) {
      setClickedTasks([
    ...clickedTasks,
        {id: e.target.id, value:e.target.value}
      ]);
    } else {
      setClickedTasks(clickedTasks.filter((task) => {
        return task !== e.target.id;
      })
      )
    }
  }
  const leftORight = () => {
    setrightData([...rightData, ...clickedTasks])
    // console.log(...clickedTasks);
    setleftData(leftData.filter((task) => {
      return !clickedTasks.some((item) => item.id === task.id)
    }))
    setClickedTasks([])
  }
  const RightToLeft = () => {
    setleftData([...leftData, ...clickedTasks])
    setrightData(rightData.filter((task) =>{
      return !clickedTasks.some((item) => item.id === task.id)
      
      
    }))
    setClickedTasks([])

  }



  return (
    <>
      <div className='container'>

        <div className='left-box'>
          <ul>
            {
              leftData.map((item, index) => {
                return (
                  <li key={item.id}>
                    <input type="checkbox" id={item.id} value={item.value} onChange={handleChange} />
                    {item.value}

                  </li>
                )
              })
            }


          </ul>

        </div>
        <button onClick={leftORight}>Left To Right</button>
        <button onClick={RightToLeft}>Right To Left</button>


        <div className='right-box'>
          <ul>
            {
              rightData.map((item, index) => {
                return (
                  <li key={index + 1}>
                    <input type="checkbox" id={item.id} value={item.value} onChange={handleChange} />
                    {item.value}

                  </li>
                )
              })
            }

          </ul>
        </div>

      </div>
    </>
  )
}
export default App


