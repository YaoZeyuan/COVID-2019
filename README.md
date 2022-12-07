本项目为对[epcalc](https://github.com/gabgoh/epcalc)项目的中文翻译, 原项目在线版位于[http://gabgoh.github.io/COVID/index.html](http://gabgoh.github.io/COVID/index.html)

# SEIR 模型

SEIR 模型是一种常用的传染病模型，用来描述病毒如何在人群中传播。通常情况下，SEIR 模型用来描述一种传染病如何在群体中传播，并预测疫情的发展趋势。SEIR 模型假设人群中有四种不同的状态：易感者（S）、潜伏者（E）、感染者（I）和康复者（R）。

- 易感者（S）表示健康的人群，这些人尚未接触过病毒，因此对病毒没有免疫力。
- 潜伏者（E）表示已经接触过病毒但尚未发病的人群。
- 感染者（I）表示正在患病的人群，这些人会传播病毒给其他人。
- 康复者（R）表示已经康复的人群，这些人已经对病毒产生了免疫力，不会再被感染。

SEIR 模型还假设病毒传播受到群体免疫的限制。这意味着，随着更多的人接触病毒并产生免疫力，病毒在人群中的传播速度会减慢。通过模拟病毒在人群中的传播，SEIR 模型可以预测疫情的发展趋势，并为政府决策提供参考。

via https://chat.openai.com/chat

项目在线地址: http://yaozeyuan.online/COVID-2019

---

_Psst — looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)_

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
