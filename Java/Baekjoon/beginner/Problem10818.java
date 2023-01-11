package Java.Baekjoon.beginner;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem10818 {
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(bf.readLine());
        StringTokenizer st = new StringTokenizer(bf.readLine());
        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
        for(int i=0; i<T; i++){
            int num = Integer.parseInt(st.nextToken());
            min = min > num ? num : min;
            max = max > num ? max : num;
        }
        System.out.println(min + " " + max);
    }   
}
