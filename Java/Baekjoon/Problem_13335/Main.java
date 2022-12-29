package Java.Baekjoon.Problem_13335;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
    static int n, W, L;
    static Queue<Integer> truck;

    public static void solution(){
        int time = 0, w = 0;
        Queue<Integer> bridge = new LinkedList<>();
        for(int i = 0; i<W; i++){ 
            bridge.add(0);
        }

        while(!bridge.isEmpty()){
            time++;
            w -= bridge.poll();
            if(!truck.isEmpty()){ // 트럭이 남아 있는 경우
                if(truck.peek()+w <= L){ // 최대하중을 넘지 않을 경우
                    w += truck.peek();
                    bridge.offer(truck.poll());
                } else {
                    bridge.offer(0);
                }
            } 
        }

        System.out.println(time);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
        StringTokenizer st = new StringTokenizer(bf.readLine());  
    
        n = Integer.parseInt(st.nextToken()); // 트럭개수
        W = Integer.parseInt(st.nextToken()); // 다리길이
        L = Integer.parseInt(st.nextToken()); // 최대하중
        
        truck = new LinkedList<>();
        st = new StringTokenizer(bf.readLine());
        for(int i=0; i<n; i++){
            truck.add(Integer.parseInt(st.nextToken()));
        }

        solution();
    }
}
