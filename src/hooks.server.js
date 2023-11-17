export const handle = async({event, resolve}) => {
  const response = await resolve(event, {
    transformPageChunk: ({html}) => {
      let currentTheme = event.cookies.get('theme');
      if (!currentTheme) { currentTheme = 'violet' }
      return html
        .replace(`data-theme="violet"`, `data-theme="${currentTheme}"`)
    }
  });
  return response;
}