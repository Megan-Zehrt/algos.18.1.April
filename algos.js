// 203. Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }
    // Corrected the next node linkage
    head.next = removeElements(head.next, val);

    // Corrected the condition to check if current node's value equals 'val'
    if (head.val === val) {
        return head.next;
    } else {
        return head;
    }
};

// Function Explination

// Goes over each node in the head
// If the node is equal to the value - skip over it
// otherwise return the node
// this returns the head without the nodes that are equal to the value