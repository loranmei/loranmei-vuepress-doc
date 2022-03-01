## 0x00 说明

在[vuepress-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco)的基础上修改，仅修改了少量代码

> 注意：由于lastUpdate是使用git的提交时间，所以确保在一个git项目中。

## 0x01 快速搭建博客

### 1. 安装yarn和vupress

如果已安装，则跳过这步；

如果没有安装，请参考这篇博客安装yarn和vuepress：[vuepress-theme-reco主题的安装和使用](https://conimi.com/archives/145)

### 2. 快速启动

```bash
git clone https://github.com/loranmei/loranmei-vuepress-doc.git
# 或者使用 wget 方式，再自行解压
cd vuepress-doc
yarn dev    # 本地测试命令，访问http://localhost:8080可访问

# 编译成静态文件，生成静态文件默认位置：docs/.vuepress/dist，后续用于部署到服务器或者Github Page
yarn build  
```