<!-- script -->
<script lang="ts">
  /* svelte imports */
  import { onMount } from 'svelte'
  /* support imports */
  import { prefixDateValue } from '../../../../src/support/extensions'

  /* refs */
  let hoursRef: HTMLDivElement | null = null
  let minutesRef: HTMLDivElement | null = null
  let secondsRef: HTMLDivElement | null = null
  /* constants */
  const d: Date = new Date()
  const months: string[] = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ]
  /* state */
  let date: string = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  /* functions */
  function setClock() {
    if (!hoursRef || !minutesRef || !secondsRef) { return }
    const date = new Date()
    const s = date.getSeconds() * 6
    const m = date.getMinutes() * 6 + (s / 60)
    const h = ((date.getHours() % 12) / 12) * 360 + 90 + m / 12
    hoursRef.style.transform = `rotate(${h}deg)`
    minutesRef.style.transform = `rotate(${m}deg)`
    secondsRef.style.transform = `rotate(${s}deg)`
  }
  function startClock() {
    setClock()
    setInterval(setClock, 1000)
  }
  function startDateTimer() {
    setInterval(() => {
      const d = new Date()
      date = `${prefixDateValue(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()}`
    }, 60000)
  }
  /* load */
  onMount(() => {
    startClock()
    startDateTimer()
  })
</script>

<!-- template -->
<div class="clock">
  <div class="container">
    <div class="face">
    <div
      bind:this={hoursRef}
      class="hour"
      style:transform={`rotate(${((((new Date()).getHours()) % 12) / 12) * 360 + 90 + ((new Date()).getMinutes() * 6 + ((new Date()).getSeconds() * 6) / 60) / 12}deg)`}
    />
    <div
      bind:this={minutesRef}
      class="minute"
      style:transform={`rotate(${(new Date()).getMinutes() * 6 + ((new Date()).getSeconds() * 6) / 60}deg)`}
    />
    <div
      bind:this={secondsRef}
      class="second"
      style:transform={`rotate(${(new Date()).getSeconds() * 6}deg)`}
    />
    </div>
  </div>
  <div class="text-container">
    <p class="date-container">{date}</p>
  </div>
</div>

<!-- style -->
<style>
@keyframes bg-color {
  0% { background-color: #402f6e; }
  50% { background-color: #0F2F5F; }
  100% { background-color: #2B4162; }
}
.clock {
  /* flex */
  display: flex;
  flex-direction: column;
}
.text-container {
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
  /* size */
  width: 132px;
  /* margins */
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  /* border */
  border: 1px solid var(--color-highlight);
  border-bottom-width: 3px;
  border-top: 1px;
  /* colors */
  background-color: #402f6e;
  background-image: url(/bg-texture.png);
  box-shadow: #402f6e30 1px 1px 1px 1px;
  /* animation */
  animation: bg-color 9s linear infinite alternate-reverse;
}
.text-container > p {
  /* fonts */
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  /* color */
  color: var(--color-highlight);
  text-shadow: 1px 0px var(--color-neon-blue), 0px -1px var(--color-neon-violet);
}
.container {
  /* size */
  width: 132px;
  height: 120px;
  /* position */
  position: relative;
  /* border */
  border: 1px solid var(--color-highlight);
  /* colors */
  background-color: #402f6e;
  background-image: url(/bg-texture.png);
  box-shadow: #402f6e30 1px 1px 1px 1px;
  /* animation */
  animation: bg-color 9s linear infinite alternate-reverse;
}
.face {
  /* size */
  width: 100%;
  height: 100%;
}
.hour {
  /* size */
  width: 0;
  height: 0;
  /* position */
  position:absolute;
  top: 50%;
  left: 50%;
  transform-origin: 100% 50%;
  /* margins */
  margin: -1px 0 -4px -10%;
  padding: 1px 0 4px 10%;
  /* color */
  background: var(--color-highlight);
}
.hour:after {
  /* content */
  content: "";
  /* position */
  position: absolute;
  right: 100%;
  top: 0px;
  transform-origin:100% 50%;
  /* size */
  width: 0px;
  height: 0px;
  /* borders */
  border-top: 3px solid transparent;
  border-right: 25px solid var(--color-highlight);
  border-bottom: 2px solid transparent;
}
.minute {
  /* size */
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50% 100%;
  /* margins */
  margin: -48px 0.5px 0 0;
  padding: 47px 0.5px 0;
  /* colors */
  background: var(--color-highlight);
}
.minute:after {
  /* content */
  content:"";
  /* position */
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  transform-origin: -50% 100%;
  /* size */
  width: 0px;
  height: 0px;
  /* border */
  border-top: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 45px solid var(--color-highlight);
}
.second {
  /* size */
  width: 0;
  height: 0;
  /* position */
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50% 100%;
  /* margins */
  margin: -55px 0.5px 0 0;
  padding: 54px 0.5px 0;
  /* color */
  background: var(--color-highlight);
}
.second:after{
  /* content */
  content: "";
  /* position */
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
  transform-origin: -50% 100%;
  /* size */
  width: 0px;
  height: 0px;
  /* border */
  border-top: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 53px solid var(--color-highlight);
}
.face:after {
  /* content */
  content:"";
  /* position */
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  /* size */
  width: 10px;
  height: 10px;
  /* margins */
  margin:-6px 0 0 -6px;
  /* color */
  background-color: #402f6e;
  background-image: url(/bg-texture.png);
  /* border */
  border: 1px solid var(--color-highlight);
  /* animation */
  animation: bg-color 9s linear infinite alternate-reverse;
}
</style>