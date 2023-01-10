package Java.Baekjoon.beginner;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem10951 {
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        try {
            while (true) {
                String str = bf.readLine();
                System.out.println(Integer.parseInt(str.split(" ")[0]) + Integer.parseInt(str.split(" ")[1]) );
            }
        } catch (Exception e) {
           return;
        }
    }
}
