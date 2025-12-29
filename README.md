# 医道传承平台

基于 Next.js + Tailwind CSS + shadcn/ui 构建的中医医道传承平台。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **包管理**: Bun
- **语言**: TypeScript
- **数据库**: PostgreSQL (待配置)
- **ORM**: Drizzle ORM (待配置)
- **认证**: Better Auth (待配置)
- **AI**: Vercel AI SDK (待配置)

## 项目结构

```
yidao-app/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx           # 首页 (八奇技)
│   ├── herbs/             # 药材库页面
│   ├── service/           # 医馆服务页面
│   ├── contact/           # 联系我们页面
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Sidebar.tsx        # 侧边栏导航
│   └── VideoPlayer.tsx    # B站视频播放器
├── lib/                   # 工具函数和配置
├── public/                # 静态资源
└── styles/                # 额外样式文件
```

## 开始使用

### 1. 安装依赖

```bash
cd yidao-app
bun install
```

### 2. 运行开发服务器

```bash
bun run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 构建生产版本

```bash
bun run build
bun run start
```

## 功能特性

### 已实现
- ✅ Next.js App Router 项目结构
- ✅ Tailwind CSS 主题配置（中医风格配色）
- ✅ 侧边栏导航组件
- ✅ 四个主要页面：
  - 八奇技首页
  - 药材库搜索页
  - 医馆服务页
  - 联系我们页（含社交媒体矩阵）
- ✅ B站视频播放器组件
- ✅ 响应式设计（移动端适配）

### 待配置
- ⏳ shadcn/ui 组件库集成
- ⏳ Drizzle ORM + PostgreSQL 数据库
- ⏳ Better Auth 用户认证
- ⏳ Vercel AI SDK AI功能

## 设计特色

### 主题配色
- **ink** (#1a1a1a): 墨色 - 主要文字
- **paper** (#f7f5f0): 纸色 - 背景色
- **cinnabar** (#a93226): 朱砂红 - 强调色
- **gold** (#d4ac0d): 金色 - 装饰色
- **jade** (#5d6d7e): 玉色 - 次要色

### 字体
- **Noto Serif SC**: 衬线字体，用于标题和重要内容
- **Noto Sans SC**: 无衬线字体，用于正文
- **Ma Shan Zheng**: 书法字体，用于装饰性文字

## 页面说明

### 首页 - 八奇技
展示中医八奇技体系，包括：
1. 中医起源（30集视频课程）
2. 脉诊心法（16集实战课程）
3. 外治四法（手法、针法、灸法、砭法）
4. 内治方药
5. 内证归元

### 药材库
提供中药材搜索功能，展示常用药材信息。

### 医馆服务
介绍正骨理筋、针灸调理等服务项目。

### 联系我们
- 社交媒体矩阵（B站、知乎、抖音、YouTube、小红书）
- 微信联系方式
- 线下地址信息

## 开发规范

- 所有代码注释使用中文
- 所有变量和函数命名使用英文
- 遵循 ESLint 和 Prettier 配置
- 使用 Conventional Commits 规范提交

## 部署

推荐部署到 Vercel：

```bash
vercel deploy
```

## 许可

© 龙息堂
