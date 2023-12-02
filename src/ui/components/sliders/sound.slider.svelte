<script lang="ts">
  /* imports */
  import Slider from '../../atoms/slider.svelte'
  import { MapInputValueToValue, MapValueToInputValue, VolumeSettings } from '../../../types/common'
  import { changeSoundVolume } from '../../../support/cookies'
  import { soundVolume } from '../../../stores/sounds.store'

  /* constants */
  const initialValue = MapValueToInputValue[$soundVolume]
  
  /* functions */
  function onChange(e: CustomEvent<{ value: string }>) {
    const number = parseInt(e.detail.value)
    const volume = MapInputValueToValue[number]
    changeSoundVolume(volume)
    soundVolume.set(volume)
  }
</script>

<!-- template -->
<Slider
  label={VolumeSettings.label}
  min={VolumeSettings.min}
  max={VolumeSettings.max}
  step={VolumeSettings.step}
  value={initialValue}
  datalist={VolumeSettings.datalist}
  on:input={onChange}
/>