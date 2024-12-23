// all numbers in the array need to be heading in a single direction
// platueas are not permitted

// all numbers must be with in 3 of each other

// one peak can be forgiven
// one outlier can be forgiven

export const isLinear = function (arrNum) {
  if (
    arrNum.every((curr, index) => curr < arrNum[index]) ||
    arrNum.every((curr, index) => curr > arrNum[index])
  ) {
    return true;
  } else {
    return false;
  }
};
