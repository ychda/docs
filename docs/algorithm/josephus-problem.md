---
title:  "Josephus_problem"
date:   2022-04-02 21:00
categories: algorithm
---
## 算法

```python
class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None


def create_linkList(n):
    head = Node(1)
    pre = head
    for i in range(2, n + 1):
        newNode = Node(i)
        pre.next = newNode
        pre = newNode
    pre.next = head
    return head


n = 41
m = 3
if m == 1:
    print(n)
else:
    head = create_linkList(n)
    pre = None
    cur = head
    while cur.next != cur:
        for i in range(m - 1):
            pre = cur
            cur = cur.next
        print(cur.value)
        pre.next = cur.next
        cur.next = None
        cur = pre.next
    print(cur.value)
```

参考：
- [algorithmist][1]
- [algorithmist][2]

[1]: https://en.wikipedia.org/wiki/Josephus_problem
[2]: https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98

