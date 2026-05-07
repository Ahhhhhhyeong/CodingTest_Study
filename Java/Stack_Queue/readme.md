# Stack & Queue

> 데이터를 특정 순서대로 넣고 꺼내야하는 상황을 마주하게 됩니다. 예를 들어 웹 서핑 중 '뒤로 가기' 버튼을 누르면 직전 페이지로 돌아가야 하고, 프린터에 여러 문서를 인쇄 요청하면 가장 먼저 요청한 문서부터 인쇄되어야 하죠.
> 이처럼 데이터 처리 순서가 중요할 때 **스택(Stack)**과 **큐(Queue)**라는 자료구조를 사용을 하게 됩니다. 

---

### Stack (스택) 

**LIFO (Last In, First Out)** - 마지막에 넣은 것을 먼저 꺼냄

스택은 접시를 쌓는 것과 같습니다. 위에서만 넣고 뺄 수 있죠.

| 연산 | 설명 |
|------|------|
| `push` | 데이터를 맨 위에 추가 |
| `pop` | 맨 위의 데이터를 꺼냄 |
| `peek` | 맨 위 데이터를 확인 (꺼내지 않음) |

**활용 사례**
- 브라우저 뒤로가기 (방문 기록)
- 함수 호출 스택 (Call Stack)
- 실행 취소 (Ctrl+Z)
- 괄호 유효성 검사

---

### Queue (큐)

**FIFO (First In, First Out)** — 먼저 넣은 것을 먼저 꺼냄

큐는 줄 서기와 같습니다. 앞에서 나가고 뒤에서 들어옵니다.

| 연산 | 설명 |
|------|------|
| `enqueue` | 데이터를 맨 뒤에 추가 |
| `dequeue` | 맨 앞의 데이터를 꺼냄 |
| `peek` | 맨 앞 데이터를 확인 (꺼내지 않음) |

**활용 사례**
- 프린터 인쇄 대기열
- 운영체제 프로세스 스케줄링
- 네트워크 요청 처리
- BFS (너비 우선 탐색)

---

### 한눈에 비교

```
Stack (LIFO)        Queue (FIFO)
                    
  [top]               front  rear
  | C |              [ A | B | C ]
  | B |               ↑         ↑
  | A |             dequeue  enqueue
  [bot]
  
넣기: C→B→A          넣기: A→B→C
꺼내기: C→B→A        꺼내기: A→B→C
```

---

### 코드 예시 (Python)

```python
# Stack
stack = []
stack.append(1)   # push
stack.append(2)
stack.pop()       # → 2 (마지막 것이 먼저)

# Queue
from collections import deque
queue = deque()
queue.append(1)   # enqueue
queue.append(2)
queue.popleft()   # → 1 (처음 것이 먼저)
```
