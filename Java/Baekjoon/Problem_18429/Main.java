package Java.Baekjoon.Problem_18429;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.util.StringTokenizer;

/**
 * 근손실
 * - 백트래킹 사용
 */

public class Main {
    static int N, K, res;
    static int[] map;
    static boolean[] chk;

    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
        StringTokenizer st = new StringTokenizer(bf.readLine());  

        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(bf.readLine());
        map = new int[N];
        for(int i=0; i<N; i++){
            map[i] = Integer.parseInt(st.nextToken());
        }        

        chk = new boolean[N];
        res = 0;
        DFS(500, 0);
        System.out.println(res);
    }

    public static void DFS(int sum, int idx){
        if(idx == N){
            res++;
            return;
        } else {
            for(int i=0; i<N; i++){
                int tmp = sum + map[i] - K;
                if(!chk[i] && tmp >= 500){
                   chk[i] = true;
                   DFS(tmp, idx + 1); 
                   chk[i] = false;
                }
            }
        }
    }

}