const memoizedById = function () {
  let cache = {};
  return function (id) {
    if (id in cache) {
      console.log('Fetching from cache');
      return cache[id];
    }
    else {
      console.log('Finding Element');
      let result = document.getElementById(id);
      cache[id] = result;
      return result;
    }
  }
}

const findById = memoizedById();

console.log(findById('cookie'));
console.log(findById('cookie'));

console.log(findById('cake'));
console.log(findById('cake'));