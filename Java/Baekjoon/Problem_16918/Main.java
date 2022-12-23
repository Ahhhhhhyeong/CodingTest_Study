package Java.Baekjoon.Problem_16918;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int R=0, C=0;
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언
       
        int N=0;
        StringTokenizer st = new StringTokenizer(bf.readLine());  
        R = Integer.parseInt(st.nextToken());     
        C = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken()); 

        char[][] arr = new char[R][C];
        boolean[][] chk = new boolean[R][C];
        for(int i=0; i<R; i++){
            String str = bf.readLine();
            for(int j=0; j<C; j++){
                arr[i][j] = str.toCharArray()[j];
                if(arr[i][j]=='O') chk[i][j]=true;
            }
        }

        if(N%2==0){ //짝수는 모두 o
            for(int i=0; i<R; i++){
                for(int j=0; j<C; j++){
                    System.out.print("O");
                }
                System.out.println();
            }
        }
        else{ //홀수인경우
            int n = bfs(N);
            if(n == 5){
                result(arr);
            }
            else{
                result(solution(arr,chk));
            }
        }

    }

    public static int bfs(int N) {
        int result = 0;
        if(N==3 || N==5) return N;
        while(N>2){
            int tmp = N-4;
            if(tmp == 3 || tmp == 5){
                result = tmp;
                break;
            }
            else result = tmp;
        }
        return result;
    }

    public static void result(char[][] arr){
        for(int i=0; i<R; i++){
            for(int j=0; j<C; j++){
                System.out.print(arr[i][j]);
            }
            System.out.println();
        }
    }

    public static char[][] solution(char[][] arr, boolean[][] chk){
        int[] xboom = {-1, 0, 1, 0}; //왼쪽, 위, 오른쪽, 아래
        int[] yboom = {0, 1, 0, -1}; //왼쪽, 위, 오른쪽, 아래        
        for(int i=0; i<R; i++){
            for(int j=0; j<C; j++){
                if(arr[i][j] == '.' && !chk[i][j]) {
                    arr[i][j] = 'O';
                    continue;
                }
                if(arr[i][j]=='O'){
                    chk[i][j] = true;
                    arr[i][j] = '.';
                    for(int k=0; k<4; k++){ //상하좌우 변경
                        int x = i+xboom[k];
                        int y = j+yboom[k];
                        if(x>=0 && y>=0 && x<R && y<C){
                            if(arr[x][y] == 'O' && chk[x][y]) continue;                          
                            arr[x][y] = '.';
                            chk[x][y] = true;
                        }
                    }
                }                
            }
        }
        return arr;
    }

}
