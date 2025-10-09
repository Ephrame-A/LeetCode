use std::collections::HashMap;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
       let mut hash = HashMap::new();
       for i in nums {
            *hash.entry(i).or_insert(0) += 1;
       }
    for (i, j) in hash.iter() {
        if *j==1 {
            return *i as i32;
        }
    }
    1
    }
}