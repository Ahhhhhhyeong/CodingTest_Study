package Java.Baekjoon.beginner;

import java.util.Scanner;

public class Problem2439 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int k = 1;
        while(k <= N){
            for(int i=N; i>k; i--){
                System.out.print(" ");
            }
            for(int i=0; i<k; i++){
                System.out.print("*");
            }
            System.out.println();
            k++;
        }
    }
}
