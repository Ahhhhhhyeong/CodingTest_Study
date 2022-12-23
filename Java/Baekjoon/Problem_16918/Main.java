package Java.Baekjoon.Problem_16918;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int[] xboom = {-1, 0, 1, 0}; //왼쪽, 위, 오른쪽, 아래
    static int[] yboom = {0, 1, 0, -1}; //왼쪽, 위, 오른쪽, 아래

    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언
       
        int R=0, C=0, N=0;
        StringTokenizer st = new StringTokenizer(bf.readLine());  
        R = Integer.parseInt(st.nextToken());     
        C = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken()); 

        
    }
}
