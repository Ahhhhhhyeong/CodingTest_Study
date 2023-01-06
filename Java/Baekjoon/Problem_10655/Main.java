package Java.Baekjoon.Problem_10655;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int N;
    static int[][] arr;
    

    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
        
        N = Integer.parseInt(bf.readLine());
        arr = new int[N][2];
        int distance = 0, min = Integer.MAX_VALUE; 
        
        StringTokenizer st;  
        for(int i=0; i<N; i++){
            st = new StringTokenizer(bf.readLine());
            arr[i][0] = Integer.parseInt(st.nextToken());
            arr[i][1] = Integer.parseInt(st.nextToken());
            if( i >= 1){
                distance += Math.abs(arr[i][0] - arr[i-1][0]) +  Math.abs(arr[i][1] - arr[i-1][1]);
            }    
        }

        for(int i=1; i<N-1; i++){
            int original = Math.abs(arr[i][0] - arr[i-1][0]) 
                        +  Math.abs(arr[i][1] - arr[i-1][1])
                        +  Math.abs(arr[i][0] - arr[i+1][0])
                        +  Math.abs(arr[i][1] - arr[i+1][1]); // 건너뛰지 않는 경우 길이
            int skip = Math.abs(arr[i-1][0] - arr[i+1][0])
                    + Math.abs(arr[i-1][1] - arr[i+1][1]); //건너뛰는 경우의 길이
            min =  Math.min(min, distance - original + skip);
        }
        System.out.println(min);
    }
}
