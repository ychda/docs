import{_ as n,c as s,o as t,a}from"./app.b8c921aa.js";const m='{"title":"\u77E5\u4E4E\u70ED\u699C","description":"","frontmatter":{},"headers":[],"relativePath":"docs/code/zhihu-billboard.md","lastUpdated":1679910406000}',o={},p=a(`<h1 id="\u77E5\u4E4E\u70ED\u699C" tabindex="-1">\u77E5\u4E4E\u70ED\u699C <a class="header-anchor" href="#\u77E5\u4E4E\u70ED\u699C" aria-hidden="true">#</a></h1><p><a href="https://www.zhihu.com/billboard" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/billboard</a></p><div class="language-python"><pre><code><span class="token keyword">import</span> json

<span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

url <span class="token operator">=</span> <span class="token string">&#39;https://www.zhihu.com/billboard&#39;</span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) &#39;</span>
                  <span class="token string">&#39;Chrome/100.0.4896.88 Safari/537.36&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
html_doc <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span>text
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_doc<span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
for item in soup.find_all(&#39;a&#39;, &#39;HotList-item&#39;):
    print(item.find(&#39;div&#39;, &#39;HotList-itemIndex&#39;).text,
          item.find(&#39;div&#39;, &#39;HotList-itemBody&#39;).find(&#39;div&#39;, &#39;HotList-itemTitle&#39;).text)
    # print(item.find(&#39;div&#39;, &#39;HotList-itemBody&#39;).find(&#39;div&#39;, &#39;HotList-itemExcerpt&#39;).text)
    # print(item.find(&#39;div&#39;, &#39;HotList-itemBody&#39;).find(&#39;div&#39;, &#39;HotList-itemMetrics&#39;).text)
&#39;&#39;&#39;</span>
js <span class="token operator">=</span> soup<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token string">&#39;js-initialData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>text
<span class="token comment"># print(js)</span>
k <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>js<span class="token punctuation">)</span>
<span class="token comment"># print(k[&#39;initialState&#39;][&#39;topstory&#39;][&#39;hotList&#39;])</span>
<span class="token keyword">for</span> it <span class="token keyword">in</span> k<span class="token punctuation">[</span><span class="token string">&#39;initialState&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;topstory&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;hotList&#39;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u6807\u9898\uFF1A&#39;</span><span class="token punctuation">,</span> it<span class="token punctuation">[</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;titleArea&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># print(&#39;\u6458\u8981\uFF1A&#39;, it[&#39;target&#39;][&#39;excerptArea&#39;][&#39;text&#39;])</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u94FE\u63A5\uFF1A&#39;</span><span class="token punctuation">,</span> it<span class="token punctuation">[</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># print(&#39;\u70ED\u5EA6\uFF1A&#39;, it[&#39;target&#39;][&#39;metricsArea&#39;][&#39;text&#39;])</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u7B54\u6848\u6570\u91CF\uFF1A&#39;</span><span class="token punctuation">,</span> it<span class="token punctuation">[</span><span class="token string">&#39;feedSpecific&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;answerCount&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span> <span class="token operator">*</span> <span class="token number">80</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-"><pre><code>\u6807\u9898\uFF1A \u4E2D\u79D1\u9662\u56DE\u5E94\u505C\u7528\u77E5\u7F51\uFF0C\u79F0\u300C\u60C5\u51B5\u5C5E\u5B9E\uFF0C\u7EED\u8BA2\u8D39\u8FD1\u5343\u4E07\u4E14\u8FDE\u5E74\u4E0A\u6DA8\u300D\uFF0C\u5982\u4F55\u8BC4\u4EF7\u8FD9\u4EF6\u4E8B\uFF1F\u77E5\u7F51\u8BA2\u8D2D\u8D39\u7528\u6807\u51C6\u5408\u7406\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528599350
\u7B54\u6848\u6570\u91CF\uFF1A 1208
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u56FD\u52A1\u9662\u8868\u793A\u8981\u8DB3\u91CF\u53D1\u653E\u4F7F\u7528\u5168\u56FD\u7EDF\u4E00\u901A\u884C\u8BC1\uFF0C\u6838\u9178\u68C0\u6D4B\u7ED3\u679C 48 \u5C0F\u65F6\u5185\u5168\u56FD\u4E92\u8BA4\uFF0C\u6B64\u4E3E\u5177\u6709\u54EA\u4E9B\u79EF\u6781\u610F\u4E49\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528628842
\u7B54\u6848\u6570\u91CF\uFF1A 694
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u8FBD\u5B81\u76D8\u9526\u4E00\u5973\u5B50\u516C\u56ED\u5185\u7A7F\u548C\u670D\u62CD\u7167\u906D\u8DEF\u4EBA\u56F4\u529D\uFF0C\u7A7F\u8863\u81EA\u7531\u5E94\u5982\u4F55\u754C\u5B9A\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528635207
\u7B54\u6848\u6570\u91CF\uFF1A 912
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u8C37\u6B4C\u5730\u56FE\u5F00\u653E\u4FC4\u7F57\u65AF\u6240\u6709\u6218\u7565\u8981\u5730\u7684\u9AD8\u50CF\u7D20\u536B\u661F\u56FE\u50CF\uFF0C\u5C06\u4EA7\u751F\u54EA\u4E9B\u5F71\u54CD\uFF1F\u5982\u4F55\u4ECE\u6CD5\u5F8B\u89D2\u5EA6\u89E3\u8BFB\u8FD9\u79CD\u505A\u6CD5\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528703938
\u7B54\u6848\u6570\u91CF\uFF1A 334
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u6D59\u6C5F\u676D\u5DDE\u4E00\u65B0\u90CE\u5A5A\u68C0\u7ADF\u88AB\u544A\u77E5\u751F\u7406\u4E3A\u5973\u6027\uFF0C\u6781\u5EA6\u60B2\u4F24\u60F3\u8DDF\u8001\u5A46\u5206\u624B\uFF0C\u533B\u9662\u968F\u540E\u56DE\u5E94\u79F0\u4ED6\u4EEC\u7684\u758F\u5FFD\uFF0C\u5982\u4F55\u770B\u5F85\u6B64\u4E8B\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528235363
\u7B54\u6848\u6570\u91CF\uFF1A 229
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u770B\u5F85\u4E0A\u6D77\u4E00\u9A91\u624B\u4EE3\u8D2D 6 \u6876\u6CE1\u9762 20 \u4E2A\u9E21\u86CB\u8981 900 \u5143\u8FD8\u6CA1\u5C0F\u7968\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528606474
\u7B54\u6848\u6570\u91CF\uFF1A 965
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u6930\u6811\u4E0E\u745E\u5E78\u7684\u8DE8\u754C\u8BBE\u8BA1\u5237\u5C4F\uFF0C\u7F51\u53CB\u4EEC\u5927\u547C\u300C\u571F\u5230\u6781\u81F4\u5C31\u662F\u6F6E\u300D\uFF0C\u5982\u4F55\u770B\u5F85\u8FD9\u4E00\u8054\u540D\u8BBE\u8BA1\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/527669669
\u7B54\u6848\u6570\u91CF\uFF1A 242
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A 3M \u3001\u675C\u90A6\u3001\u5DF4\u65AF\u592B\u56DE\u5E94\u62D2\u7EDD\u590D\u5DE5\u590D\u4EA7\u79F0\u300C\u6D88\u606F\u4E0D\u5C5E\u5B9E\u300D\uFF0C\u76EE\u524D\u4E0A\u6D77\u60C5\u51B5\u5982\u4F55\uFF1F\u4F55\u65F6\u80FD\u5F00\u59CB\u590D\u5DE5\u590D\u4EA7\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528653329
\u7B54\u6848\u6570\u91CF\uFF1A 105
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u8BC4\u4EF7\u4F55\u540C\u5B66\u7684\u89C6\u9891\u300A\u6211\u627E\u5230\u4E86\u6211\u6700\u559C\u6B22\u7684\u6570\u7801\u4EA7\u54C1\uFF0C\u4F46\u662F....\u300B?
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528515989
\u7B54\u6848\u6570\u91CF\uFF1A 612
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u65B0\u7586\u519B\u533A\u67D0\u5E08\u65E0\u4EBA\u673A\u8702\u7FA4\u300C\u4F5C\u6218\u884C\u52A8\u300D\u5C55\u5F00\uFF0C\u4F60\u600E\u4E48\u770B\u65E0\u4EBA\u673A\u8702\u7FA4\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528068291
\u7B54\u6848\u6570\u91CF\uFF1A 139
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u770B\u5F85\u7F51\u4F20\u897F\u5B89\u4EA4\u901A\u5927\u5B66\u521B\u65B0\u6E2F\u5BBF\u820D\u6539\u56DB\u4EBA\u95F4?
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528354441
\u7B54\u6848\u6570\u91CF\uFF1A 190
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4E3A\u4EC0\u4E48\u9EC4\u91D1\u51E0\u4E4E\u5728\u6240\u6709\u6587\u660E\u91CC\u90FD\u662F\u8D35\u91CD\u91D1\u5C5E\uFF0C\u5E76\u4E14\u4F5C\u4E3A\u4E86\u8D27\u5E01\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/23846763
\u7B54\u6848\u6570\u91CF\uFF1A 175
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A 4 \u6708 18 \u65E5\uFF0C\u94F6\u884C\u80A1\u591A\u6570\u4E0B\u632B\uFF0C\u62DB\u5546\u94F6\u884C\u76D8\u4E2D\u7F55\u89C1\u8DCC\u903E 8% \uFF0C\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528638939
\u7B54\u6848\u6570\u91CF\uFF1A 69
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5E03\u67E5\u4E8B\u4EF6\u5DF2\u7ECF\u8FC7\u53BB\u4E24\u5468\u4E86\uFF0C\u4E3A\u4F55\u76EE\u524D\u6CA1\u6709\u8FDB\u4E00\u6B65\u7684\u8C03\u67E5\u7ED3\u679C\u51FA\u6765?
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528583266
\u7B54\u6848\u6570\u91CF\uFF1A 156
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4EBA\u7C7B\u8FD8\u6709\u72EC\u81EA\u5206\u5A29\u7684\u80FD\u529B\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/355141075
\u7B54\u6848\u6570\u91CF\uFF1A 274
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4E3A\u4EC0\u4E48\u51CC\u6668\u5165\u4F4F\u9152\u5E97\uFF0C\u6CA1\u4F4F\u6EE1 24 \u4E2A\u5C0F\u65F6\u7684\u60C5\u51B5\u4E0B\u8981\u6C42\u5341\u4E8C\u70B9\u9000\u623F\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528389763
\u7B54\u6848\u6570\u91CF\uFF1A 76
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u79D1\u5B66\u770B\u5F85\u300C\u8FDE\u82B1\u6E05\u761F\u300D\u7684\u836F\u6548\uFF1F\u8FDE\u82B1\u6E05\u761F\u5728\u6297\u51FB\u65B0\u51A0\u75AB\u60C5\u4E2D\u7A76\u7ADF\u5E94\u8BE5\u8D77\u5230\u4EC0\u4E48\u6837\u7684\u4F5C\u7528\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528620572
\u7B54\u6848\u6570\u91CF\uFF1A 93
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u9662\u58EB\u79F0\u6050\u9F99\u6CA1\u6709\u5B8C\u5168\u706D\u7EDD\uFF0C\u9E21\u4E5F\u662F\u6050\u9F99\u7684\u540E\u88D4\uFF0C\u4F60\u540C\u610F\u8FD9\u4E00\u8BF4\u6CD5\u5417\uFF1F\u6709\u54EA\u4E9B\u79D1\u5B66\u4F9D\u636E\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528629104
\u7B54\u6848\u6570\u91CF\uFF1A 76
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A 2022 \u5E74\u4E00\u5B63\u5EA6\u5168\u56FD\u5C45\u6C11\u4EBA\u5747\u53EF\u652F\u914D\u6536\u5165 10345 \u5143\uFF0C\u5B9E\u9645\u589E 5.1 %\uFF0C\u54EA\u4E9B\u4FE1\u606F\u503C\u5F97\u5173\u6CE8\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528605902
\u7B54\u6848\u6570\u91CF\uFF1A 143
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5A92\u4F53\u62A5\u9053\u300C\u4E16\u536B\u79F0\u5728\u82F1\u56FD\u513F\u7AE5\u4E2D\u53D1\u73B0\u539F\u56E0\u4E0D\u660E\u809D\u708E\u75C5\u4F8B\u300D\uFF0C\u5177\u4F53\u60C5\u51B5\u5982\u4F55\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528496928
\u7B54\u6848\u6570\u91CF\uFF1A 38
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u6839\u636E\u5A92\u4F53\u62A5\u9053\u300C\u5973\u5B50\u5C06\u518D\u5A5A\u4E08\u592B\u5973\u513F\u6740\u5BB3\u540E\u8DF3\u6E56\u81EA\u6740\u88AB\u6551\u8D77\u300D\uFF0C\u8BE5\u5973\u5B50\u5C06\u9762\u4E34\u4EC0\u4E48\u5211\u7F5A\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528495559
\u7B54\u6848\u6570\u91CF\uFF1A 85
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u8BC4\u4EF7\u5E7F\u5DDE\u75AB\u60C5\u4ECD\u6BCF\u5929 20+ \u4F46\u5374\u5F00\u59CB\u590D\u8BFE?
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528627455
\u7B54\u6848\u6570\u91CF\uFF1A 51
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u6709\u6CA1\u6709\u5236\u4F5C\u8FC7\u7A0B\u50CF\u571F\u5751\u9178\u83DC\u4E00\u6837\u6076\u5FC3\u7684\u98DF\u7269\uFF0C\u5E76\u672A\u66DD\u5149?
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/522768103
\u7B54\u6848\u6570\u91CF\uFF1A 754
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u8BC4\u4EF7\u4FC4\u7F57\u65AF\u8054\u90A6\u5357\u90E8\u519B\u533A\u7B2C 8 \u8FD1\u536B\u96C6\u56E2\u519B\u526F\u53F8\u4EE4 Vladimir Frolov \u5C11\u5C06\u88AB\u786E\u8BA4\u9635\u4EA1\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528408854
\u7B54\u6848\u6570\u91CF\uFF1A 41
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u9999\u6E2F 4 \u6708 21 \u65E5\u8D77\u5206\u9636\u6BB5\u653E\u5BBD\u793E\u4EA4\u8DDD\u79BB\u63AA\u65BD\uFF0C\u6797\u90D1\u6708\u5A25\u8868\u793A\u300C\u6709\u5173\u51B3\u5B9A\u5DF2\u5E73\u8861\u5404\u65B9\u8003\u8651\u300D\uFF0C\u76EE\u524D\u60C5\u51B5\u5982\u4F55\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528714121
\u7B54\u6848\u6570\u91CF\uFF1A 57
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u89C9\u5F97\u5F20\u56FD\u8363\u5F88\u666E\u901A\uFF0C\u6211\u7684\u5BA1\u7F8E\u6709\u4EC0\u4E48\u95EE\u9898\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/525220578
\u7B54\u6848\u6570\u91CF\uFF1A 286
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4E4C\u514B\u5170\u9A6C\u91CC\u4E4C\u6CE2\u5C14\u7684\u4E9A\u901F\u65AF\u5854\u5C14\u94A2\u5382\u662F\u600E\u6837\u7684\u5B58\u5728\uFF1F\u90A3\u5230\u5E95\u53D1\u751F\u4E86\u4EC0\u4E48\u4E8B\uFF1F\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u4E45\u4FC4\u7F57\u65AF\u8FD8\u672A\u653B\u4E0B\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/526700088
\u7B54\u6848\u6570\u91CF\uFF1A 90
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u7269\u4E1A\u4E0D\u8BA9\u4E1A\u4E3B\u56DE\u5BB6\uFF0C\u6211\u7838\u70C2\u95E8\u7981\uFF0C\u7B97\u4E0D\u7B97\u6545\u610F\u6BC1\u574F\u8D22\u7269\u7F6A\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/472601377
\u7B54\u6848\u6570\u91CF\uFF1A 74
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5C0F\u7C73 MIX 4 \u540E\u518D\u65E0\u5382\u5546\u8DDF\u8FDB\u5C4F\u4E0B\u6444\u50CF\u5934\u624B\u673A\uFF0C\u662F\u5426\u8BF4\u660E\u5C4F\u4E0B\u65B9\u5411\u9519\u4E86\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/512767571
\u7B54\u6848\u6570\u91CF\uFF1A 44
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u7F57\u6C38\u6D69\u79F0\u300C \u6CA1\u6709\u52C7\u6C14\u518D\u505A\u624B\u673A\u4E86\uFF0C\u56E0\u4E3A\u8981\u70E7\u6295\u8D44\u4EBA\u7684\u94B1\u300D\uFF0C\u4F60\u600E\u4E48\u770B\uFF1F\u73B0\u5728\u505A\u624B\u673A\u4E00\u5B9A\u8981\u70E7\u94B1\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528470851
\u7B54\u6848\u6570\u91CF\uFF1A 27
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A 4 \u6708 18 \u65E5\u5408\u80A5\u8700\u5C71\u533A\u65B0\u589E\u4E00\u5BB6\u4E94\u53E3 5 \u4F8B\u6838\u9178\u9633\u6027\u4EBA\u5458\uFF0C\u76EE\u524D\u60C5\u51B5\u5982\u4F55\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528696022
\u7B54\u6848\u6570\u91CF\uFF1A 36
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u6D88\u606F\u79F0\u82F9\u679C\u660E\u5E74\u5C06\u4E3A iPhone 15 Pro \u5F15\u5165\u6F5C\u671B\u5F0F\u957F\u7126\u955C\u5934\uFF0C\u8FD9\u4E00\u4F20\u8A00\u662F\u5426\u5C5E\u5B9E\uFF1F\u4F60\u6709\u54EA\u4E9B\u671F\u5F85\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/527962187
\u7B54\u6848\u6570\u91CF\uFF1A 28
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4ECE\u7EAF\u519B\u4E8B\u89D2\u5EA6\u8BB2\uFF0C\u600E\u4E48\u624D\u80FD\u6253\u4E0B\u4E9A\u901F\u94A2\u94C1\u5382\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/527409523
\u7B54\u6848\u6570\u91CF\uFF1A 52
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u770B\u5F85\u6C5F\u82CF\u5357\u901A\u5E02\u591A\u533A\u53D1\u5E03\u65B0\u89C4\u300C\u8FDB\u5165\u516C\u5171\u573A\u6240\u987B\u6301 72 \u5C0F\u65F6\u6838\u9178\u9634\u6027\u8BC1\u660E\u300D\uFF0C\u8FD9\u4E00\u4E3E\u63AA\u6709\u4F55\u5FC5\u8981\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528606782
\u7B54\u6848\u6570\u91CF\uFF1A 23
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u8BC4\u4EF7\u897F\u5B89\u7684\u9632\u75AB\u6838\u9178\u68C0\u6D4B\u8D34\u7EB8\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528041464
\u7B54\u6848\u6570\u91CF\uFF1A 38
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A apple watch \u6709\u5FC5\u8981\u8D34\u819C\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/451216540
\u7B54\u6848\u6570\u91CF\uFF1A 117
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5B8B\u4E9A\u8F69\u4E00\u4E2A\u548C\u5F26\u5F39\u5531\u516D\u9996\u6B4C\uFF0C\u5982\u4F55\u8BC4\u4EF7\u4ED6\u7684\u5531\u529F\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528171769
\u7B54\u6848\u6570\u91CF\uFF1A 25
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5927\u4E8C\u5B66\u751F\u515A\uFF0C\u6253\u7B97\u8003\u7814\uFF0C\u770B\u5230\u56FE\u4E66\u9986\u91CC\u6709\u5F88\u591A\u4EBA\u90FD\u5728\u7528\u5E73\u677F\u770B\u7F51\u8BFE\u8BB0\u7B14\u8BB0\uFF0C\u60F3\u95EE\u4E00\u4E0B\u5927\u5BB6\u5E73\u677F\u771F\u7684\u6709\u5E2E\u52A9\u5417?
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528591143
\u7B54\u6848\u6570\u91CF\uFF1A 65
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4E3A\u4EC0\u4E48\u73A9\u6444\u5F71\u7684\u5927\u90E8\u5206\u90FD\u80CC\u7740\u4E00\u4E2A\u56FD\u5BB6\u5730\u7406\u7684\u5305\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/517912235
\u7B54\u6848\u6570\u91CF\uFF1A 23
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u804C\u573A\u4E0A\uFF0C\u6700\u5173\u952E\u7684\u80FD\u529B\u662F\u4EC0\u4E48\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/512409469
\u7B54\u6848\u6570\u91CF\uFF1A 108
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u6211\u4EEC\u8BFB\u4E66\uFF0C\u5230\u5E95\u4E3A\u4E86\u4EC0\u4E48\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528585588
\u7B54\u6848\u6570\u91CF\uFF1A 61
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5982\u4F55\u624D\u80FD\u8BA9\u5FC3\u7075\u66F4\u52A0\u81EA\u7531\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/19741091
\u7B54\u6848\u6570\u91CF\uFF1A 24
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u9AD8\u4E2D\u751F\u6BCF\u5929\u665A\u4E0A\u5341\u70B9\u4E0B\u665A\u81EA\u4E60\uFF0C\u5341\u4E8C\u70B9\u7761\u89C9\uFF0C\u4E3B\u8981\u662F\u4F5C\u4E1A\u592A\u591A\u4E86\uFF0C\u4E94\u70B9\u56DB\u5341\u8D77\u6765\uFF0C\u4E0A\u8BFE\u7279\u522B\u778C\u7761\uFF0C\u6709\u4EC0\u4E48\u529E\u6CD5\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/528481991
\u7B54\u6848\u6570\u91CF\uFF1A 76
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u600E\u4E48\u7092\u9752\u83DC\u624D\u80FD\u9C9C\u4EAE\u7FE0\u7EFF\u4E0D\u53D1\u9ED1\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/521304731
\u7B54\u6848\u6570\u91CF\uFF1A 30
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u521D\u4E09\uFF0C\u6BCF\u5929\u665A\u4E0A\u5B66\u5230\u5341\u4E00\u70B9\u591A\uFF0C\u65E9\u4E0A\u4E94\u70B9\u5341\u5206\u8D77\uFF0C\u6548\u679C\u5927\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/527563631
\u7B54\u6848\u6570\u91CF\uFF1A 136
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u521D\u5165\u793E\u4F1A\u7684\u6BD5\u4E1A\u751F\uFF0C\u627E\u5DE5\u4F5C\u65F6\u5BF9\u4E8E\u85AA\u916C\u9700\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/525237145
\u7B54\u6848\u6570\u91CF\uFF1A 24
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4ECE\u5C0F\u7F3A\u7231\u7684\u5973\u5B69\u957F\u5927\u540E\u751F\u6D3B\u6709\u591A\u8F9B\u82E6\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/273905410
\u7B54\u6848\u6570\u91CF\uFF1A 170
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5927\u4E13\u751F\u6BD5\u4E1A\u4E24\u4E09\u5E74\u627E\u5DE5\u4F5C\u8FF7\u832B\uFF0C\u8BE5\u5982\u4F55\u89C4\u5212\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/524678938
\u7B54\u6848\u6570\u91CF\uFF1A 24
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u5F53\u76AE\u80A4\u51FA\u73B0\u7EC6\u7EB9\u540E\uFF0C\u5F00\u59CB\u6297\u8001\u8FD8\u6765\u5F97\u53CA\u5417\uFF1F
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/524263561
\u7B54\u6848\u6570\u91CF\uFF1A 244
--------------------------------------------------------------------------------
\u6807\u9898\uFF1A \u4EBA\u91CD\u8981\u8FD8\u662F\u94B1\u91CD\u8981?
\u94FE\u63A5\uFF1A https://www.zhihu.com/question/526951092
\u7B54\u6848\u6570\u91CF\uFF1A 161
--------------------------------------------------------------------------------
</code></pre></div>`,5),i=[p];function e(c,u,h,w,l,r){return t(),s("div",null,i)}var d=n(o,[["render",e]]);export{m as __pageData,d as default};
