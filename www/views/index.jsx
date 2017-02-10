import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {increase} from '../actions/actions.js'

class Index extends React.Component {
  render() {
    return (
      <div>
        <span><button onClick={this.props.onIncreaseClick}>click</button></span>
        <span>{this.props.value}</span>
      </div>
    )
  }
}

Index.propTypes = {
  value:           PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: (number) => dispatch(increase(3))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)