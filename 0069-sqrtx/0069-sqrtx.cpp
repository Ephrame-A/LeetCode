class Solution {
public:
    int mySqrt(int x) {
        if (x < 2) return x;  // Handle cases for 0 and 1 directly
        
        int left = 0;
        int right = x;

        while (left < right) {
            long mid = left + (right - left) / 2;

            if (mid * mid > x) {
                right = mid;  // Search in the left half
            } else {
                left = mid + 1;  // Search in the right half
            }
        }
        
        return left - 1;  // Since left is now the first number whose square is greater than x
    }
};