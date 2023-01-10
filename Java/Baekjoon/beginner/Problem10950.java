package Java.Baekjoon.beginner;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem10950 {
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(bf.readLine());
        StringTokenizer st ;
        for(int i=0; i<T; i++){
            st = new StringTokenizer(bf.readLine());
            int num = Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken());
            System.out.println(num);
        }
    }
}
