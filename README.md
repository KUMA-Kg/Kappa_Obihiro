# 麻雀サロンかっぱ - ウェブサイト

帯広市の麻雀サロン「かっぱ」の公式ウェブサイトです。Next.jsを使用して構築されています。

## 機能

- ホームページと料金システムの2ページ構成
- レスポンシブデザイン
- Instagram埋め込みでスケジュール・イベント情報を表示
- Twitter/Xアイコンとリンク

## セットアップ方法

### 必要条件

- Node.js 18.0.0以上
- npm または yarn

### インストール

1. リポジトリをクローン:
   ```bash
   git clone https://github.com/yourusername/mahjong-kappa.git
   cd mahjong-kappa
   ```

2. 依存関係のインストール:
   ```bash
   npm install
   ```

3. 開発サーバーの起動:
   ```bash
   npm run dev
   ```

4. ブラウザで確認:
   ```
   http://localhost:3000
   ```

## 画像ファイル

ウェブサイトで使用する画像ファイルは `/public/images/` ディレクトリに以下のファイル名で配置してください:

- logo.png - サイトロゴ
- main-image.jpg - トップページのメイン画像
- manga1.jpg, manga2.jpg, manga3.jpg - 十勝ひとりぼっち農園の漫画画像
- pro1.jpg - 植田稔宏プロの画像
- pro2.jpg - 髙橋聡志プロの画像
- price-system.jpg - 料金システム画像
- tile1.png〜tile4.png - フッターの麻雀牌装飾
- stick1.png - フッターの麻雀棒装飾

詳細は `image_files_list.txt` を参照してください。

## GitHub Pagesへのデプロイ方法

1. GitHub上でリポジトリを作成

2. リポジトリをプッシュ:
   ```bash
   git remote add origin https://github.com/yourusername/mahjong-kappa.git
   git push -u origin main
   ```

3. GitHub Actionsを使用してデプロイする場合は、`.github/workflows/deploy.yml`ファイルを追加してください。

## Instagram埋め込み方法

1. Instagramの投稿または公式アカウントページの「埋め込み」機能を使用してコードを取得
2. `app/page.tsx`ファイル内の該当セクションに埋め込みコードを配置

## カスタマイズ

- 色の変更: `globals.css`の色コードを変更（現在の主要色: 緑=#007736, 黄色=#FFDD55）
- テキスト内容: 各ページの`page.tsx`ファイル内のテキストを編集
- 料金・プロフィール情報: 該当セクション内のデータを更新

## 連絡先

麻雀サロン かっぱ
〒080-0011 北海道帯広市西1条南10丁目
TEL: 0155-XX-XXXX