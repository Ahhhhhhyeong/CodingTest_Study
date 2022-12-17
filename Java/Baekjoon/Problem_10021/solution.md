```너무 힘들게 풀어서 쓰는 풀이과정```   

# Watering the Fields

1. 우선순위 큐를 생성하여 모든 정점 사이의 유클리드 거리를 **오름차순**으로 담는다.
    - Node라는 start, end, value 객체를 저장할 수 있는 클래스를 만든다.
2. 정렬된 큐에서 Node를 하나 씩 꺼내어 최소 신장 트리(MST, Minimum Spanning Tree)에 적용될 수 있는 간선인지 체크한다.
    - 꺼낸 Node의 Value가 C보다 작으면 넘어가지 않는다.
    - 해당 간선이 여태껏 선택한 트리에 추가 될 때 사이클이 생기는지 체크한다.
        - 사이클 생성 체크는 [유니온 파인드(Union-Find)](https://blog.naver.com/yuki1220/222958499825) 사용
        - 부모가 같다면 사이클이 발생하는 것으로 간주
3. 적용이 될 수 있는 간선은 sum에 추가하고 count값 증가한다.
    - count는 추가된 간선의 개수로 N-1(최소값)이 되면 탐색을 종료한다.
4. 최소값을 출력한다.
    - count가 N-1이 아닐 때, -1을 출력한다.
    - count가 N-1 일 때, sum을 출력한다.   

[코드보기](https://github.com/Ahhhhhhyeong/CodingTest_Study/blob/main/Java/Baekjoon/Problem_10021/Main.java)


