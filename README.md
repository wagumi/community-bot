# Community Bot

![!image](/docs/assets/wagumi.png)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Twitter: wagumiDAO](https://img.shields.io/twitter/follow/wagumiDAO.svg?style=social)](https://twitter.com/wagumiDAO)

和組コミュニティ用 Bot の開発リポジトリへようこそ 🎉

## 技術スタックについて

主に下記の技術を利用しています。
詳細は各パッケージ以下の README.md をご参照ください。

- [NestJS](https://nestjs.com/)
- [Discord.JS](https://discord.js.org/)
- [Railway](https://railway.app/)

## リポジトリ構成について

このリポジトリではモノレポ構成を採用し、下記の利用者ごとにパッケージを用意して Bot を開発しています。

- 和組コミュニティ全体用
- 和組の各チームコミュニティ用

パッケージ共通の機能は下記があります。

- コード構文チェック
- フォーマット整形

## ローカル環境のセットアップ

### 1. Discord サーバのセットアップ

[Wiki > Dev Environment](https://github.com/wagumi/community-bot/wiki/Dev-Environment) を参考にローカル環境用の Discord サーバを用意します。

### 2. リポジトリのクローン

```shell
% https://github.com/wagumi/community-bot.git
% cd community-bot
% yarn
```

### 3. パッケージ以下でローカルサーバを起動

動作を確認したいパッケージディレクトリに移動してサーバを起動します。
e.g. Dev Team Bot の場合

```shell
% cd packages/dev-team-bot
% yarn dev
```

### 4. ローカル環境用の Discord サーバで Bot の動作を確認

ローカルで Bot サーバが起動したら、Discord チャンネルで Bot が反応したらセットアップ完了です 🚀

![ローカルでの Bot 動作チェック](/docs/assets/bot-local-check.png)

## コントリビューションについて

現在このリポジトリの開発は、Discord コミュニティベースで不定期開催されるプロジェクトで行われています。

こちらの [招待リンク](https://discord.gg/b8eJ3bmVnj) から和組 Discord サーバにご参加いただき、下記のプロジェクトへの参加方法をご覧ください。

[wagumi/community-bot Wiki > Project](https://github.com/wagumi/community-bot/wiki/Project)

### 開発フローについて 🏗️

開発フローの手順は下記の Wiki をご覧ください。
[wagumi/community-bot Wiki > Development Flow](https://github.com/wagumi/community-bot/wiki/Development-Flow)

## もしバグを発見したら 👾

バグなどのフィードバックはいつでも大歓迎です 🙏 [GitHub issues page](https://github.com/wagumi/community-bot/issues) からログなどの情報を Issue で残していただけたら嬉しいです。

## ライセンス

和組 Community Bot is [GPL-3.0 licensed](LICENSE).
