import PropTypes from 'prop-types'


const Button = ({text, onClick, color}) => {
    return <button onClick={onClick} className='btn' style={{background: color}} >{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
