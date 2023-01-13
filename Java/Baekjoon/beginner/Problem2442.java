package Java.Baekjoon.beginner;

import java.util.Scanner;

public class Problem2442 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=1; i<=n; i++){
            for(int j=n; j>i; j--){
                System.out.print(" ");
            }
            for(int k=0; k<i*2-1; k++){
                System.out.print("*");
            }
            if(i==n) break;            
            System.out.println();
        }        
    }
}
