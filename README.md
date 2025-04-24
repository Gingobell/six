# 六亲关系匹配应用

这是一个基于生日匹配的六亲关系社交应用。用户可以通过输入生日来了解六亲关系，并找到与自己相匹配的其他用户。

## 主要功能

- 生日输入与六亲关系分析
- 关系匹配推荐系统
- 每日限定的用户联系功能
- 关系洞察社区
- 即时通讯功能

## 技术栈

- React Native
- Firebase (认证、数据库、存储)
- TypeScript
- React Navigation
- React Native Reanimated

## 安装说明

1. 确保已安装 Node.js 和 npm
2. 克隆项目
```bash
git clone [项目地址]
```

3. 安装依赖
```bash
npm install
```

4. iOS 安装
```bash
cd ios
pod install
cd ..
npm run ios
```

5. Android 安装
```bash
npm run android
```

## 项目结构

```
src/
  ├── components/     # 可复用组件
  ├── screens/        # 页面组件
  ├── navigation/     # 导航配置
  ├── services/       # API 服务
  ├── utils/          # 工具函数
  ├── hooks/          # 自定义 Hooks
  ├── context/        # Context 相关
  └── types/          # TypeScript 类型定义
```

## 开发团队

[团队信息]

## 许可证

MIT 