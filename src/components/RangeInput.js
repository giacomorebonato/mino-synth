import React from 'react'

import Label from './Label'

/**
 * Input range
 * @param {object} props Component props
 * @param {string} props.label Input label
 * @param {number} [props.max]
 * @param {number} [props.min]
 * @param {function} props.onChange
 * @param {number} [props.step]
 * @param {number|string} [props.value]
 */
export default function RangeInput({
  label,
  max = 10,
  min = -10,
  onChange,
  step = 1,
  value
}) {
  let floatValue = value ? value : parseFloat('0')

  if (typeof floatValue === 'string') {
    floatValue = parseFloat(floatValue)
  }

  return (
    <div className='mb-4'>
      <Label>{label}</Label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type='range'
        min={min}
        max={max}
        step={step}
        onChange={e => {
          onChange(parseFloat(e.target.value))
        }}
        value={floatValue}
      />
      {floatValue}
    </div>
  )
}
