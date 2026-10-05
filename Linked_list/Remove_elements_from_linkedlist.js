// Remove elmeents from linked list 

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



function RemoveElementsFromLL(head,val){

    // phase 1: remove all matching elements from head;
    while(head !== null && head.val === val){
        head = head.next;
    }

    // base condition : if LL is empty 
    if(head === null){
        return null;
    }

    // phase 2 : traverse and delete matching nodes from the rest of the list
    let curr = head;

    while(curr.next != null){

        if(curr.next.val === val){
            // delete node by skipping it.
            /// this also handles tail node.
            curr.next = curr.next.next;
        }
        else{
            // move pointer ahead if nothign to delete.
            curr = curr.next;
        }
    }
}