// all numbers in the array need to be heading in a single direction
// platueas are not permitted

// all numbers must be with in 3 of each other

// one peak can be forgiven
// one outlier can be forgiven

export const isLinear = function (arrNum) {
  if (
    arrNum.every((curr, index) => {
      if (index === 0) {
        return true;
      } else {
        return curr < arrNum[index - 1];
      }
    }) ||
    arrNum.every((curr, index) => {
      if (index === 0) {
        return true;
      } else {
        return curr > arrNum[index - 1];
      }
    })
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(
  [1, 2].every((value, index, arr) => {
    if (index === 0) {
      return true;
    } else {
      return value > arr[index - 1];
    }
  })
);
