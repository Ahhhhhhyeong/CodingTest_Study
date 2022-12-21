package Java.Baekjoon.Problem_13627;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언
       
        int N=0, R=0;
        StringTokenizer st = new StringTokenizer(bf.readLine());  
        N = Integer.parseInt(st.nextToken()); 
        R = Integer.parseInt(st.nextToken());     
        
        ArrayList<Integer> list = new ArrayList<>();
        String[] str = bf.readLine().split(" ");
        for(int i=0; i<R; i++){
            list.add(Integer.parseInt(str[i]));
        }
        Collections.sort(list);
        
        boolean chk = false;
        for(int i=1; i<=N; i++){
            if(!list.contains(i)){
                System.out.printf("%d ", i);
                chk = true;
            }
        }
        if(!chk) System.out.print("*");
    }
}
