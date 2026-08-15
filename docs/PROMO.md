# 宣发稿

一句定位：**不用官方 DeepSeek API，web_search 不再 401。**

仓库：`https://github.com/shinjiyu/dsh-plugin-search`  
安装：`dsh plugin --profile web add github:shinjiyu/dsh-plugin-search`  
对着：[Discussions #779](https://github.com/deepseek-ai/deepseek-harness/discussions/779) · [#408](https://github.com/deepseek-ai/deepseek-harness/discussions/408)

发之前：重启过 dsh、自己搜过一次。

---

## 1. GitHub Discussions #779 / #408 回复

```
这就是 #779 / #408 那条缝：聊天可以走网关或其它模型，默认 web_search 仍打官方 DeepSeek，没官方 key 就 401。

dsh-plugin-search 只做简化：

- 工具名还是 web_search
- 关掉内置 web-search-deepseek
- 默认零配置（Tavily keyless）

安装：

    dsh plugin --profile web add github:shinjiyu/dsh-plugin-search

然后重启 dsh。不是搜索全家桶。

Repo: https://github.com/shinjiyu/dsh-plugin-search
```

---

## 2. Show and tell

标题：`不用官方 API 也能搜索（dsh-plugin-search）`

---

## 3. 微信群首条

```
不用官方 DeepSeek API，web_search 会 401。
这个插件装上就能搜。工具名不变。零配置。

安装：
dsh plugin --profile web add github:shinjiyu/dsh-plugin-search
重启 dsh web。

仓库：https://github.com/shinjiyu/dsh-plugin-search
```

---

## 不要说

- 「我们做了搜索引擎 / 比 Tavily 更强」
- sidecar 用了哪家 key
