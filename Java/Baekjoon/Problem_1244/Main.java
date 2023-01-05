package Java.Baekjoon.Problem_1244;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int sn, stn;
    static int[] button;

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); // 선언
        sn = Integer.parseInt(bf.readLine());

        StringTokenizer st = new StringTokenizer(bf.readLine());
        button = new int[sn + 1];
        for (int i = 1; i <= sn; i++) {
            button[i] = Integer.parseInt(st.nextToken());
        }

        stn = Integer.parseInt(bf.readLine());
        for (int i = 0; i < stn; i++) {
            st = new StringTokenizer(bf.readLine());
            int sex = Integer.parseInt(st.nextToken());
            int num = Integer.parseInt(st.nextToken());
            if (sex == 1)
                ManSwitch(num);
            else
                GirlSwitch(num);
        }

        for (int i = 1; i <= sn; i++) {
            System.out.printf("%d ", button[i]);
            if(i % 20 == 0) System.out.println();
        }
    }

    public static void ManSwitch(int num) {
        for (int i = 1; i <= sn; i++) {
            if (i % num == 0){
                button[i] = button[i] == 1 ? 0 : 1;
            }
        }
    }

    public static void GirlSwitch(int num) {
        int j = 0;
        for (int i = num; i >= 1; i--) {
            int tmp = num + j;
            j++;
            if (tmp == i) {
                button[i] = button[i] == 1 ? 0 : 1;
                continue;
            }
            if(tmp > sn || button[i] != button[tmp]) return;
            button[i] = button[i] == 1 ? 0 : 1;
            button[tmp] = button[tmp] == 1 ? 0 : 1;
        }
    }
}
