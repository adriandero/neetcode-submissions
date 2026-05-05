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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */

    merge(curr1, curr2) {
        
        if(curr1 === null) return curr2;
        if(curr2 === null) return curr1;

        if(curr1.val < curr2.val) {
            curr1.next = this.merge(curr1.next, curr2);
            return curr1;
        }
        else {
            curr2.next = this.merge(curr2.next, curr1);
            return curr2;
        }
    }
    mergeTwoLists(list1, list2) {
        return this.merge(list1, list2)
    }
}
