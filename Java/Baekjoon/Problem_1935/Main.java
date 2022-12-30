package Java.Baekjoon.Problem_1935;
/**
 * 후위 표기식2
 * 
 * 피연산자(ex. 숫자, 문자)를 스택에 넣고 연산자가 나올 때 pop() 하여 계산
 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
                
        int N = Integer.parseInt(bf.readLine());
        String[] str = bf.readLine().split("");

        Map<String, Double> map = new HashMap<>();
        for (String s : str) {
            if(s.matches("^[A-Z]*$") && !map.containsKey(s)){
                map.put(s, Double.valueOf(Integer.parseInt(bf.readLine())));
            } 
        }
        
        Stack<Double> stack = new Stack<>();
                
        for (String s : str) {
            if(s.matches("^[A-Z]*$")){
                stack.push(map.get(s));
            } else {
                Double op2 = stack.pop();
                Double op1 = stack.pop();

                switch (s) {
                    case "+":
                        stack.push(op1 + op2);
                        break;
                    case "-":
                        stack.push(op1 - op2);
                        break;
                    case "*":
                        stack.push(op1 * op2);
                        break;
                    case "/":
                        stack.push(op1 / op2);
                        break;
                }
            }
        }

        System.out.printf("%.2f", stack.pop());

    }
}
