function pivotIndex(nums: number[]): any {
    let lnums:number[]=[];
    let rnums:number[]=[];
    let count=0;
    for(let i=0;i=(nums.length)/2;i++){
        lnums[i] += nums[i];
        rnums[i] += nums[i];
        if(lnums[i]=rnums[i]){
            {
                count++;
            }
        }
    }
};
