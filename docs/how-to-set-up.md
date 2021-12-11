## How to Set Up :computer:
(Windows 向けに書かれています。Windows 以外の OS については知りません(無責任))  

### WSL (Windows Subsystem for Linux) を入れる。  
[Windows 10でLinuxを使う(WSL2)](https://qiita.com/whim0321/items/ed76b490daaec152dc69) を参考に。  

### Node.js のバージョン管理ツールである `nodeenv` を入れます。
cf: [nodenv を使って Node.js を簡単にバージョン管理する方法 【.node-versionファイルで簡単に切替】](https://it-web-life.com/nodejs_nodenv/)

### 安定版の `yarn` を入れます。
cf: [Ubuntuでyarnが実行できないエラー：ERROR:[Errno 2] No such file or directory:install](https://www.suzu6.net/posts/128-ubuntu-yarn-error/)

### Nuxt.js のインストール。  
(Nuxt.js とは、[Vue.js](https://v3.ja.vuejs.org/) を使うための、ウェブサイトのテンプレート (つまりフレームワーク) です)  
[Nuxt.js の公式インストールガイド](https://nuxtjs.org/ja/docs/get-started/installation/) に従い、 WSL 上で `yarn create nuxt-app <my-project>` をします。  

### おわり
最後に `yarn dev` とすると、[http://localhost:3000](http://localhost:3000) で見えるようになります。  

### おまけ (Github Pages)
[https://nuxtjs.org/deployments/github-pages/](https://nuxtjs.org/deployments/github-pages/)
