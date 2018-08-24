//Your code here
const justInvoke = function (fn) {
  return fn();
}

const setThisWithCall = function (fn, object, value) {
  return fn.call(bob, value);
}
