class Solution {
public:
    bool rotateString(string s, string goal) {
        string str = s+s;
        return((str.find(goal) != -1)&& (s.length()==goal.length()));
    }
};