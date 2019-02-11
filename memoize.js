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

const memoizedQueryBy = function () {
  let cache = {};
  return function (id) {
    if (id in cache) {
      console.log('Fetching from cache');
      return cache[id];
    }
    else {
      console.log('Querying Element');
      let result = document.querySelector(id);
      cache[id] = result;
      return result;
    }
  }
}

const findById = memoizedById();
const queryMem = memoizedQueryBy();

console.log(findById('cookie'));
console.log(findById('cookie'));

console.log(findById('cake'));
console.log(findById('cake'));

console.log(queryMem('#cookie'));
console.log(queryMem('#cookie'));

console.log(queryMem('#cake'));
console.log(queryMem('#cake'));