class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        if s1==s2:
            return True
        x1=''
        x2=''
        for i in range(0, len(s1)):
            if not s1[i]==s2[i]:
                x1+=s1[i]
                x2+=s2[i]
            if len(x2)>2:
                return False
        if len(x1)==1:
            return False
        return x1[0]==x2[1] and x1[1]==x2[0]