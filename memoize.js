let cache = {};

function memoizedById(id) {
  return memoizedQueryBy('#' + id);
}

function memoizedQueryBy(selector) {
  if (selector in cache) {
    console.log('Fetching from cache');
    return cache[selector];
  }
  console.log('Querying Element');
  let result = document.querySelector(selector);
  cache[selector] = result;
  return result;
}

const findById = memoizedById;
const queryMem = memoizedQueryBy;

console.log(findById('cookie'));
console.log(findById('cookie'));

console.log(findById('cake'));
console.log(findById('cake'));

console.log(queryMem('#cookie'));
console.log(queryMem('#cookie'));

console.log(queryMem('#cake'));
console.log(queryMem('#cake'));