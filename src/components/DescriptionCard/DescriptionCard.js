import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '@components/Button'
import './DescriptionCard.css'
import { navigate } from 'gatsby'

function DescriptionCard({ noCrown, noButton, longDescription, titleStyle, title, description }) {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 className="title" style={titleStyle}> {title} </h1>
      <p className={classnames('description', { 'description-long': longDescription })}>{description}</p>
      {
        !noButton &&
        <Button className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Collections → </Button>
      }
    </div>
  )
}

DescriptionCard.propTypes = {
  noCrown: PropTypes.bool,
  longDescription: PropTypes.bool,
  noButton: PropTypes.bool,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string
}


DescriptionCard.defaultProps = {
  title: 'Gatsby Fashion',
  description: 'Open-Source app coded in React / Gatsby on top of a creative design suitable for fashion.'
}

export default DescriptionCard