package nodeJS.codetree.Stack_Queue;

import java.util.Stack;

public class Solution {
    private static String solution(String input){
        Stack<String> s = new Stack<>();
        String[] arr = input.split("");

        for (int i = 0; i < arr.length; i++) {
            if(i == 0 && arr[i].equals(")")) return "NO";
            if(arr[i].equals("(")) s.push(arr[i]);
            else if(arr[i].equals(")")) {
                if(s.isEmpty()) return "NO";
                s.pop();
            }
        }

        return s.size() == 0 ? "YES" : "NO";
    }
    public static void main(String[] args) {
        System.out.println(solution("((()"));
    }
}
