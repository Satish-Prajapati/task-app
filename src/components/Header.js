import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title, toggleAdd, showAdd}) => {
    const onClick = (e) => {
        toggleAdd()
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

//For inline style={{ /CSS/ }}
// const headerStyle = {
//     color: 'red',
//     background: 'black'
// }

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
