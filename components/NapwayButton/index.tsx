import React from 'react'

import styles from './NapwayButton.module.css'

import ReactTooltip from 'react-tooltip'

interface NapwayButtonProps {
  text: string
  disabled: boolean
}

function NapwayButton(props: NapwayButtonProps) {
  return (
    <>
      <ReactTooltip place="top" backgroundColor="rgba(0,0,0,0.8)" />
      <button
        className={styles.btn}
        disabled={props.disabled}
        onClick={() => {
          alert('clicked!')
        }}
      >
        <p data-tip="Renting System currently in development!">{props.text}</p>
      </button>
    </>
  )
}

export default NapwayButton
