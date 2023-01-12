package Java.Baekjoon.beginner;

import java.util.Scanner;

public class Problem2441 {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        int n = sc.nextInt();
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<n; i++){
            for(int k=0; k<i; k++){
                sb.append(" ");
            }
            for(int j=n; j>i; j--){
                sb.append("*");
            }
            sb.append("\n");
        }
        System.out.print(sb.toString());
    }
}
