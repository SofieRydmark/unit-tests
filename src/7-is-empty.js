export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === '' ? true : false
  } else if( type === 'object' ) {
   return Object.keys(stringArrayOrObject).toString() === '' ? true : false
  }
}
