# Markdown语法
## 注意
需要换行就在后面添加两个空格，或者 `<br>` 。\
部分程序支持使用反斜线 `\` 进行换行。

这里是 **强调** 、*斜体 Italic*、***粗体 + 斜体*** 

----

```markdown
> 引用文字内容  
> 引用文字内容  
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> 引用文字内容  
>> 引用文字内容，也可以嵌套  
```
> 引用文字内容  
> 引用文字内容
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> 引用文字内容
>> 引用文字内容，也可以嵌套  

----

```markdown
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
```
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item

----

无序列表可以使用 `-`、`+`、`*`。

----
要在保留列表连续性的同时在列表中添加另一种元素，将该元素缩进四个空格或一个制表符。  
```markdown
* This is the first list item.
* Here's the second list item.  
  I need to add another paragraph below the second list item.
* And here's the third list item.
```
* This is the first list item.
* Here's the second list item.  
  I need to add another paragraph below the second list item.
* And here's the third list item.

----

~~~markdown
1.  Open the file.
2.  Find the following code block on line 21:
    ```html
    <html>
      <head>
        <title>Test</title>
      </head>
    ```

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.
~~~
1.  Open the file.
2.  Find the following code block on line 21:
    ```html
    <html>
      <head>
        <title>Test</title>
      </head>
    ```

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

----

分割线 `---` 、 `***` 、 `___`  
为防止意外效果，前后尽量添加空行。

---

链接  
`[Django](https://docs.djangoproject.com/zh-hans/4.0/ "Django 官方文档")`

[Django](https://docs.djangoproject.com/zh-hans/4.0/ "Django 官方文档")

使用尖括号可以很方便地把URL或者email地址变成可点击的链接。  
<https://docs.djangoproject.com/zh-hans/4.0/>  
<admin@qq.com>  

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

***

[hobbit-hole][1]

--------
## 扩展语法

---

表格生成器：  
<https://www.tablesgenerator.com/markdown_tables>



--------

[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Title: Hobbit lifestyles"
