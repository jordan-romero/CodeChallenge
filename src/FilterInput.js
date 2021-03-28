import { useState } from 'react'
import { mdiFilterVariant } from '@mdi/js'
import Icon from '@mdi/react'

export default function FilterInput({ filterTaskHandler }) {
  const [value, setValue] = useState('')

  const onChangeHandler = (event) => {
    setValue(event.target.value)
    filterTaskHandler(event.target.value)
  }

  return (
    <div className="input-container">
      <input
        onChange={(event) => onChangeHandler(event)}
        value={value}
        placeholder="Filter by task name"
      ></input>
      <div className="input-end-icon">
        <Icon path={mdiFilterVariant} size={1} color="rgba(31, 31, 31, 0.1)" />
      </div>
    </div>
  )
}
