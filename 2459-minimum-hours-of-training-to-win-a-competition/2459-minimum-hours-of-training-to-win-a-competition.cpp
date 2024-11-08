#include <vector>
using namespace std;

class Solution {
public:
    int minNumberOfHours(int initialEnergy, int initialExperience, vector<int>& energy, vector<int>& experience) {
        int ener = 0, sum = 0, exp = 0;

        // Calculate total energy needed
        for (int i = 0; i < energy.size(); i++) {
            sum += energy[i];
        }

        // Calculate additional energy needed
        while (initialEnergy < sum + 1) {
            ener++;
            initialEnergy++;
        }

        // Calculate additional experience needed
        for (int i = 0; i < experience.size(); i++) {
            while (initialExperience < experience[i] + 1) {
                exp++;
                initialExperience++;
            }
            initialExperience += experience[i];
        }

        return ener + exp; 
    }
};