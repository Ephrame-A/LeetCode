class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        prices.sort()
        x=prices[0]+prices[1]
        return money-x if x<=money else money
        