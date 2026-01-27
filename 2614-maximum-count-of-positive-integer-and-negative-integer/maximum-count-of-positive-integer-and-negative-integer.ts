function maximumCount(nums: number[]): number {
    let posCount : number = 0;
    let negCount : number = 0;
    for(let i : number = 0;i<nums.length;i++){
        if(nums[i] < 0){
            negCount++;
        }else if(nums[i] > 0){
            posCount++;
        }else{
            continue;
        }
    }

    return posCount > negCount ? posCount : negCount;
};