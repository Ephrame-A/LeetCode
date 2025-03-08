class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        blocks=list(blocks)
        B=0
        l=0
        r=k
        while r<len(blocks)+1:
            c=blocks[l:r].count('B')
            B=max(c, B)
            l+=1
            r+=1
        return 0 if k-B<0 else k-B
