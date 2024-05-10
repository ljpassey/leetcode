var rotate = function (nums, k) {
    // splice the array from the end k indexes and then unshift it to the beginning
    return nums.unshift(...nums.splice(nums.length - k, k));
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]