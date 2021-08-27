import React from 'react'
import PropTypes from 'prop-types'

function Button({title,onClick,backgroundColor}) {
  

  return (
    <div>
      <button /* style={{backgroundColor: backgroundColor}} */ onClick={onClick} >{title}</button>
    </div>
  )
}

Button.defaultProps = {
  title:'add',
  color:"green",
  backgroundColor:"orage"
}
Button.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
