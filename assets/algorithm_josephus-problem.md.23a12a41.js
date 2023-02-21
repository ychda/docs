import{_ as n,c as s,o as a,a as p}from"./app.b8c921aa.js";const h='{"title":"Josephus_problem","description":"","frontmatter":{"title":"Josephus_problem","date":"2022-04-02 21:00","categories":"algorithm"},"headers":[{"level":2,"title":"\u7B97\u6CD5","slug":"\u7B97\u6CD5"}],"relativePath":"algorithm/josephus-problem.md","lastUpdated":1676985256000}',t={},e=p(`<h2 id="\u7B97\u6CD5" tabindex="-1">\u7B97\u6CD5 <a class="header-anchor" href="#\u7B97\u6CD5" aria-hidden="true">#</a></h2><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> value
        self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span>


<span class="token keyword">def</span> <span class="token function">create_linkList</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    head <span class="token operator">=</span> Node<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    pre <span class="token operator">=</span> head
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        newNode <span class="token operator">=</span> Node<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        pre<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> newNode
        pre <span class="token operator">=</span> newNode
    pre<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> head
    <span class="token keyword">return</span> head


n <span class="token operator">=</span> <span class="token number">41</span>
m <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">if</span> m <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    head <span class="token operator">=</span> create_linkList<span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    pre <span class="token operator">=</span> <span class="token boolean">None</span>
    cur <span class="token operator">=</span> head
    <span class="token keyword">while</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">!=</span> cur<span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            pre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        pre<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
        cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span>
        cur <span class="token operator">=</span> pre<span class="token punctuation">.</span><span class="token builtin">next</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre></div><p>\u53C2\u8003\uFF1A</p><ul><li><a href="https://en.wikipedia.org/wiki/Josephus_problem" target="_blank" rel="noopener noreferrer">algorithmist</a></li><li><a href="https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">algorithmist</a></li></ul>`,4),o=[e];function c(l,r,u,k,i,d){return a(),s("div",null,o)}var b=n(t,[["render",c]]);export{h as __pageData,b as default};
