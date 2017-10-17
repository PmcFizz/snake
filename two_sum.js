/**
 * Created by FizzPang on 2017/8/21.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// let twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = nums.length; j > i; j--) {
//             if (nums[j] === target - nums[i]) {
//                 return [i, j];
//             }
//
//         }
//     }
// };

let twoSum = (nums, target) => {
    var reArr = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (reArr.indexOf(diff) > -1) {
            let returnArr = [i, reArr.indexOf(diff)]
            return returnArr;
        }
        reArr.push(nums[i]);
    }
};

const arr = [2, 5, 7, 11, 19];
const target = 9;
let res = twoSum(arr, target);
console.log(res);