import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return (
    <p className='text-[10px] leading-[15px] font-[500] text-white ' >{ children }</p>
  )
}

Paragraph.propTypes = {
      children: PropTypes.string.isRequired
}

export default Paragraph