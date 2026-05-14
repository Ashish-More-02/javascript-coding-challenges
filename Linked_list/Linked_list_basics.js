// Singly Linked List

// head -> A -> B -> C -> null

// it requires 2 things -> Node and linkedList ( to manage the nodes)

class Node{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}


class LinkedList{
    // when first creating a linked list , the head will point towards null
    constructor(){
        this.head = null;
    }

    // add new nodes to our linkedlist 
    append(value){
        const newNode  = new Node(value);

        // if the list is empty , then we will add the first element 
        if(this.head == null || !this.head){
            this.head = newNode;
            return;
        }


        // when we want to add a new element in the linked list ,
        // traverse till the last of the linked list and then add.

        // start from the first node.
        let current = this.head;

        while(current.next != null){
            current = current.next;
        }

        current.next = newNode;
    }

    // traversing the list and printing it.
    print(){
        let current = this.head;

        console.log("head ->")

        while(current != null){
            console.log(current.value);
            current = current.next;
        }
    }


    // Accessing elements in linked list by giving the index
    get(index){
        let current = this.head;
        let count = 0;

        while(current != null){
            if(count === index){
                return current.value;
            }

            current = current.next;
            count++;
        }

        return null;
    }


    // insert at the beginning 
    prepend(value){
        const newNode = new Node(value);

        // head is the complete node or object which stores everything.
        newNode.next = this.head;

        // now, the head becomes the newNode
        this.head = newNode;
    }


    
    // delete first node 
    deleteFirst(){

        if(this.head == null || !this.head){
            return;
        }

        this.head = this.head.next;
    }


    // delete specific value 
    delete(value){

        // if head is null , there is nothing to delete
        if(!this.head){
            return;
        }

        // if we want to delete the head itself
        if(this.head.value === value){
            this.deleteFirst();
            return;
        }

        let current = this.head;

        while(current.next !== null){
            // if we find this value then delete it

            // for this we need to look one value ahead to skip the middle value and point directly to the next value
            if(current.next.value == value){
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }
    }

}



// using the linked list

let myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);

console.log(myList);

console.log(myList.head);

myList.print();