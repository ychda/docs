import{_ as n,c as s,o as a,a as t}from"./app.ce63a229.js";const w='{"title":"\u5168\u6392\u5217 - Permute","description":"","frontmatter":{"layout":"post","title":"\u5168\u6392\u5217 - Permute","date":"2021-01-01 00:09:00 +0800","categories":["algorithm","python","permute"]},"headers":[{"level":2,"title":"C\u8BED\u8A00","slug":"c\u8BED\u8A00"},{"level":2,"title":"C++","slug":"c"},{"level":2,"title":"python","slug":"python"}],"relativePath":"algorithm/permute.md","lastUpdated":1648877139000}',p={},o=t(`<p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/NewPermutation.gif" alt=""></p><h2 id="c\u8BED\u8A00" tabindex="-1">C\u8BED\u8A00 <a class="header-anchor" href="#c\u8BED\u8A00" aria-hidden="true">#</a></h2><div class="language-c"><pre><code><span class="token comment">/*
 * Date: 2020-12-31 23:31
 * https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
 * C program to print all permutations with duplicates allowed.
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>x<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> temp<span class="token punctuation">;</span>
    temp <span class="token operator">=</span> <span class="token operator">*</span>x<span class="token punctuation">;</span>
    <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>y<span class="token punctuation">;</span>
    <span class="token operator">*</span>y <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//int cnt = 0;</span>

<span class="token keyword">void</span> <span class="token function">permute</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        cnt++;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>a <span class="token operator">+</span> index<span class="token punctuation">,</span> a <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">permute</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>a <span class="token operator">+</span> index<span class="token punctuation">,</span> a <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//backtrack</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">permute</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//    printf(&quot;%d&quot;, cnt);</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="c" tabindex="-1">C++ <a class="header-anchor" href="#c" aria-hidden="true">#</a></h2><div class="language-cpp"><pre><code><span class="token comment">/*
 * Date: 2021-01-01 12:10
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">permute</span><span class="token punctuation">(</span>string a<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> a <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">permute</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    string str <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">;</span>
    <span class="token function">permute</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="python" tabindex="-1">python <a class="header-anchor" href="#python" aria-hidden="true">#</a></h2><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
   Date: 2020-12-25 16:59
&quot;&quot;&quot;</span>
<span class="token keyword">import</span> time
<span class="token keyword">import</span> datetime
<span class="token keyword">from</span> typing <span class="token keyword">import</span> List


<span class="token comment"># ---------------------------------------\u5168----\u6392----\u5217------------------------------------------------------------------</span>
<span class="token comment"># https://leetcode-cn.com/problems/permutations/</span>
<span class="token keyword">def</span> <span class="token function">permute</span><span class="token punctuation">(</span>nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">backtrack</span><span class="token punctuation">(</span>first<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> first <span class="token operator">==</span> n<span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span>
            backtrack<span class="token punctuation">(</span>first <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
            nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>first<span class="token punctuation">]</span>

    backtrack<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token comment"># ----------------------------------------------------------------------------------------------------------------------</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    start <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    nums <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    rst <span class="token operator">=</span> permute<span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> rst<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>each<span class="token punctuation">)</span> <span class="token keyword">for</span> each <span class="token keyword">in</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>

    end <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u8017\u65F6: &#39;</span><span class="token punctuation">,</span> end <span class="token operator">-</span> start<span class="token punctuation">,</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span>

</code></pre></div><h4 id="\u94FE\u63A5" tabindex="-1">\u94FE\u63A5: <a class="header-anchor" href="#\u94FE\u63A5" aria-hidden="true">#</a></h4><ul><li><a href="https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/" target="_blank" rel="noopener noreferrer">geeksforgeeks</a></li></ul>`,9),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{w as __pageData,y as default};
