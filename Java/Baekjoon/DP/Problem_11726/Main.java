package Java.Baekjoon.DP.Problem_11726;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); // 선언
        int n = Integer.parseInt(bf.readLine());
        int[] memo = new int[1001];
        memo[1] = 1;
        memo[2] = 2;
        for (int i = 3; i <= n; i++) {
            memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
        }
        System.out.println(memo[n]);
    }
}
