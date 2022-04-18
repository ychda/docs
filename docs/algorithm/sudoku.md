---
layout: post
title: '数独解法 - Sudoku Solver'
date: 2020-12-22 14:52:00 +0800
categories:
  - algorithm
---
## 数独

```python

# 代码修改于 leetcode-37

board = '.7.25.4..8.....9.3.....3.7.7....4.2.1.......7.4.5....8.9.6.....4.1.....5..7.82.3.'

def prt_board(board):
    for i in range(9):
        if i != 0 and i % 3 == 0:
            print('-  ' * 11)
        for j in range(9):
            if j != 0 and j % 3 == 0:
                print('|  ', end='')
            print(board[i][j], ' ', end='')
        print()
    print('-' * 80)


board = [[each for each in board[i:i + 9]] for i in range(0, len(board), 9)]
prt_board(board)


def solve_sudoku(board):
    line = [[False] * 9 for _ in range(9)]
    column = [[False] * 9 for _ in range(9)]
    block = [[[False] * 9 for _a in range(3)] for _b in range(3)]
    spaces = list()

    for i in range(9):
        for j in range(9):
            if board[i][j] == '.':
                spaces.append((i, j))
            else:
                digit = int(board[i][j]) - 1
                line[i][digit] = column[j][digit] = block[i // 3][j // 3][digit] = True

    valid = False

    def dfs(pos: int):
        nonlocal valid
        if pos == len(spaces):
            valid = True
            return
        i, j = spaces[pos]
        for digit in range(9):
            if line[i][digit] == column[j][digit] == block[i // 3][j // 3][digit] == False:
                line[i][digit] = column[j][digit] = block[i // 3][j // 3][digit] = True
                board[i][j] = str(digit + 1)
                dfs(pos + 1)
                line[i][digit] = column[j][digit] = block[i // 3][j // 3][digit] = False
            if valid:
                return

    dfs(0)


solve_sudoku(board)
prt_board(board)
```



参考：
- [projecteuler][projecteuler]
- [leetcode][leetcode]

[projecteuler]: https://projecteuler.net/thread=96
[leetcode]: https://leetcode-cn.com/problems/sudoku-solver/
