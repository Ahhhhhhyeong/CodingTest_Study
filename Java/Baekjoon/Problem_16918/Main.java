package Java.Baekjoon.Problem_16918;
/**
 * BOJ 16918 봄버맨
 * 
 * 유튜브 문제 풀이 참고함
 * https://youtu.be/fFg5VXpsIxk
 * https://youtu.be/XsrxGopW5-A
 * 
 */
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.StringTokenizer;

public class Main {
    static int R=0, C=0, N=0;
    static int[][] map;

    static int[] di = {1, -1, 0, 0}; //상, 하, 좌, 우
    static int[] dj = {0, 0, 1, -1};

    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    public static void solution() throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
        StringTokenizer st = new StringTokenizer(bf.readLine());  

        R = Integer.parseInt(st.nextToken());     
        C = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken()); 

        map = new int[R][C];

        for(int i=0; i<R; i++){
            String str = bf.readLine();
            for(int j=0; j<C; j++){
                if(str.charAt(j) == 'O') map[i][j] = 3;
                else map[i][j] = 0;
            }
        }

        if(0==N) return;

        secondPassed();
        --N;

        if(0==N) return;
        
        boolean BombsOrPassed = true;

        for(int s=0; s<N; s++){
            if(BombsOrPassed){
                secondPassed();
                setupBooms();
                explodeBomb();
            }
            else{
                secondPassed();
                explodeBomb();
            }
        }       

        bf.close();
        return;
    }


    public static void secondPassed() {
        for(int i=0; i<R; i++){
            for(int j=0; j<C; j++){
                if(map[i][j] > 0){
                    --map[i][j];
                    if(map[i][j]==0) map[i][j] = -1;
                }
            }
        }
    }

    public static void setupBooms(){
        for(int i=0; i<R; i++){
            for(int j=0; j<C; j++){
                if(map[i][j]==0) map[i][j] = 3;
            }
        }
    }

    public static void explodeBomb() {
        Deque<int[]> que = new ArrayDeque<>();

        for(int i=0; i<R; i++){
            for(int j=0; j<C; j++){
                if(map[i][j] < 0){
                    map[i][j] = 0;
                    que.add(new int[]{i, j});
                }
            }
        }

        for(int[] yx : que){
            explodeBomb(yx[0], yx[1]);
        }

    }

    public static void explodeBomb(int y, int x){
        map[y][x] = 0;
        for(int idx = 0; idx < di.length; idx++){
            int cy = y - di[idx];
            int cx = x - dj[idx];
            if(IsInMap(cy, cx)) map[cy][cx] = 0;
        }
    }

    private static boolean IsInMap(int y, int x) {
        return ((0<=y) && (0<=x) && (y<R) && (x<C));
    }

    public static void printMap() throws IOException{
        for(int i=0; i<R; i++){
            for(int j=0; j<C; j++){
                if(map[i][j] > 0) bw.write('O');
                else bw.write('.');
            }
            bw.newLine();
        }
        bw.flush();
        bw.close();
    }

    public static void main(String[] args) throws IOException{
        solution();
        printMap();
    }

}
