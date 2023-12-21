export const handle = async({event, resolve}) => {
  const response = await resolve(event, {
    transformPageChunk: ({html}) => {
      let currentTheme = event.cookies.get('theme')
      let currentScreen = event.cookies.get('screen')
      let soundActive = event.cookies.get('sound_active')
      let soundVolume = event.cookies.get('sound_volume')
      if (!currentTheme) { currentTheme = 'violet' }
      if (!currentScreen) { currentScreen = 'fish' }
      if (!soundActive) { soundActive = 'false' }
      if (!soundVolume) { soundVolume = '0.05' }
      return html
        .replace(`data-theme="violet"`, `data-theme="${currentTheme}"`)
        .replace(`data-screen="fish"`,  `data-screen="${currentScreen}"`)
        .replace(`data-sound-active="false"`, `data-sound-active="${soundActive}"`)
        .replace(`data-sound-volume="0.05"`, `data-sound-volume="${soundVolume}"`)
    }
  });
  return response;
}