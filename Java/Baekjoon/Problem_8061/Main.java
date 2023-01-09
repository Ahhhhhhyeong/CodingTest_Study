package Java.Baekjoon.Problem_8061;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Node{
    int x;
    int y;
    int cnt;

    public Node(int y, int x, int cnt){
        this.y = y;
        this.x = x;
        this.cnt = cnt;
    }
}

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
        StringTokenizer st = new StringTokenizer(bf.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
       
        int[][] bitmap = new int[N][M];

        for(int i=0; i<N; i++){
            String str = bf.readLine();
            for(int j=0; j<M; j++){
                bitmap[i][j] = Integer.parseInt(str.split("")[j]);
            }
        }
        bitmap = BFS(bitmap, N, M);

        for(int i=0; i<N; i++){
            for(int j=0; j<M; j++){
                System.out.printf("%d ", bitmap[i][j]);
            }
            System.out.println();
        }
    }

    public static int[][] BFS(int[][] bitmap, int N, int M){
        Queue<Node> que = new LinkedList<>();
        boolean[][] visited = new boolean[N][M];
        int[] yarr = {-1, 1, 0, 0};
        int[] xarr = {0, 0, -1, 1};

        for(int i=0; i<N; i++){
            for(int j=0; j<M; j++){
                if(bitmap[i][j] == 1){
                    que.add(new Node(i, j, 1));
                    bitmap[i][j] = 0;
                    visited[i][j] = true;
                }
            }
        }

        while(!que.isEmpty()){
            Node n = que.poll();
            for(int i=0; i<4; i++){
                int ny = n.y + yarr[i];
                int nx = n.x + xarr[i];

                if(ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
                if(bitmap[ny][nx] != 0) continue;
                if(visited[ny][nx]) continue;

                que.add(new Node(ny, nx, n.cnt+1));
                bitmap[ny][nx] = n.cnt;
                visited[ny][nx] = true;
            }
        }
        return bitmap;
    }

}
