var removeDuplicates = function (nums) {
  const set = new Set(nums);
  nums.length = 0;
  nums.push(...set);
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
