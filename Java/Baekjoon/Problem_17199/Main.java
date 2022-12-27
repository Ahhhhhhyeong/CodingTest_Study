package Java.Baekjoon.Problem_17199;
/**
 * Milk Factory 
 * 
 * 플로이드 와샬 알고리즘 사용
 * https://blog.naver.com/ndb796/221234427842 참고
 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static private int[][] map;
    static private int N;

    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
        StringTokenizer st = new StringTokenizer(bf.readLine());  

        N = Integer.parseInt(st.nextToken());
        map = new int[N+1][N+1];

        int repeat = N-1;

        for(int i=0; i<repeat; i++){
            st = new StringTokenizer(bf.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            map[a][b] = 1;
        }

        for(int k=1; k<=N; k++){// k=거쳐가는 노드
            for(int i=1; i<=N; i++){ // i=출발 노드
                for(int j=1; j<=N; j++){ // j=도착 노드
                    if(map[i][k] == 1 && map[k][j] == 1){
                        map[i][j] = 1;
                    }
                }
            }
        }

        int res = Integer.MAX_VALUE;
        for(int i=1; i<=N; i++){
            int cnt = 0;
            for(int j=1; j<=N; j++){
                if(map[j][i] == 1) cnt++;
            }
            if(cnt == N-1){
                res = i;
                break;
            }
        }
        res = res == Integer.MAX_VALUE ? -1 : res;
        System.out.println(res);
    }
}
