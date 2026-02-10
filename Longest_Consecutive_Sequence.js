const longestConsecutive = (nums) => {
    const set = new Set(nums);
    let maxLength = 0;
    for(let i = 0; i < nums.length; i++) {
        if(!set.has(nums[i] - 1)) {
            let length = 0
            while(set.has(nums[i]+length)) {
                length++
            }
             maxLength = Math.max(maxLength, length)
        }
       
    }

    return maxLength
}


console.log(longestConsecutive([100,4,200,1,3,2]))