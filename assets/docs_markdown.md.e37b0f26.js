import{_ as t,c as n,o as a,a as e}from"./app.ce63a229.js";const g='{"title":"Markdown\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65E0\u5E8F\u5217\u8868\u53EF\u4EE5\u4F7F\u7528 -\u3001+\u3001*\u3002","slug":"\u65E0\u5E8F\u5217\u8868\u53EF\u4EE5\u4F7F\u7528-\u3001-\u3001-\u3002"}],"relativePath":"docs/markdown.md","lastUpdated":1648648292000}',s={},o=e(`<h1 id="markdown\u8BED\u6CD5" tabindex="-1">Markdown\u8BED\u6CD5 <a class="header-anchor" href="#markdown\u8BED\u6CD5" aria-hidden="true">#</a></h1><h4 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h4><p>\u9700\u8981\u6362\u884C\u5C31\u5728\u540E\u9762\u6DFB\u52A0\u4E24\u4E2A\u7A7A\u683C\uFF0C\u6216\u8005 <code>&lt;br&gt;</code> \u3002<br> \u90E8\u5206\u7A0B\u5E8F\u652F\u6301\u4F7F\u7528\u53CD\u659C\u7EBF <code>\\</code> \u8FDB\u884C\u6362\u884C\u3002</p><p>\u8FD9\u91CC\u662F <strong>\u5F3A\u8C03</strong> \u3001<em>\u659C\u4F53 Italic</em>\u3001<em><strong>\u7C97\u4F53 + \u659C\u4F53</strong></em></p><hr><div class="language-markdown"><pre><code><span class="token blockquote punctuation">&gt;</span> \u5F15\u7528\u6587\u5B57\u5185\u5BB9  
<span class="token blockquote punctuation">&gt;</span> \u5F15\u7528\u6587\u5B57\u5185\u5BB9  
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">-</span> Revenue was off the chart.
<span class="token blockquote punctuation">&gt;</span> <span class="token list punctuation">-</span> Profits were higher than ever.
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt;</span> \u5F15\u7528\u6587\u5B57\u5185\u5BB9  
<span class="token blockquote punctuation">&gt;&gt;</span> \u5F15\u7528\u6587\u5B57\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u5D4C\u5957  
</code></pre></div><blockquote><p>\u5F15\u7528\u6587\u5B57\u5185\u5BB9<br> \u5F15\u7528\u6587\u5B57\u5185\u5BB9</p><ul><li>Revenue was off the chart.</li><li>Profits were higher than ever.</li></ul><p>\u5F15\u7528\u6587\u5B57\u5185\u5BB9</p><blockquote><p>\u5F15\u7528\u6587\u5B57\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u5D4C\u5957</p></blockquote></blockquote><hr><div class="language-markdown"><pre><code><span class="token list punctuation">1.</span> First item
<span class="token list punctuation">2.</span> Second item
<span class="token list punctuation">3.</span> Third item
    <span class="token list punctuation">1.</span> Indented item
    <span class="token list punctuation">2.</span> Indented item
<span class="token list punctuation">4.</span> Fourth item
</code></pre></div><ol><li>First item</li><li>Second item</li><li>Third item <ol><li>Indented item</li><li>Indented item</li></ol></li><li>Fourth item</li></ol><hr><h2 id="\u65E0\u5E8F\u5217\u8868\u53EF\u4EE5\u4F7F\u7528-\u3001-\u3001-\u3002" tabindex="-1">\u65E0\u5E8F\u5217\u8868\u53EF\u4EE5\u4F7F\u7528 <code>-</code>\u3001<code>+</code>\u3001<code>*</code>\u3002 <a class="header-anchor" href="#\u65E0\u5E8F\u5217\u8868\u53EF\u4EE5\u4F7F\u7528-\u3001-\u3001-\u3002" aria-hidden="true">#</a></h2><p>\u8981\u5728\u4FDD\u7559\u5217\u8868\u8FDE\u7EED\u6027\u7684\u540C\u65F6\u5728\u5217\u8868\u4E2D\u6DFB\u52A0\u53E6\u4E00\u79CD\u5143\u7D20\uFF0C\u5C06\u8BE5\u5143\u7D20\u7F29\u8FDB\u56DB\u4E2A\u7A7A\u683C\u6216\u4E00\u4E2A\u5236\u8868\u7B26\u3002</p><div class="language-markdown"><pre><code><span class="token list punctuation">*</span> This is the first list item.
<span class="token list punctuation">*</span> Here&#39;s the second list item.  
  I need to add another paragraph below the second list item.
<span class="token list punctuation">*</span> And here&#39;s the third list item.
</code></pre></div><ul><li>This is the first list item.</li><li>Here&#39;s the second list item.<br> I need to add another paragraph below the second list item.</li><li>And here&#39;s the third list item.</li></ul><hr><div class="language-markdown"><pre><code><span class="token list punctuation">1.</span>  Open the file.
<span class="token list punctuation">2.</span>  Find the following code block on line 21:
    \`\`\`html
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    \`\`\`

<span class="token code keyword">        &lt;html&gt;
          &lt;head&gt;
            &lt;title&gt;Test&lt;/title&gt;
          &lt;/head&gt;</span>

<span class="token list punctuation">3.</span>  Update the title to match the name of your website.
</code></pre></div><ol><li><p>Open the file.</p></li><li><p>Find the following code block on line 21:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><pre><code>&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Test&lt;/title&gt;
  &lt;/head&gt;
</code></pre></li><li><p>Update the title to match the name of your website.</p></li></ol><hr><p>\u5206\u5272\u7EBF <code>---</code> \u3001 <code>***</code> \u3001 <code>___</code><br> \u4E3A\u9632\u6B62\u610F\u5916\u6548\u679C\uFF0C\u524D\u540E\u5C3D\u91CF\u6DFB\u52A0\u7A7A\u884C\u3002</p><hr><p>\u94FE\u63A5<br><code>[Django](https://docs.djangoproject.com/zh-hans/4.0/ &quot;Django \u5B98\u65B9\u6587\u6863&quot;)</code></p><p><a href="https://docs.djangoproject.com/zh-hans/4.0/" title="Django \u5B98\u65B9\u6587\u6863" target="_blank" rel="noopener noreferrer">Django</a></p><p>\u4F7F\u7528\u5C16\u62EC\u53F7\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u628AURL\u6216\u8005email\u5730\u5740\u53D8\u6210\u53EF\u70B9\u51FB\u7684\u94FE\u63A5\u3002<br><a href="https://docs.djangoproject.com/zh-hans/4.0/" target="_blank" rel="noopener noreferrer">https://docs.djangoproject.com/zh-hans/4.0/</a><br><a href="mailto:admin@qq.com">admin@qq.com</a></p><p>I love supporting the <strong><a href="https://eff.org" target="_blank" rel="noopener noreferrer">EFF</a></strong>. This is the <em><a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer">Markdown Guide</a></em>. See the section on <a href="#code"><code>code</code></a>.</p><hr><p><a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Title: Hobbit lifestyles" target="_blank" rel="noopener noreferrer">hobbit-hole</a></p><hr>`,28),p=[o];function l(c,i,r,d,u,h){return a(),n("div",null,p)}var m=t(s,[["render",l]]);export{g as __pageData,m as default};
