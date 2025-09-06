function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    return "This is a name function";
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    return "This is an anonymous function";
  };
}