// INTERSECTION OF TWO LINKED LIST

// List A:       a1 → a2 ↘
//                        c1 → c2 → c3
// List B:  b1 → b2 → b3 ↗

// Approach 1 : Naive approach : Compare every node in list A with every node in list B

function LL_Intersection(headA, headB) {
  let a = headA;

  while (a != null) {
    let b = headB; // Reset b to the head of List B for every node in A

    while (b != null) {
      if (a == b) {
        return a;
      }

      b = b.next;
    }

    a = a.next;
  }

  // no intersection.
  return null;
}

// Time: O(N×M) where N and M are lengths of A and B.
// Space: O(1)

// Approach 2 : Hash set trading space for time
// Traverse List A completely and insert every node reference into a Hash Set.
// Traverse List B. The first node you encounter that already exists in the Hash Set is the intersection node.

function Approach2(headA, headB) {
  let map = new Map();
  let a = headA;
  let b = headB;

  while (a != null) {
    map.set(a, a);

    a = a.next;
  }

  // now check if any node matches from the map.
  while (b != null) {
    if (map.get(b)) {
      return b;
    }
    b = b.next;
  }

  // no intersection.
  return null;
}

// Time: O(N+M)
// Space: O(N) (or O(M))

// Approach 4: The Two-Pointer Swap Trick
// Path traversed by Pointer A: Length(A)+Length(B)
// Path traversed by Pointer B: Length(B)+Length(A)
// Both pointers will travel the exact same total distance!

// Algorithm:
// Set pA = headA and pB = headB.
// Advance both pointers one step at a time.
// When pA reaches null, redirect it to headB.
// When pB reaches null, redirect it to headA.
// They are guaranteed to meet at the intersection node (or meet at null if no intersection exists).

function Approach4(headA, headB) {
  if (headA === null || headB === null) return null;

  let pA = headA;
  let pB = headB;

  // Loop continues until both pointers meet.
  // If there is an intersection, they meet at the node (pA === pB).
  // If there is NO intersection, both reach null at the same time (pA === pB === null).
  while (pA !== pB) {
    // Move pA to headB if it reaches null, otherwise advance to next

    if (pA === null) {
      pA = headB;
    } else {
      pA = pA.next;
    }

    // Move pB to headA if it reaches null , otherwise advane to next
    if (pB === null) {
      pB = headA;
    } else {
      pB = pB.next;
    }
  }

  // in both conditions both pA and pB will be same , either null or the intersection point we need.
  return pA; 
}


// time : O(n+m) , space O(1)