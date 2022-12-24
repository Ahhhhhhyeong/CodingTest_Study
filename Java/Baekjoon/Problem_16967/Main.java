package Java.Baekjoon.Problem_16967;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
        
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언   
        StringTokenizer st = new StringTokenizer(bf.readLine());  

        int H = Integer.parseInt(st.nextToken());
        int W = Integer.parseInt(st.nextToken());
        int X = Integer.parseInt(st.nextToken());
        int Y = Integer.parseInt(st.nextToken());
        
        int BX = H+X, BY = W+Y;

        int[][] A = new int[H][W];
        int[][] B = new int[BX][BY];

        for(int i=0; i<BX; i++){
            st = new StringTokenizer(bf.readLine());
            for(int j=0; j<BY; j++){
                B[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for(int i=0; i<H; i++){
            for(int j=0; j<W; j++){
                if (i >= X && j >= Y) {
                    A[i][j] = B[i][j] - A[i - X][j - Y];
                } 
                else if (i < X || j < Y) { 
                    A[i][j] = B[i][j];
                }
            }
        }
        
        for(int i=0; i<H; i++){
            for(int j=0; j<W; j++){
                System.out.print(A[i][j] + " ");
            }
            System.out.println();
        }

        bf.close();
    }
}
