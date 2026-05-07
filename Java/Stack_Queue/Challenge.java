package nodeJS.codetree.Stack_Queue;

import java.util.Stack;

public class Challenge {
    private static void StackTest(){
        Stack<Integer> s = new Stack<>();
        s.push(15);
        s.push(20);
        s.push(35);
        s.push(20);
        System.out.println(s.pop());
        System.out.println(s.pop());
        System.out.println(s.size());
        System.out.println(s.peek());
        System.out.println(s.pop());    
    }
 
    private static void stackWithString(String str){
        Stack<String> s = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            s.push(String.valueOf(str.charAt(i)));
        }

        while (!s.empty()) {
            System.out.println(s.pop());
        }
    }

    public static void main(String[] args) {
        StackTest();
        stackWithString("codetree");
    }

}
