function deleteNth(arr,n){
  // Reduce the array and keep a list of entries that have exceeded n times to check
  const cache = {};
  return arr.reduce((acc, current) => {
    cache[current] ? cache[current] += 1 : cache[current] = 1;
    return cache[current] > n ? acc : [...acc, current];
  }, []);
}

console.log( deleteNth([20,37,20,21], 1));