package Java.Baekjoon.Problem_10021;

import java.util.Scanner;

/**
 * Watering the Fields 
 */
public class Main {
    static int[] xArr;
    static int[] yArr;
    static int N, C;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        C = sc.nextInt();
        
        xArr = new int[N];
        yArr = new int[N];

        for(int i=0; i<N; i++){
            xArr[i] = sc.nextInt();
            yArr[i] = sc.nextInt();
        }
        System.out.println(solution());
    }

    public static int solution(){
        int result = 0;
        boolean[] visited = new boolean[N];
        

        for(int i=0; i<N; i++){ // (xi, yi) 불러오는 용도
            visited[i] = true; // (xi, yi) 는 visited에서 true로 중복 안되겠금
            for(int j=0; j<N; j++){ // (xj, yj) 불러와서 계산
                if(!visited[j]){
                    int tmp = Math.abs((int) Math.pow((xArr[i] - xArr[j]), 2)) + Math.abs((int) Math.pow((yArr[i] - yArr[j]), 2));
                    if(tmp >= C) result+=tmp;
                }                
            }
        }

        if(result == 0) result = -1;
        return result;
    }

}
