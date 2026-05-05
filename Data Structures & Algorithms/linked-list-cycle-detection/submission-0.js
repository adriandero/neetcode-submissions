/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let map = new Map();
        map.set(null, null);

        while(!map.has(head)) {
            map.set(head, head);
            head = head.next;
            if(head === null) {
                return false
            }
        }

        return true;


    }
}
