

class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}


class LinkedList{
    constructor(head){
        this.head = null;
    }
    
    
    // add new values to the end of the linked list
    append(vlaue){
        
        // create a new node ot append 
        const newNode = new Node(value);
        
        // only for first element , if head is null then add a newNode to head
        // because head always points towards first element of the list.
        if(this.head == null){
            this.head = newNode;
            return;
        }
        
        
        // now asuming that linked list have at least 1 item, traverse till the end of the LL and then append the newNode
        
        let current = this.head;
        
        while(current.next != null){
            current = current.next;
        }
        
        // now once the loop finishes executing , we have reached to the end of the LL , now we do
        
        current.next = newNode;
    }
}


let myList = new LinkedList();

myList.append(10);
myList.append(20);

