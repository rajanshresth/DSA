/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

function majorityElement(nums: number[]): any {
    let majorityElement=nums.length/2;
    let i=0,count=0;
    for(let j=0;j<nums.length;j++){
        let sum=nums[j];
    if(nums[i]=nums[j]){
        count +=1;
    } 
    
    if(majorityElement>count){
        return sum;
    }
}
}; 