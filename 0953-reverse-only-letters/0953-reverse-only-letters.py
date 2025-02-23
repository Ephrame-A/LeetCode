class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        l=0
        s=list(s)
        r=len(s)-1
        while r>l:
            if s[l].isalpha() and s[r].isalpha():
                s[l],s[r]=s[r], s[l]
                l+=1
                r-=1
            else:
                if not s[l].isalpha():
                    l+=1
                if not s[r].isalpha(): 
                    r-=1
        return ''.join(s)