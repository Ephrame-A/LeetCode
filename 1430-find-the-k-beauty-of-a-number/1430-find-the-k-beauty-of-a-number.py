class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        l=0
        r=k-1
        c=0
        while r<len(str(num)):
            if int(str(num)[l:r+1])==0:
                l+=1
                r+=1
                continue
            if num%int(str(num)[l:r+1])==0:
                c+=1
            l+=1
            r+=1
        return c