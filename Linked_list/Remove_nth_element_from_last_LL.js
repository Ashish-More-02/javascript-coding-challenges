// Remove nth element from last in Linked list 

// logic 1 : 2 pass approach 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    // logic 2 pass approach 

    // pass 1 : find the size of linked list, and we take LL as 1 indexing.
    let count = 0;
    let curr = head;

    while (curr !== null) {
        count++;
        curr = curr.next;
    }

    // element to delete 
    // means standing at 3 we have to delete 4.
    let next_ele_to_delete = (count - n);

    // Edge Case: If we need to remove the head node
    if (next_ele_to_delete === 0) {
        return head.next;
    }

    // pass 2 : go to that element and delete that element.
    let counter = 1;
    curr = head; // reset curr to head;

    while (curr.next !== null) {

        if (next_ele_to_delete == counter) {
            curr.next = curr.next.next;
            break; // we only have 1 element to delete so why traverse the LL completely, just break the loop.
        }
        else {
            curr = curr.next;
            counter++;
        }
    }

    return head;

};




// logic 2 : 1 pass approch , use 2 pointers ( fast and slow )


var removeNthFromEnd2 = function(head, n) {
    let fast = head;
    let slow = head;

    // 1. Advance fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Edge Case: If fast is null, n equals list length (remove head)
    if (fast === null) {
        return head.next;
    }

    // 2. Move fast until it reaches the last node (fast.next === null)
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 3. Skip the target node
    slow.next = slow.next.next;

    return head;
};