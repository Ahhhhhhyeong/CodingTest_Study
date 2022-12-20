package Java.Baekjoon.Problem_13604;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언
       
        int J=0, R=0, max=Integer.MIN_VALUE;
        StringTokenizer st = new StringTokenizer(bf.readLine());  
        J = Integer.parseInt(st.nextToken()); 
        R = Integer.parseInt(st.nextToken());          
           
        int[] arr = new int[J+1];
        String[] str = bf.readLine().split(" ");
        // J명의 플레이어들이 R개의 라운드를 거치며 얻은 점수 합산
        for(int i=0; i<J*R; i+=J){ 
            for(int j=0; j<J; j++){
                arr[j] += Integer.parseInt(str[i+j]);
                max = max < arr[j] ? arr[j] : max; // 최고점 구하기
            }
        }
        int result = 0;
        // J명의 플레이어들의 점수 중 최고점이면서 제일 마지막에 결과가 나온 플레이어 구하기
        for(int i=1; i<=J; i++){ 
            if(max == arr[i-1]) result = result < i ? i : result;
        }
        System.out.println(result);
    }
}
