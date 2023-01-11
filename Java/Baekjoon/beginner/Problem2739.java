package Java.Baekjoon.beginner;

import java.util.Scanner;

public class Problem2739 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i=1; i<=9; i++){
            int num = N * i;
            System.out.println(N + " * " + i + " = " + num);
        }
    }
}
