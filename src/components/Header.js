import PropTypes from 'prop-types' /* kisayol impt */
import Button from "./Button";
import Tasks from "./Task"; 

function Header({title}) {

  const onClick = () => {
    console.log("Click");
  } 

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick}/* backgroundColor={"green"} *//>
      <Tasks/>
    </header>
  )
}

Header.defaultProps = {
  title:"Default title as props"
}

export default Header
