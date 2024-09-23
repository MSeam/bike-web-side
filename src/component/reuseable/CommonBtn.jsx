import React from 'react'

function CommonBtn(props) {

  const {title, btnPadding, btnMargin} = props

  return (
    <button
    
      style={{
        backgroundColor: "#E76F51",
        border: "none",
        color: "#ffffff",
        borderRadius: "5px",
        padding: btnPadding,
        fontSize: "18px",
        marginTop: btnMargin
      }}
    
    >{title}</button>
  )
}

export default CommonBtn