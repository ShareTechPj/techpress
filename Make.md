# TechePress構築
TechePress構築

## コマンド
```bash
# Gitクローン
git clone https://github.com/ShareTechPj/techpress.git techpress
yarn install
yarn upgrade vuepress@^1.2.0
```

## 以下は初期構築
```bash
# ローカルのGit環境を初期化
rm -rf .git
git init
# リモートのURLは適宜指定
# 予めGitHub上に空のrepositoryを作成
# ※以降の手順で「master」を作成するため、mdファイルの初期作成等は不要
git remote add origin https://github.com/ShareTechPj/techpress.git

# コミットしてプッシュ　※ここで「master」ブランチ作成
git add .
git commit -m "first commit"
git push -u origin master

```
