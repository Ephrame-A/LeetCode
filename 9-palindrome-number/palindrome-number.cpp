class Solution {
public:
    bool isPalindrome(int x) {
        long  rev = 0; 
        int v = x;
     while(v>0)  {

rev = rev*10 + v % 10;
v /= 10;

     } 
     return x==rev;
    }
};