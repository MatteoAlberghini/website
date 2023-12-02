<script>
  /* imports */
  import Slider from '../../atoms/slider.svelte'

</script>

<!-- template -->
<Slider
  label="icon size"
  min={0}
  max={100}
  step={50}
  value={50}
  datalist={['small', 'normal', 'large']}
/>