const fibonacci = function(n) {
  let a = 1;
  let b = 1;

  if (n === 1 || n === 2) {
    return 1;
  }

  for (let i = 3; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
