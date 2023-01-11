package Java.Baekjoon.beginner;

import java.util.Scanner;

public class Problem1924 {
    static String[] day = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
    static int[] month = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        int d = 0;
        for(int i=0; i<x-1; i++){
            d += month[i];
        }
        d = (d + y) % 7;
        System.out.println(day[d]);

    }
}
