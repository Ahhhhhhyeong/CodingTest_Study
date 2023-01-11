package Java.Baekjoon.beginner;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem11719 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        String str;
        while(true){
            str = br.readLine();
            if(str == null) break;
            sb.append(str);
            sb.append('\n');
        }
        System.out.println(sb.toString());
    }
}
