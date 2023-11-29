# Amplifyでアプリを作ってみよう

## 1、初期設定

## プロジェクト名：amplify-notes-app-demo

## 手順

- nextjsのコマンドでプロジェクトを作成（`npx create-next-app@latest`）
- mantineをインストール
- mantineの初期設定
- Amplify Command Line Interface (CLI)のインストール（済みならスキップ）（`npm install -g @aws-amplify/cli`コマンド）
- amplifyのユーザを作成（済みならスキップ）、アクセス情報を設定（`amplify configure`コマンド）
- **プロジェクトディレクトリに移動したことを確認する（`pwd`コマンド）**
- amplifyを初期化（`amplify init`コマンド）
- AWS amplifyコンソールにアプリが作成されたことを確認
- Amplify UIをインストール（`npm install @aws-amplify/ui-react`）
- Authを追加（`amplify add auth`）、amplifyにpush（`amplify push`）
- apiを追加（`amplify add api`）、apiの初期設定
- スキーマにNoteモデルを追記、amplifyにpush（`amplify push`）
- push時、`Do you want to generate code for your newly created GraphQL API`に`Yes`と答えてAPIのコードを自動生成してもらう（typescript、`Enter the file name pattern of graphql queries, mutations and subscriptions`以降は初期値のまま）

## Next.jsの初期設定

What is your project named? … amplify-notes-app-demo
Would you like to use TypeScript? … Yes
Would you like to use ESLint? … Yes
Would you like to use Tailwind CSS? … Yes
Would you like to use `src/` directory? … Yes
Would you like to use App Router? (recommended) … No
Would you like to customize the default import alias (@/*)? … No

## amplifyの初期設定

- プロジェクト名（ロワーキャメルケース：amplifyNotesAppDemo）
- この設定でいいですか（Yes）
- 認証モード（AWS profile）
- AWS profileの選択　→　amplify configureで設定したユーザーを選択
- バグ情報等の共有設定　→　Noを選択

## apiの初期設定

- タイプは`GraphQL`
- 他は初期設定のままOK
- 注意！`Conflict detection (required for DataStore)`を`enable`としてDatastoreの設定を行うと、更新時の動作が少し変わります（バージョンをリクエストに送る必要が出てくる）
- `Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)`を選択
- `Do you want to edit the schema now?`で`Yes`を選択し、スキーマを編集する

## 参考記事

mantine, Getting started

https://mantine.dev/getting-started/

Amazon Amplify でウェブアプリケーションをデプロイする

https://aws.amazon.com/jp/getting-started/guides/deploy-webapp-amplify/