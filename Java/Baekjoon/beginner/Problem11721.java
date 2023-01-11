package Java.Baekjoon.beginner;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem11721 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split("");
        for(int i=0; i<str.length; i++){
            System.out.printf("%s", str[i]);
            if( (i+1)%10 == 0){
                System.out.println();
            }
        }

    }
}
