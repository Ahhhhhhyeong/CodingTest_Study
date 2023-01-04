package Java.Baekjoon.Problem_1189;

/**
 * 컴백홈
 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int R, C, K;
    static char[][] map;
    static int[][] visited;
    static int result;

    static int[] moveR = { 1, -1, 0, 0 };
    static int[] moveL = { 0, 0, 1, -1 };

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); // 선언
        StringTokenizer st = new StringTokenizer(bf.readLine());

        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        map = new char[R][C];
        visited = new int[R][C];

        for (int i = 0; i < R; i++) {
            String str = bf.readLine();
            for (int j = 0; j < C; j++) {
                map[i][j] = str.charAt(j);
            }
        }

        visited[R - 1][0] = 1;
        DFS(R - 1, 0, 1);
        System.out.println(result);

        bf.close();
    }

    public static void DFS(int r, int c, int moved) {
        if (r == 0 && c == C - 1) {
            if (moved == K)
                result++;
            return;
        } else {
            for (int i = 0; i < 4; i++) {
                int nextR = r + moveR[i];
                int nextL = c + moveL[i];

                if (nextR < 0 || nextL < 0 || nextR >= R || nextL >= C)
                    continue;
                if (visited[nextR][nextL] == 1 || map[nextR][nextL] == 'T')
                    continue;

                visited[nextR][nextL] = 1;
                DFS(nextR, nextL, moved + 1);
                visited[nextR][nextL] = 0;
            }
        }
    }
}
