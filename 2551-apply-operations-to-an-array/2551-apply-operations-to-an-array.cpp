class Solution {
public:
    vector<int> applyOperations(vector<int>& nums) {
        for(int i=0; i<nums.size()-1; i++){
            if(nums[i] == nums[i + 1]){
                nums[i]=nums[i]*2;
                nums[i+1]=0;
                
            }
        }
          int c = 0;
         for(int i=0; i<nums.size(); i++){
            if(nums[i]==0)
                c++;
         }
         nums.erase(remove(nums.begin(), nums.end(), 0), nums.end());
      
        
         while(c>0){
            nums.push_back(0);
            c--;
         }
        return nums;
    }
};