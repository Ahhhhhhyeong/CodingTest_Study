package Java.Baekjoon.Problem_15059;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); //선언
       
        String[] stock = bf.readLine().split(" ");
        String[] choice = bf.readLine().split(" ");

        int result = 0;
        for(int i=0; i<stock.length; i++){
            if(Integer.parseInt(stock[i]) < Integer.parseInt(choice[i])){
                result += Math.abs(Integer.parseInt(stock[i]) - Integer.parseInt(choice[i]));
            }
        }        
        System.out.println(result);
    }
}
