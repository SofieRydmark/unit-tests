export const hashtags = (text) => {
  const hashtags = []
  text.split(' ').find((word)=> word[0] === '#' ? hashtags.push(word) : word)
  return hashtags
}
