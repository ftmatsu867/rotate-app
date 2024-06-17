import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import "../styles/RightArea.scss"
const RightArea = ({rotate,setRotate}) => {
  // console.log(rotate)
  const pullRotate=()=>{
    setRotate((prev)=>{
      return prev-90
    })
  }
  const addRotate=()=>{
    setRotate((prev)=>{
      return prev+90
    })
  }
  return (
    <div className='rightArea'>
        <KeyboardDoubleArrowUpIcon onClick={pullRotate} className='arrow'/>        
        <p>Feature</p>
        <KeyboardDoubleArrowDownIcon onClick={addRotate} className='arrow'/>
    </div>
  )
}

export default RightArea