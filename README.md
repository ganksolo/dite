# React + Vite

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.com/new/template?template=https://github.com/ganksolo/dite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 部署方案

本项目为静态前端项目（React + Vite），构建后生成纯静态资源文件。

### 1. 部署普通服务器方案（Nginx）

1. 在本地运行项目构建命令：
   ```bash
   npm run build
   ```
   构建完成后，项目根目录会生成一个 `dist` 文件夹。
2. 登录您的服务器，确保已安装 Nginx。
3. 将本地 `dist` 文件夹的内容上传至服务器的指定目录（例如：`/var/www/html/your-project`）。可以使用 `scp`、`rsync` 或 FTP 工具上传。
4. 修改 Nginx 配置文件（通常在 `/etc/nginx/nginx.conf` 或 `/etc/nginx/sites-available/default`）：
   ```nginx
   server {
       listen 80;
       server_name your_domain.com; # 替换为您的域名

       location / {
           root /var/www/html/your-project; # 替换为您上传的实际存放路径
           index index.html index.htm;
           try_files $uri $uri/ /index.html; # 防止 React Router 单页应用刷新 404
       }
   }
   ```
5. 检查并重启 Nginx：
   ```bash
   nginx -t
   systemctl restart nginx
   ```

### 2. 部署阿里云服务器方案（使用 OSS + CDN）

对于纯静态网站，推荐使用阿里云 OSS（对象存储）结合 CDN 加速，成本低且速度快。

1. **构建项目**：运行 `npm run build` 生成 `dist` 文件夹。
2. **创建 OSS Bucket**：登录阿里云控制台，在 OSS 服务中创建一个新的 Bucket（读写权限设为“公共读”）。
3. **开启静态网站托管**：进入新创建的 Bucket -> 数据管理 -> 静态页面，将**默认首页**和**默认 404 页**都设置为 `index.html`。
4. **上传文件**：将 `dist` 文件夹中的**所有内容**上传到这个 Bucket 的根目录。您可以使用阿里云网页端或者 OSS Browser 工具上传。
5. **绑定自定义域名 & CDN（可选但推荐）**：在 Bucket 配置中绑定您自己的域名，并根据提示开启 CDN 免费 HTTPS 证书加速。

### 3. 部署腾讯云服务器方案（使用 COS + CDN）

与阿里云类似，腾讯云静态网站推荐使用 COS（对象存储）配合 CDN。

1. **构建项目**：运行 `npm run build` 生成 `dist` 目录。
2. **创建 COS 存储桶**：登录腾讯云控制台，在 COS 服务中创建一个公有读私有写的存储桶。
3. **开启静态网站**：进入存储桶 -> 基础配置 -> 静态网站，勾选开启，并将**索引文档**和**错误文档**均设置为 `index.html`。
4. **上传文件**：将 `dist` 目录内的所有文件直接上传至存储桶的根目录。
5. **配置 CDN（推荐）**：由于 COS 默认的访问链接有时会被限制，强烈建议在 COS 控制台中为该存储桶绑定自定义域名，并一键开启内容分发网络（CDN）及 HTTPS 加速。
