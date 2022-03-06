# Team Dev Bot

![!image](/docs/assets/wagumi.png)

[![test](https://github.com/wagumi/community-bot/actions/workflows/dev-team-bot.yml/badge.svg)](https://github.com/wagumi/community-bot/actions/workflows/dev-team-bot.yml) [![Twitter: wagumiDAO](https://img.shields.io/twitter/follow/wagumiDAO.svg?style=social)](https://twitter.com/wagumiDAO)

和組 Discord コミュニティの Team Dev 用 Bot 開発用のパッケージです。

## 技術スタックについて

Team Dev Bot では下記の技術が利用されています。

- [NestJS](https://nestjs.com/)
- [Discord.JS](https://discord.js.org/)
- [Railway](https://railway.app/) （NodeJS Version: 16.13.2）

## パッケージのインストール

```shell
% yarn
```

## Bot アプリケーションの起動

```shell
# development
$ yarn dev
```

## Test

```bash
# unit tests
% yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
