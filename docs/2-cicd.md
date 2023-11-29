# Amplifyでアプリを作ってみよう

## 複数環境とデプロイの設定

## 本番環境の作成

- 本番環境（prod）を作成する（`amplify env add`）
- amplifyのローカル環境をクラウド環境にプッシュする（`amplify push`）
- Amplifyコンソールで環境が追加されたことを確認する
- gitコミットしてプッシュする

## 本番環境の設定

- 環境名：prod
- 認証：AWS profile

## 本番環境のデプロイ設定

- Amplifyコンソールから設定する
- ホスティング環境タブから、フロントエンドとバックエンドの紐付きを設定する（prod環境）

　　※ 環境の作成には少し時間がかかることがあります

- ロールはプルダウンから`amplifyconsole-backend-role`を選択

　　※ デフォルトであるロールだと思います

## 参考記事

Amplify バックエンド環境でのチームワークフロー

https://docs.aws.amazon.com/ja_jp/amplify/latest/userguide/team-workflows-with-amplify-cli-backend-environments.html

Amplify Consoleのデフォルトビルドイメージで動作するNode.jsのバージョンを変更する

https://dev.classmethod.jp/articles/how-to-change-node-version-on-amplify-console/