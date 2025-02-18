class Solution:
    def climbStairs(self, n: int) -> int:
        cur, nex=1,1
        for i in range(2, n+1):
            a=nex
            nex+=cur
            cur=a
        return nex