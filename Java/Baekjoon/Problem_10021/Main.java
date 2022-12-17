package Java.Baekjoon.Problem_10021;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

/**
 * Watering the Fields 
 */
class Node{
    int start;
    int end;
    int value;

    public Node(int start, int end, int value) {
        this.start = start;
        this.end = end;
        this.value = value;
    }
}

public class Main {
    static int[] xArr;
    static int[] yArr;
    static int[] p;
    static int N, C;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        
        xArr = new int[N];
        yArr = new int[N];
        p = new int[N+1];

        for(int i=1; i<=N; i++){
            p[i] = i;
        }

        for(int i=0; i<N; i++){
            st = new StringTokenizer(br.readLine());

            xArr[i] = Integer.parseInt(st.nextToken());
            yArr[i] = Integer.parseInt(st.nextToken());
        }
        System.out.println(solution());
    }

    public static int solution(){
        PriorityQueue<Node> queue = new PriorityQueue<>((o1, o2) -> (int) (o1.value - o2.value));
        
        for(int i=0; i<N-1; i++){
            for(int j=i+1; j<N; j++){
                int dist = Math.abs((int) Math.pow((xArr[i] - xArr[j]), 2)) + Math.abs((int) Math.pow((yArr[i] - yArr[j]), 2));
                queue.offer(new Node(i, j, dist));
            }
        }
        
        int sum = 0;
        int count = 0;

        while(!queue.isEmpty()){
            Node node = queue.poll();

            if(node.value < C) continue;

            int x = node.start;
            int y = node.end;

            if(!isCheckParent(x, y)){
                sum += node.value;
                union(x, y);
                count++;
            }

            if(count == N-1) break;
        }

        if(count != N-1) sum = -1;

        return sum;
    }

    private static int find(int x) {
        if(x == p[x]){
            return x;
        }else{
            return p[x] = find(p[x]);
        }
    }

    public static void union(int x, int y){
        x = find(x);
        y = find(y);
        //같은 부모를 가지고 있지 않을 때
        if(x != y){
            if(x < y) p[y] = x;
            else p[x] = y;
        }
    }
    
    public static boolean isCheckParent(int x, int y){
        x = find(x);
        y = find(y);
        if(x == y) return true;
        else return false;
    }

}
