# 知乎热榜

<https://www.zhihu.com/billboard>

```python
import json

import requests
from bs4 import BeautifulSoup

url = 'https://www.zhihu.com/billboard'
headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/100.0.4896.88 Safari/537.36',
}
html_doc = requests.get(url, headers=headers).text
soup = BeautifulSoup(html_doc, 'lxml')
'''
for item in soup.find_all('a', 'HotList-item'):
    print(item.find('div', 'HotList-itemIndex').text,
          item.find('div', 'HotList-itemBody').find('div', 'HotList-itemTitle').text)
    # print(item.find('div', 'HotList-itemBody').find('div', 'HotList-itemExcerpt').text)
    # print(item.find('div', 'HotList-itemBody').find('div', 'HotList-itemMetrics').text)
'''
js = soup.find(id='js-initialData').text
# print(js)
k = json.loads(js)
# print(k['initialState']['topstory']['hotList'])
for it in k['initialState']['topstory']['hotList']:
    print('标题：', it['target']['titleArea']['text'])
    # print('摘要：', it['target']['excerptArea']['text'])
    print('链接：', it['target']['link']['url'])
    # print('热度：', it['target']['metricsArea']['text'])
    print('答案数量：', it['feedSpecific']['answerCount'])
    print('-' * 80)
```

运行结果：

