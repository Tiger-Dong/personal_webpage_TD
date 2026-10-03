# Tiger Dong 个人作品集

[English README](README.md)

本仓库保存 Tiger Dong 双语个人作品集的公开源文件，内容涵盖嵌入式系统、应用 AI、科学计算、科学教育和社区参与等方向。

网站面向学校评审员、合作伙伴和招聘者，帮助访问者快速了解 Tiger 的技术方向、代表项目以及可以公开查看的项目证据。

## 作品集方向

- **嵌入式系统与无障碍实验**：语音和文字控制的迈克耳孙干涉仪原型。
- **应用 AI 工具**：结合本地模型、天气和地理编码服务的日常规划工具。
- **科学仿真界面**：让使用者更容易理解和探索技术流程的前端与建模工作。

## 网站页面

- [`index.html`](index.html)：专业定位、学术与技术方向，以及三项代表成果。
- [`about.html`](about.html)：个人介绍、技能和工作方式。
- [`project_interface.html`](project_interface.html)：按“问题、职责、技术路径、公开证据、结果”组织的项目案例。
- [`activities.html`](activities.html)：工程、科学教育、社区服务和文化交流活动的双语时间线。
- [`history_update.html`](history_update.html)：简短的网站更新记录；该页面不在主导航中，也不会被搜索引擎收录。

## 公开项目证据

项目页面只链接至可以公开访问的材料：

- Arduino + 迈克耳孙干涉仪：[系统演示视频](https://youtu.be/soUNO5ICLBM)和[组件演示视频](https://youtu.be/Xa32R2NpT-M)
- 天气与地点规划助手：[agent_service 代码仓库](https://github.com/Tiger-Dong/agent_service)
- 聚氨酯材料模拟平台：[lab-frontend 代码仓库](https://github.com/Tiger-Dong/lab-frontend)
- 狼羊群体行为模拟：[源代码仓库](https://github.com/Tiger-Dong/wolf_sheep)和[参考论文](https://harvest.aps.org/v2/journals/articles/10.1103/PhysRevLett.109.118104/fulltext)

## 本地预览

这是一个无需构建步骤的静态网站。在仓库根目录启动本地服务：

```bash
python3 -m http.server 8000
```

随后在浏览器中打开 `http://localhost:8000/`。

## 隐私与公开原则

这是公开作品集仓库。只应添加计划公开展示、且本人拥有发布权的资料。

不得加入内部文档、合作协议、登记材料、身份证明、私人联系方式、未公开研究数据或合作方材料。[`.gitignore`](.gitignore) 已屏蔽常见办公文档格式和内部目录，但每次上传前仍应逐个检查文件内容。

## 发布说明

网站可直接从仓库根目录部署到 GitHub Pages，已包含自定义 [`404.html`](404.html)、[`robots.txt`](robots.txt)、[`sitemap.xml`](sitemap.xml)、规范链接、社交分享基础信息和 SVG 网站图标。

目前的规范链接假设网站地址为 `https://tiger-dong.github.io/personal_webpage_TD/`。如未来使用自定义域名，请在发布前同步更新所有规范链接和网站地图。

## 目录结构

```text
assets/       样式、语言切换脚本和网站图标
images/       可公开使用的网站图片
*.html        双语作品集页面
robots.txt    搜索引擎爬虫规则
sitemap.xml   搜索引擎页面索引
```
