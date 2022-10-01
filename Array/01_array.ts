/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
 */

/**
 * 
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void { 
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=0){
        let temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
        i++;
	}}}