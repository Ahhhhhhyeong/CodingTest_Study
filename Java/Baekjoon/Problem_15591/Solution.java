package Java.Baekjoon.Problem_15591;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Scanner;

/**
 * MooTube (Silver) 
 * 간선트리 사용
 */
public class Solution {

    public static void main(String[] args) throws Exception {
        Scanner br = new Scanner(System.in);
        int N = br.nextInt(); //동영상 개수
        int Q = br.nextInt(); //질문 개수

       List<int[]>[] video = new ArrayList[N+1];
       
       for(int i=1; i<=N; i++){
         video[i] = new ArrayList<>();
       }

       for(int i=1; i<N; i++){
         int p = br.nextInt(), q = br.nextInt(), r = br.nextInt();
         video[p].add(new int[]{q, r});
         video[q].add(new int[]{p, r});
       }

       for(int i=0; i<Q; i++){
        int k = br.nextInt(), v = br.nextInt();

        boolean[] visited = new boolean[N + 1];
        visited[v] = true;
        Queue<Integer> que = new LinkedList<>();
        que.add(v);

        int cnt = 0;
        while(!que.isEmpty()){
            int cur = que.poll();
            for(int[] a : video[cur]){
                if(!visited[a[0]] && a[1] >= k){
                    que.add(a[0]);
                    visited[a[0]] = true;
                    cnt++;
                }
            }
        }
        System.out.println(cnt);
       }
    }  
}