```
标题： 中科院回应停用知网，称「情况属实，续订费近千万且连年上涨」，如何评价这件事？知网订购费用标准合理吗？
链接： https://www.zhihu.com/question/528599350
答案数量： 1208
--------------------------------------------------------------------------------
标题： 国务院表示要足量发放使用全国统一通行证，核酸检测结果 48 小时内全国互认，此举具有哪些积极意义？
链接： https://www.zhihu.com/question/528628842
答案数量： 694
--------------------------------------------------------------------------------
标题： 辽宁盘锦一女子公园内穿和服拍照遭路人围劝，穿衣自由应如何界定？
链接： https://www.zhihu.com/question/528635207
答案数量： 912
--------------------------------------------------------------------------------
标题： 谷歌地图开放俄罗斯所有战略要地的高像素卫星图像，将产生哪些影响？如何从法律角度解读这种做法？
链接： https://www.zhihu.com/question/528703938
答案数量： 334
--------------------------------------------------------------------------------
标题： 浙江杭州一新郎婚检竟被告知生理为女性，极度悲伤想跟老婆分手，医院随后回应称他们的疏忽，如何看待此事？
链接： https://www.zhihu.com/question/528235363
答案数量： 229
--------------------------------------------------------------------------------
标题： 如何看待上海一骑手代购 6 桶泡面 20 个鸡蛋要 900 元还没小票？
链接： https://www.zhihu.com/question/528606474
答案数量： 965
--------------------------------------------------------------------------------
标题： 椰树与瑞幸的跨界设计刷屏，网友们大呼「土到极致就是潮」，如何看待这一联名设计？
链接： https://www.zhihu.com/question/527669669
答案数量： 242
--------------------------------------------------------------------------------
标题： 3M 、杜邦、巴斯夫回应拒绝复工复产称「消息不属实」，目前上海情况如何？何时能开始复工复产？
链接： https://www.zhihu.com/question/528653329
答案数量： 105
--------------------------------------------------------------------------------
标题： 如何评价何同学的视频《我找到了我最喜欢的数码产品，但是....》?
链接： https://www.zhihu.com/question/528515989
答案数量： 612
--------------------------------------------------------------------------------
标题： 新疆军区某师无人机蜂群「作战行动」展开，你怎么看无人机蜂群？
链接： https://www.zhihu.com/question/528068291
答案数量： 139
--------------------------------------------------------------------------------
标题： 如何看待网传西安交通大学创新港宿舍改四人间?
链接： https://www.zhihu.com/question/528354441
答案数量： 190
--------------------------------------------------------------------------------
标题： 为什么黄金几乎在所有文明里都是贵重金属，并且作为了货币？
链接： https://www.zhihu.com/question/23846763
答案数量： 175
--------------------------------------------------------------------------------
标题： 4 月 18 日，银行股多数下挫，招商银行盘中罕见跌逾 8% ，发生了什么？
链接： https://www.zhihu.com/question/528638939
答案数量： 69
--------------------------------------------------------------------------------
标题： 布查事件已经过去两周了，为何目前没有进一步的调查结果出来?
链接： https://www.zhihu.com/question/528583266
答案数量： 156
--------------------------------------------------------------------------------
标题： 人类还有独自分娩的能力吗？
链接： https://www.zhihu.com/question/355141075
答案数量： 274
--------------------------------------------------------------------------------
标题： 为什么凌晨入住酒店，没住满 24 个小时的情况下要求十二点退房？
链接： https://www.zhihu.com/question/528389763
答案数量： 76
--------------------------------------------------------------------------------
标题： 如何科学看待「连花清瘟」的药效？连花清瘟在抗击新冠疫情中究竟应该起到什么样的作用？
链接： https://www.zhihu.com/question/528620572
答案数量： 93
--------------------------------------------------------------------------------
标题： 院士称恐龙没有完全灭绝，鸡也是恐龙的后裔，你同意这一说法吗？有哪些科学依据？
链接： https://www.zhihu.com/question/528629104
答案数量： 76
--------------------------------------------------------------------------------
标题： 2022 年一季度全国居民人均可支配收入 10345 元，实际增 5.1 %，哪些信息值得关注？
链接： https://www.zhihu.com/question/528605902
答案数量： 143
--------------------------------------------------------------------------------
标题： 媒体报道「世卫称在英国儿童中发现原因不明肝炎病例」，具体情况如何？
链接： https://www.zhihu.com/question/528496928
答案数量： 38
--------------------------------------------------------------------------------
标题： 根据媒体报道「女子将再婚丈夫女儿杀害后跳湖自杀被救起」，该女子将面临什么刑罚？
链接： https://www.zhihu.com/question/528495559
答案数量： 85
--------------------------------------------------------------------------------
标题： 如何评价广州疫情仍每天 20+ 但却开始复课?
链接： https://www.zhihu.com/question/528627455
答案数量： 51
--------------------------------------------------------------------------------
标题： 有没有制作过程像土坑酸菜一样恶心的食物，并未曝光?
链接： https://www.zhihu.com/question/522768103
答案数量： 754
--------------------------------------------------------------------------------
标题： 如何评价俄罗斯联邦南部军区第 8 近卫集团军副司令 Vladimir Frolov 少将被确认阵亡？
链接： https://www.zhihu.com/question/528408854
答案数量： 41
--------------------------------------------------------------------------------
标题： 香港 4 月 21 日起分阶段放宽社交距离措施，林郑月娥表示「有关决定已平衡各方考虑」，目前情况如何？
链接： https://www.zhihu.com/question/528714121
答案数量： 57
--------------------------------------------------------------------------------
标题： 觉得张国荣很普通，我的审美有什么问题吗？
链接： https://www.zhihu.com/question/525220578
答案数量： 286
--------------------------------------------------------------------------------
标题： 乌克兰马里乌波尔的亚速斯塔尔钢厂是怎样的存在？那到底发生了什么事？为什么这么久俄罗斯还未攻下？
链接： https://www.zhihu.com/question/526700088
答案数量： 90
--------------------------------------------------------------------------------
标题： 物业不让业主回家，我砸烂门禁，算不算故意毁坏财物罪？
链接： https://www.zhihu.com/question/472601377
答案数量： 74
--------------------------------------------------------------------------------
标题： 小米 MIX 4 后再无厂商跟进屏下摄像头手机，是否说明屏下方向错了？
链接： https://www.zhihu.com/question/512767571
答案数量： 44
--------------------------------------------------------------------------------
标题： 罗永浩称「 没有勇气再做手机了，因为要烧投资人的钱」，你怎么看？现在做手机一定要烧钱吗？
链接： https://www.zhihu.com/question/528470851
答案数量： 27
--------------------------------------------------------------------------------
标题： 4 月 18 日合肥蜀山区新增一家五口 5 例核酸阳性人员，目前情况如何？
链接： https://www.zhihu.com/question/528696022
答案数量： 36
--------------------------------------------------------------------------------
标题： 消息称苹果明年将为 iPhone 15 Pro 引入潜望式长焦镜头，这一传言是否属实？你有哪些期待？
链接： https://www.zhihu.com/question/527962187
答案数量： 28
--------------------------------------------------------------------------------
标题： 从纯军事角度讲，怎么才能打下亚速钢铁厂？
链接： https://www.zhihu.com/question/527409523
答案数量： 52
--------------------------------------------------------------------------------
标题： 如何看待江苏南通市多区发布新规「进入公共场所须持 72 小时核酸阴性证明」，这一举措有何必要？
链接： https://www.zhihu.com/question/528606782
答案数量： 23
--------------------------------------------------------------------------------
标题： 如何评价西安的防疫核酸检测贴纸？
链接： https://www.zhihu.com/question/528041464
答案数量： 38
--------------------------------------------------------------------------------
标题： apple watch 有必要贴膜吗？
链接： https://www.zhihu.com/question/451216540
答案数量： 117
--------------------------------------------------------------------------------
标题： 宋亚轩一个和弦弹唱六首歌，如何评价他的唱功？
链接： https://www.zhihu.com/question/528171769
答案数量： 25
--------------------------------------------------------------------------------
标题： 大二学生党，打算考研，看到图书馆里有很多人都在用平板看网课记笔记，想问一下大家平板真的有帮助吗?
链接： https://www.zhihu.com/question/528591143
答案数量： 65
--------------------------------------------------------------------------------
标题： 为什么玩摄影的大部分都背着一个国家地理的包？
链接： https://www.zhihu.com/question/517912235
答案数量： 23
--------------------------------------------------------------------------------
标题： 职场上，最关键的能力是什么？
链接： https://www.zhihu.com/question/512409469
答案数量： 108
--------------------------------------------------------------------------------
标题： 我们读书，到底为了什么？
链接： https://www.zhihu.com/question/528585588
答案数量： 61
--------------------------------------------------------------------------------
标题： 如何才能让心灵更加自由？
链接： https://www.zhihu.com/question/19741091
答案数量： 24
--------------------------------------------------------------------------------
标题： 高中生每天晚上十点下晚自习，十二点睡觉，主要是作业太多了，五点四十起来，上课特别瞌睡，有什么办法吗？
链接： https://www.zhihu.com/question/528481991
答案数量： 76
--------------------------------------------------------------------------------
标题： 怎么炒青菜才能鲜亮翠绿不发黑？
链接： https://www.zhihu.com/question/521304731
答案数量： 30
--------------------------------------------------------------------------------
标题： 初三，每天晚上学到十一点多，早上五点十分起，效果大吗？
链接： https://www.zhihu.com/question/527563631
答案数量： 136
--------------------------------------------------------------------------------
标题： 初入社会的毕业生，找工作时对于薪酬需要注意什么？
链接： https://www.zhihu.com/question/525237145
答案数量： 24
--------------------------------------------------------------------------------
标题： 从小缺爱的女孩长大后生活有多辛苦？
链接： https://www.zhihu.com/question/273905410
答案数量： 170
--------------------------------------------------------------------------------
标题： 大专生毕业两三年找工作迷茫，该如何规划？
链接： https://www.zhihu.com/question/524678938
答案数量： 24
--------------------------------------------------------------------------------
标题： 当皮肤出现细纹后，开始抗老还来得及吗？
链接： https://www.zhihu.com/question/524263561
答案数量： 244
--------------------------------------------------------------------------------
标题： 人重要还是钱重要?
链接： https://www.zhihu.com/question/526951092
答案数量： 161
--------------------------------------------------------------------------------
```