export const handle = async({event, resolve}) => {
  const response = await resolve(event, {
    transformPageChunk: ({html}) => {
      let currentTheme = event.cookies.get('theme')
      let currentScreen = event.cookies.get('screen')
      if (!currentTheme) { currentTheme = 'violet' }
      if (!currentScreen) { currentScreen = 'fish' }
      return html
        .replace(`data-theme="violet"`, `data-theme="${currentTheme}"`)
        .replace(`data-screen="fish"`, `data-screen="${currentScreen}"`)
    }
  });
  return response;
}