
# Camping Car Shop Landing Page

キャンピングカーショップのランディングページ（トップページ）です。
元のデザインは[Figma](https://www.figma.com/design/1QqRmbROYKyXZc76VmGcT8/Camping-Car-Shop-Landing-Page)で作成されています。

## 必要な環境

このプロジェクトを動かすには、以下のソフトウェアが必要です：

- **Node.js**（バージョン18以上を推奨）
  - JavaScriptを実行するための環境です
  - [公式サイト](https://nodejs.org/)からダウンロードしてインストールしてください

## プロジェクト構成

```
gscustom/
├── index.html              # メインのHTMLファイル
├── package.json            # プロジェクトの設定と必要なライブラリ一覧
├── vite.config.ts          # Viteの設定ファイル（ビルドツール）
├── src/                    # ソースコード（プログラムの本体）
│   ├── main.tsx           # アプリの起動ファイル
│   ├── App.tsx            # メインのアプリケーションファイル
│   ├── index.css          # 全体のスタイル設定
│   ├── components/        # 各パーツのコンポーネント
│   │   ├── Hero.tsx              # ヒーローセクション（トップの大きな画像）
│   │   ├── FeaturedVehicles.tsx  # おすすめの車両一覧
│   │   ├── InteriorShowcase.tsx  # 車内の紹介
│   │   ├── VehicleSpecs.tsx      # 車両の仕様
│   │   ├── Features.tsx          # 特徴・機能の紹介
│   │   ├── BookingForm.tsx       # 予約フォーム
│   │   └── Footer.tsx            # フッター（ページ下部）
│   ├── components/ui/     # 再利用可能なUIパーツ（ボタン、カードなど）
│   └── assets/            # 画像ファイル
└── README.md              # このファイル
```

## セットアップ方法

### 1. プロジェクトのダウンロード

このフォルダをダウンロードするか、Gitでクローンします。

### 2. 依存パッケージのインストール

ターミナル（コマンドプロンプト）を開いて、プロジェクトのフォルダに移動し、以下のコマンドを実行します：

```bash
npm install
```

または

```bash
npm i
```

このコマンドで、`package.json`に記載されているすべての必要なライブラリがインストールされます。

### 3. 開発サーバーの起動

以下のコマンドで開発サーバーを起動します：

```bash
npm run dev
```

起動すると、自動的にブラウザが開き、`http://localhost:3000`でサイトが表示されます。
（自動で開かない場合は、手動でこのURLをブラウザに入力してください）

### 4. 本番用のビルド

公開用にファイルを最適化する場合は、以下のコマンドを実行します：

```bash
npm run build
```

ビルドされたファイルは`build`フォルダに作成されます。

## 使用している主な技術

- **React 18**: ユーザーインターフェース構築のためのJavaScriptライブラリ
- **TypeScript**: JavaScriptに型を追加した言語
- **Vite**: 高速な開発サーバーとビルドツール
- **Tailwind CSS**: スタイリングのためのCSSフレームワーク（設定は`src/index.css`に含まれています）
- **Radix UI**: アクセシブルなUIコンポーネント集
- **Lucide React**: アイコンライブラリ
- **React Hook Form**: フォーム管理
- **Sonner**: トースト通知（画面上部に表示されるメッセージ）

## 主要なファイルの説明

### 設定ファイル

- **`package.json`**: プロジェクトで使用するライブラリや、実行できるコマンドが書かれています
- **`vite.config.ts`**: Viteの設定（ポート番号、ビルド設定、パスエイリアスなど）
- **`index.html`**: HTMLのエントリーポイント。`src/main.tsx`を読み込みます

### ソースコード

- **`src/main.tsx`**: アプリケーションの起動ポイント。Reactアプリを`#root`要素にマウントします
- **`src/App.tsx`**: ページ全体の構成。各セクションのコンポーネントを組み合わせています
- **`src/index.css`**: グローバルなCSSスタイル。Tailwind CSSの設定も含まれています

### コンポーネント

- **`src/components/Hero.tsx`**: ページトップのヒーローセクション
- **`src/components/FeaturedVehicles.tsx`**: おすすめ車両の表示
- **`src/components/InteriorShowcase.tsx`**: 車内の詳細表示
- **`src/components/VehicleSpecs.tsx`**: 車両仕様の一覧
- **`src/components/Features.tsx`**: サービスの特徴紹介
- **`src/components/BookingForm.tsx`**: 予約・問い合わせフォーム
- **`src/components/Footer.tsx`**: ページ下部のフッター
- **`src/components/ui/`**: ボタンやカード、ダイアログなど、再利用可能な小さなUIパーツ

## トラブルシューティング

### 「npm: コマンドが見つかりません」と表示される

Node.jsがインストールされていません。[Node.js公式サイト](https://nodejs.org/)からダウンロードしてインストールしてください。

### ポート3000が既に使用されている

他のアプリケーションがポート3000を使用している場合は、`vite.config.ts`の`server.port`を別の番号（例：3001）に変更してください。

### インストールに失敗する

- インターネット接続を確認してください
- `node_modules`フォルダと`package-lock.json`ファイルを削除して、再度`npm install`を実行してください
- 古いバージョンのNode.jsを使用している場合は、最新版にアップデートしてください

### 画像が表示されない

画像ファイルは`src/assets/`フォルダに配置されています。`vite.config.ts`でパスエイリアスが設定されているため、正しくインポートされているか確認してください。
