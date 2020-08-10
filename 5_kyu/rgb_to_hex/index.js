function rgb(r, g, b){
  const colors = [r, g, b];
  
  return colors
    .map(color => color > 255 ? 255 : color)
    .map(color => color < 0 ? 0 : color)
    .map(color => color.toString(16))
    .map(color => color.length < 2 ? `0${color}` : color)
    .join('')
    .toUpperCase();
}