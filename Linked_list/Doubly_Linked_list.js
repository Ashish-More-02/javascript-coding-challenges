// Doubly Linked list 


// null ← 10 ⇄ 20 ⇄ 30 → null

// {
//     value,
//     next,
//     prev
// }


class Node{
    constructor(value){
        this.value= value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }


    // add new node 
    append(value){
        const newNode = new Node(value);

        if(!this.head){
            //  null -> head -> newNode <- tail <- null
            this.head = newNode;
            this.tail = newNode;
            return;
        }


        // if the linked list already have some values in it, we directly add it to the end
        this.tail.next = newNode;

        newNode.prev = this.tail

        this.tail = newNode;

    }


    printForward(){
        let current = this.head;

        while(current != null){
            console.log(current.value);
            current = current.next;
        }
    }


    printbackward(){
        let current = this.tail;

        while(current != null){
            console.log(current.value);
            current = current.prev;
        }
    }


    delete(value){

        if(!this.head) {
            return;
        }

        let current = this.head;

        while(current !== null){

            // deleting head
            if(current === this.head){
                this.head = current.next;

                if(this.head){
                    this.head.prev = null;
                }

                return;
            }

            // deleting tail
            if(current === this.tail){
                this.tail = current.prev;

                // checking if tail exists
                if(this.tail){
                    this.tail.next = null;
                }

                return;
            }

            // deleting middle node 
            current.prev.next = current.next;
            current.next.prev = current.prev;

            return;

        }

        current = current.next;
    }
}