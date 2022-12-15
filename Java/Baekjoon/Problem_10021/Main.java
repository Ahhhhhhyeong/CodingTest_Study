package Java.Baekjoon.Problem_10021;

import java.util.Scanner;

/**
 * Watering the Fields 
 */
public class Main {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int C = sc.nextInt();
        
        int[][] arr = new int[N][2];
        for(int i=0; i<N; i++){
            arr[i][0] = sc.nextInt();
            arr[i][1] = sc.nextInt();
        }
        System.out.println(solution(arr, N, C));
    }

    public static int solution(int[][] arr, int N, int C){
        int result = 0;
        boolean[] visited = new boolean[N];
        

        for(int i=0; i<N; i++){ // (xi, yi) 불러오는 용도
            visited[i] = true; // (xi, yi) 는 visited에서 true로 중복 안되겠금
            for(int j=0; j<N; j++){ // (xj, yj) 불러와서 계산
                if(!visited[j]){
                    int tmp = Math.abs((int) Math.pow((arr[i][0] - arr[j][0]), 2)) + Math.abs((int) Math.pow((arr[i][1] - arr[j][1]), 2));
                    if(tmp >= C) result+=tmp;
                }                
            }
        }


        if(result == 0) result = -1;
        return result;
    }

}
