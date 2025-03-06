class Solution:
    def coloredCells(self, n: int) -> int:
        if n<2:
            return 4**(n-1)
        return 2*n*(n-1) +1
        