package Java.Baekjoon.beginner;

import java.util.Scanner;

public class Problem2445 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=1; i<=n; i++){
            if(i==n) break; 
            for(int j=0; j<i; j++){
                System.out.print("*");
            }
            for(int k=n*2-2; k>=i*2-1; k--){
                System.out.print(" ");
            }
            for(int j=0; j<i; j++){
                System.out.print("*");
            }                       
            System.out.println();           
        }
        for(int i=0; i<n*2; i++){
            System.out.print("*");
        }
        System.out.println();
        for(int i=1; i<=n; i++){
            if(i==n) break;
            for(int j=n; j>i; j--){
                System.out.print("*");
            }
            for(int k=0; k<=i*2-1; k++){
                System.out.print(" ");
            }
            for(int j=n; j>i; j--){
                System.out.print("*");
            }                        
            System.out.println();
        } 
    }
}
