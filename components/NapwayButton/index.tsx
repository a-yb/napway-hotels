import React, { Component } from 'react'
import styles from './NapwayButton.module.css'
import ReactTooltip from 'react-tooltip'

interface Props {
  children: React.ReactNode
  disabled: boolean
}

class NapwayButton extends Component<Props> {
  state = { showTooltip: false }

  componentDidMount() {
    this.setState({ showTooltip: true })
  }

  render(): React.ReactNode {
    return (
      <>
        {this.state.showTooltip && (
          <ReactTooltip place="top" backgroundColor="rgba(0,0,0,0.8)" />
        )}
        <button
          className={styles.btn}
          disabled={this.props.disabled}
          onClick={() => {
            alert('clicked!')
          }}
        >
          <div data-tip="Renting System currently in development!">
            {this.props.children}
          </div>
        </button>
      </>
    )
  }
}

export default NapwayButton
