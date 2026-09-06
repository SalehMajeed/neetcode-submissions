class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const cache = new Map();
        if (s.length !== t.length) return false;
        for (const char of s) {
            cache.set(char, (cache.get(char) || 0) + 1)
        }

        for (const char of t) {
            const val = cache.get(char);
            if (!val) return false;
            cache.set(char, val - 1);
        }
        return true;
    }
}
