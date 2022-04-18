---
layout: post
title: '全排列 - Permute'
date: 2021-01-01 00:09:00 +0800
categories:
  - algorithm
  - python
  - permute

---

![Recursion Tree for Permutations of String "ABC"](https://media.geeksforgeeks.org/wp-content/cdn-uploads/NewPermutation.gif)

## C语言

```c
/*
 * Date: 2020-12-31 23:31
 * https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
 * C program to print all permutations with duplicates allowed.
*/
#include <stdio.h>
#include <string.h>

void swap(char *x, char *y) {
    char temp;
    temp = *x;
    *x = *y;
    *y = temp;
}

//int cnt = 0;

void permute(char *a, int index, int len) {
    if (index == len) {
//        cnt++;
        printf("%s\n", a);
    } else {
        for (int i = index; i < len; i++) {
            swap(a + index, a + i);
            permute(a, index + 1, len);
            swap(a + index, a + i); //backtrack
        }
    }
}


int main() {
    char str[] = "123456789";
    int len = strlen(str);
    permute(str, 0, len);
//    printf("%d", cnt);
    return 0;
}
```

## C++

```cpp
/*
 * Date: 2021-01-01 12:10
*/
#include <iostream>
#include <string>

using namespace std;

void permute(string a, int index, int len) {
    if (index == len) {
        cout << a << endl;
    } else {
        for (int i = index; i < len; ++i) {
            swap(a[index], a[i]);
            permute(a, index + 1, len);
            swap(a[index], a[i]);
        }
    }
}

int main() {
    string str = "123456789";
    permute(str, 0, str.size());
    return 0;
}
```

## python

```python
"""
   Date: 2020-12-25 16:59
"""
import time
import datetime
from typing import List


# ---------------------------------------全----排----列------------------------------------------------------------------
# https://leetcode-cn.com/problems/permutations/
def permute(nums: List[int]) -> List[List[int]]:
    n = len(nums)
    result = []

    def backtrack(first=0):
        if first == n:
            result.append(nums[:])
        for i in range(first, n):
            nums[first], nums[i] = nums[i], nums[first]
            backtrack(first + 1)
            nums[first], nums[i] = nums[i], nums[first]

    backtrack()
    return result


# ----------------------------------------------------------------------------------------------------------------------

if __name__ == '__main__':
    start = time.time()
    print(datetime.datetime.now())

    nums = [i for i in range(1, 10)]
    rst = permute(nums)
    for i in rst:
        print(''.join(str(each) for each in i))

    end = time.time()

    print(datetime.datetime.now())
    print('耗时: ', end - start, 's')

```

## Java

```java
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {
    public List<List<Integer>> permute(int[] nums) {
        int len = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        if (len == 0) {
            return res;
        }
        Deque<Integer> path = new ArrayDeque<>();
        boolean[] used = new boolean[len];
        dfs(nums, len, 0, path, used, res);
        return res;
    }

    private void dfs(int[] nums, int len, int depth, Deque<Integer> path, boolean[] used, List<List<Integer>> res) {
        if (depth == len) {
            res.add(new ArrayList<>(path));
            return;
        }
        for (int i = 0; i < len; i++) {
            if (used[i]) {
                continue;
            }
            path.addLast(nums[i]);
            used[i] = true;
            dfs(nums, len, depth + 1, path, used, res);
            path.removeLast();
            used[i] = false;
        }
    }
}
```

#### 链接:

- [geeksforgeeks][geeksforgeeks]

[geeksforgeeks]: https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/

