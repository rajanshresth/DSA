function runningSum(nums: number[]): number[] {
    let cos:number=nums.length;
    const result:number[]=[];
    result[0]=nums[0];
    for(let i:number=1; i<cos;i++){
        result[i]=nums[i]+result[i-1];
    }
    return result;
};

/* const arr=[1,2,3,4];
console.log(runningSum(arr)); */