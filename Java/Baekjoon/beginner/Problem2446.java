package Java.Baekjoon.beginner;

import java.util.Scanner;

public class Problem2446 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        for(int i=0; i<n; i++){
            for(int k=0; k<i; k++){
                System.out.print(" ");
            }
            for(int j=n*2-1; j>i*2; j--){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=1; i<n; i++){
            for(int k=n-1; k>i; k--){
                System.out.print(" ");
            }
            for(int j=0; j<=i*2; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
