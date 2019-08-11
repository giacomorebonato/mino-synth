import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Tone from 'tone'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Label from '../components/Label'
import Button from '../components/Button'
import RangeInput from '../components/RangeInput'
import Select from '../components/Select'

// presets
// https://github.com/Tonejs/Presets/blob/gh-pages/instrument/NoiseSynth/Gravel.json

let preset = {
  noise: {
    type: 'pink',
    playbackRate: 0.1
  },
  envelope: {
    attack: 0.5,
    decay: 2.0,
    sustain: 0.5,
    release: 3.0
  }
}

function IndexPage({ noiseSynth = new Tone.NoiseSynth(preset).toMaster() }) {
  let [config, setConfig] = useState(preset)
  let [volume, setVolume] = useState(0)

  noiseSynth.set(config)

  useEffect(() => {
    noiseSynth.volume.value = volume
  }, [volume])

  new Tone.Envelope(config.envelope)

  return (
    <Layout>
      <SEO title='Noise-synth' />
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div className='px-6 py-4'>
          <RangeInput
            label='Volume'
            onChange={value => {
              setVolume(value)
            }}
            value={volume}
          />
          <div className='mb-4'>
            <Label htmlFor='noise-type'>Noise type</Label>
            <Select
              id='noise-type'
              onChange={value => {
                setConfig({ ...config, noise: { type: value } })
              }}
              value={config.noise.type}
            >
              <option value='brown'>Brown</option>
              <option value='pink'>Pink</option>
              <option value='white'>White</option>
            </Select>
          </div>
          <RangeInput
            label='Attack'
            max={1}
            min={0}
            step={0.01}
            onChange={value => {
              let envelope = { ...config.envelope, attack: value }

              setConfig({ ...config, envelope })
            }}
            value={config.envelope.attack}
          />
          <RangeInput
            label='Decay'
            max={1}
            min={0.01}
            step={0.01}
            onChange={value => {
              let envelope = { ...config.envelope, decay: value }

              setConfig({ ...config, envelope })
            }}
            value={config.envelope.decay}
          />
          <RangeInput
            label='Sustain'
            max={1}
            min={0}
            step={0.01}
            onChange={value => {
              let envelope = { ...config.envelope, sustain: value }

              setConfig({ ...config, envelope })
            }}
            value={config.envelope.sustain}
          />
          <RangeInput
            label='Release'
            max={1}
            min={0}
            step={0.01}
            onChange={value => {
              let envelope = { ...config.envelope, release: value }

              setConfig({ ...config, envelope })
            }}
            value={config.envelope.release}
          />
          <Button
            onMouseUp={() => {
              noiseSynth.triggerRelease()
            }}
            onMouseDown={() => {
              noiseSynth.triggerAttack()
            }}
          >
            Play
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
