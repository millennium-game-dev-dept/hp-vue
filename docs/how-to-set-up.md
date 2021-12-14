# :computer: 環境構築について
Windows 向けに書かれています。Windows 以外の OS については知りません(無責任)。  

## WSL (Windows Subsystem for Linux) を入れます
cf: [Windows 10でLinuxを使う(WSL2)](https://qiita.com/whim0321/items/ed76b490daaec152dc69)  

## `nodeenv` を用いて Node.js 16.13.0 を入れます
Node.js のバージョン管理ツール `nodeenv` を入れます。

```sh
# git clone
git clone https://github.com/nodenv/nodenv.git ~/.nodenv
cd ~/.nodenv && src/configure && make -C src
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(nodenv init -)"' >> ~/.bash_profile

# Install nodenv-update
sudo apt update
mkdir -p "$(nodenv root)"/plugins
git clone https://github.com/nodenv/nodenv-update.git "$(nodenv root)"/plugins/nodenv-update
nodenv update

# Install nodenv-build
git clone https://github.com/nodenv/node-build.git "$(nodenv root)"/plugins/node-build

# Install node 16.13.0
nodenv install 16.13.0
```

cf: [nodenv を使って Node.js を簡単にバージョン管理する方法 【.node-versionファイルで簡単に切替】](https://it-web-life.com/nodejs_nodenv/)

## 安定版の `yarn` を入れます
```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
apt install yarn
```

cf: [Ubuntuでyarnが実行できないエラー：ERROR:[Errno 2] No such file or directory:install](https://www.suzu6.net/posts/128-ubuntu-yarn-error/)

## Nuxt.js のインストール
```sh
yarn add nuxt
yarn add -D push-dir
yarn add typescript --dev
```

Nuxt.js とは、[Vue.js](https://v3.ja.vuejs.org/) を使うための、Web アプリフレームワークです。  
[Nuxt.js の公式インストールガイド](https://nuxtjs.org/ja/docs/get-started/installation/) に従い、 WSL 上で `yarn create nuxt-app <my-project>` をします。  

## おわり
最後に `yarn dev` とすると、[http://localhost:3000/millennium-game-dev-dept/](http://localhost:3000/millennium-game-dev-dept/) からサイトが見えるようになります。  

## (おまけ) GitHub Actions ([.github/workflows/cd.yml](https://github.com/moyomogi/millennium-game-dev-dept/blob/master/.github/workflows/cd.yml)) の書き方について
cf: [Deploy Nuxt on GitHub Pages](https://nuxtjs.org/deployments/github-pages/)
