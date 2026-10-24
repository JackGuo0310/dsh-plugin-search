# dsh-plugin-search

[![Awesome DSH Plugin](https://awesome-dsh-plugin.com/badge.svg)](https://awesome-dsh-plugin.com)

不用官方 DeepSeek API，`web_search` 不再 401。

默认零配置。装上就把内置 `web-search-deepseek` 关掉，工具名还是 `web_search`。

对应：[Discussions #779](https://github.com/deepseek-ai/deepseek-harness/discussions/779) · [#408](https://github.com/deepseek-ai/deepseek-harness/discussions/408) · 介绍帖：[Show and tell #1715](https://github.com/deepseek-ai/deepseek-harness/discussions/1715)

## 维护

本仓库由 [JackGuo0310](https://github.com/JackGuo0310/dsh-plugin-search) 维护，基于 [shinjiyu/dsh-plugin-search](https://github.com/shinjiyu/dsh-plugin-search)，保留原 MIT 许可。

## 安装

DSH peer 版本要求：`@deepseek-ai/dsh >=0.2.1-rc.2`（本次修复验证的本机版本）。peer 标记为 optional，避免插件安装时额外拉取一份 DSH。

```powershell
dsh plugin --profile web add github:JackGuo0310/dsh-plugin-search#v0.1.1
```

然后**重启** `dsh web`。旧会话的工具表不会更新。

## 配置

可以不配。没 key 走 Tavily keyless。

有账号再设：

```
TAVILY_API_KEY=tvly-...
```

不要把 key 写进仓库。

### 新版 DSH 配置兼容（0.1.1）

`cordis.patch.yml` 中的 `- id: web` 会整体替换 `config`，而不是逐字段合并。旧版本只设置 `searchProvider: simple-search`，会丢失 DSH 默认的 `fetchProvider`；当 `deepseek-fetch-api` 和 `http` 同时可用时，`web_fetch` 因无法唯一选择 provider 而报 `WEB_PROVIDER_AMBIGUOUS`。

0.1.1 在同一 `config` 下显式保留两个选择：

```yaml
- id: web
  config:
    searchProvider: simple-search
    fetchProvider: http
```

搜索仍使用 Tavily，API key / keyless 逻辑不变。这里仅将默认抓取 provider 设为 `http`，**不禁用 DeepSeek Fetch API**。用户仍可在 profile 层覆盖选择，例如改用 `fetchProvider: deepseek-fetch-api`；覆盖 `web.config` 时也要同时保留 `searchProvider: simple-search`，以免再次丢失搜索配置。

## 30 秒验收

1. 主模型用 GLM / 网关 / 任何非官方 DeepSeek  
2. 不要设 `DEEPSEEK_API_KEY`  
3. 问「今天 DeepSeek Harness 最新 Discussions 说了什么」  
4. 过关：`web_search` 能出链接，不再红字 401  

## 不要做

- 不要改 `runtime/` 或官方 `web-search-deepseek`  
- 不要把它宣传成搜索引擎全家桶  

## 社区

微信群：**deepseek harness 交流群**

![微信群二维码](docs/community/wechat-group.png)

微信群码大约 7 天过期（本张到 **2026-08-22**）。

宣发稿在 [`docs/PROMO.md`](docs/PROMO.md)。

## License

MIT
