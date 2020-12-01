<div align="center">

# Résume

  <img src="./src/assets/avatar.png" width="250">
  <br>

![version](https://img.shields.io/github/v/tag/leegeunhyeok/resume?label=version)
![vue3](https://img.shields.io/github/package-json/dependency-version/leegeunhyeok/resume/vue?color=lightgreen)
![license](https://img.shields.io/github/license/leegeunhyeok/resume?color=yellow)

![stars](https://img.shields.io/github/stars/leegeunhyeok/resume?style=social)

  <img src="./src/assets/pwa-support.png" width="150">

Geunhyeok's resume template. [Demo](https://this.geundung.dev)

---

<img src="./preview.jpg" width="600">
<img src="./preview.gif" width="600">

</div>

- [x] macOS 11 Big Sur style 🍎
- [x] Fully responsive design 📱
- [x] Support darkmode 🌚
- [x] Auto load stars from Github repository ⭐️
- [x] Own contents customizing 🎉
- [x] HTML meta & og tag as template 👀
- [x] PWA Support 🔥
- [x] User friendly documentation 🥰
- [ ] Show alert when usign legacy browser (`< IE11`)
- [ ] Support `SSR` or `static` page via [Nuxt.js](https://github.com/nuxt/nuxt.js). (Waiting for Vue 3 support)

## Contents

1. [Template configuration](#-template-configuration)
2. [Deploy](#-deploy)
3. [Update](#-update)
4. [Development](#-project-setup)

## 🌍 Browser support

WIP...

## 👨‍💻 Tech stacks

Using [Vue 3](https://github.com/vuejs/vue-next) with [TS](https://github.com/microsoft/TypeScript)! ❤️

<code><img alt="vue" src="https://user-images.githubusercontent.com/26512984/88481837-ac3ed900-cf98-11ea-8a23-b53146870c81.jpg" width="32"></code>
<code><img alt="ts" src="https://user-images.githubusercontent.com/26512984/88481840-ae089c80-cf98-11ea-84f5-27da9f22c606.jpg" width="32"></code>
<code><img alt="sass" src="https://user-images.githubusercontent.com/26512984/88482103-2754bf00-cf9a-11ea-9e2f-075735d3db3c.jpg" width="32"></code>
<code><img alt="Webpack" src="https://user-images.githubusercontent.com/26512984/88482177-a21dda00-cf9a-11ea-82ad-d2dede682d37.jpg" width="32"></code>

and also included vuex, vue-router

## 📖 Template Configuration

- [Base](#base) (Template: [src/data/\_base.json](src/data/_base.json))
- [Project](#project-app) (Template: [src/data/project.json](src/data/project.json))
- [Activity](#activity-app) (Template: [src/data/activity.json](src/data/activity.json))
- [Other](#other)

## 🚀 Deploy

- 👉 [Github Page](docs/DEPLOY_GITHUB_PAGE.md)
- 👍 Manually

## 🆕 Update

- ⚠️ WARNING: Backup your data first
  - `src/data/*`
  - `src/assets/contents/*`

```bash
# 1. Add origin template repository to remote (name: template)
git remote add template https://github.com/leegeunhyeok/resume.git

# 2. Fetch all
git fetch --all

# 3. Merge latest template sources
git merge -X theirs --squash --allow-unrelated-histories template/master

# 4. Rollback your template datas
git reset -- src/data
git checkout src/data

# If you want rollback more data, follow this example
# Result: Rollback README.md
# git reset -- README.md
# git checkout README.md

# !! Check your template data before commit !!
# 5-1. (On Success 🎉)  Keep going
git commit -m "Update to latest version"


# 5-2. (Issue occurs ❗) Reset to previous commit (Return to initial state)
git reset --hard HEAD~

# 6. And rebuild/push
```

### Base

Base configuration: [src/data/\_base.json](src/data/_base.json)

| Property                 | Description                                                                                                      |               Example               |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------- | :---------------------------------: |
| `publicPath`             | Webpack [publicPath](https://webpack.js.org/guides/public-path) (If you run `build:github`, override to `/dist`) |                 `/`                 |
| `app`                    | PWA Configuration                                                                                                |                  -                  |
| `app.name`               | PWA Name                                                                                                         |              `Résume`               |
| `app.startUrl`           | Web app manifest's start_url                                                                                     |                 `/`                 |
| `title`                  | Web title (in head)                                                                                              |      `Résume | Geunhyeok LEE`       |
| `ga`                     | Google analytics tracking ID (Optional)                                                                          |          `UA-000000000-0`           |
| `introText[]`            | Intro text (Each line), og description                                                                           | `["For better", "Web experience."]` |
| `profile`                | Your profile informations                                                                                        |                  -                  |
| `profile.name`           | Name                                                                                                             |           `Geunhyeok LEE`           |
| `profile.email`          | Email                                                                                                            |        `dev.ghlee@gmail.com`        |
| `profile.photo`          | Profile photo filename at `src/assets`                                                                           |            `avatar.png`             |
| `profile.introduce`      | Introduce your self                                                                                              |         `Makes web better`          |
| `profile.social[]`       | Social informations in Contact app ([more](#social))                                                             |                  -                  |
| `profile.social[].icon`  | Social Icon (Check SocialIcon)                                                                                   |              `github`               |
| `profile.social[].label` | Social text to be displayed                                                                                      |              `Github`               |
| `profile.social[].url`   | Page URL to go                                                                                                   |  `https://github.com/leegeunhyeok`  |
| `profile.skill[]`        | Your own skills list ([more](#skill))                                                                            |                  -                  |
| `profile.skill[].label`  | Skill text to be displayed                                                                                       |            `TypeScript`             |
| `profile.skill[].color`  | Skill's dot color ([more](#colors))                                                                              |                `ts`                 |
| `profile.hobby[]`        | Your hobby (Max: 2)                                                                                              |      `["프로그래밍", "운동"]`       |

Example

```json
{
  "publicPath": "/",
  "app": {
    "name": "Résume",
    "startUrl": "/"
  },
  "title": "Résume | Geunhyeok LEE",
  "ga": "UA-000000000-0",
  "introText": ["For better", "Web experience."],
  "profile": {
    "name": "Geunhyeok LEE",
    "email": "dev.ghlee@gmail.com",
    "photo": "avatar.png",
    "introduce": "Makes web better",
    "social": [
      {
        "icon": "github",
        "label": "leegeunhyeok",
        "url": "https://github.com/leegeunhyeok"
      },
      {
        "icon": "web",
        "url": "https://geundung.dev"
      }
    ],
    "skill": [
      {
        "label": "Vue.js",
        "color": "vue"
      },
      {
        "label": "Other",
        "color": "ts"
      }
    ],
    "hobby": ["프로그래밍", "운동"]
  }
}
```

👉 [Preview](#base-preview)

#### Social

| Property | Description                         | Required |   Example    |
| :------: | :---------------------------------- | :------: | :----------: |
|  `icon`  | Social icon ([more](#social-icons)) |   `x`    | `instagram`  |
| `label`  | Link text of URL (Default: `url`)   |   `x`    | `TypeScript` |
|  `url`   | Page link URL                       |   `o`    | `TypeScript` |

#### Social Icons

|    Icon     |                                                                   Preview                                                                   |
| :---------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| `instagram` | <img alt="instagram" src="https://user-images.githubusercontent.com/26512984/99387834-f9640380-2917-11eb-9e8d-543933de2223.jpg" width="32"> |
| `facebook`  | <img alt="facebook" src="https://user-images.githubusercontent.com/26512984/99387817-f701a980-2917-11eb-91c0-aae8f165260b.jpg" width="32">  |
|  `twitter`  |  <img alt="twitter" src="https://user-images.githubusercontent.com/26512984/99387844-fa953080-2917-11eb-9f4f-3f3f2f4bc79c.jpg" width="32">  |
|   `line`    |   <img alt="line" src="https://user-images.githubusercontent.com/26512984/99387841-f9fc9a00-2917-11eb-8b3c-fe4ddf535c26.jpg" width="32">    |
| `linkedin`  | <img alt="linkedin" src="https://user-images.githubusercontent.com/26512984/99387843-fa953080-2917-11eb-81d8-f27a54fa1732.jpg" width="32">  |
|  `github`   |  <img alt="github" src="https://user-images.githubusercontent.com/26512984/99387826-f832d680-2917-11eb-80b1-3535587cdd01.jpg" width="32">   |
|  `gitlab`   |  <img alt="gitlab" src="https://user-images.githubusercontent.com/26512984/99387830-f8cb6d00-2917-11eb-998e-dbcb0bc2d7e1.jpg" width="32">   |
|    `web`    |    <img alt="web" src="https://user-images.githubusercontent.com/26512984/99387846-fb2dc700-2917-11eb-9448-54dfb1fd9bbd.jpg" width="32">    |

#### Skill

| Property | Description                         | Required |   Example    |
| :------: | :---------------------------------- | :------: | :----------: |
| `color`  | Skill's dot color ([more](#colors)) |   `o`    |     `ts`     |
| `label`  | Skill label                         |   `o`    | `TypeScript` |

#### Tag

| Property | Description                       | Required |   Example    |
| :------: | :-------------------------------- | :------: | :----------: |
|   `id`   | Tag ID                            |   `o`    |   `my_tag`   |
| `color`  | Tag's dot color ([more](#colors)) |   `o`    |     `ts`     |
| `label`  | Tag label                         |   `o`    | `TypeScript` |

---

### Project App

<img alt="project app" src="https://user-images.githubusercontent.com/26512984/99526621-d7818400-29de-11eb-9c62-17bb9ec1057b.png">

Template file: [src/data/project.json](src/data/project.json)

| Property    | Description                          |             Example             |
| :---------- | :----------------------------------- | :-----------------------------: |
| `tags`      | Project tag data                     |                -                |
| `tags.*`    | Tag group name (Auto capitalization) |           `language`            |
| `tags.*[]`  | Tag datas                            |          [Tag](#tag)[]          |
| `content[]` | Project contents data                | [Project Data](#project-data)[] |

#### Project Data

| Property      | Description                                                                                                                                 | Required |          Example          |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------ | :------: | :-----------------------: |
| `name`        | Project name                                                                                                                                |   `o`    |         `Resume`          |
| `date`        | Project date (Auto sorting - [more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Parameters)) |   `o`    |       `2020.01.01`        |
| `image`       | Project image filename (Base path: `src/assets`)                                                                                            |   `o`    |    `contents/toy.jpg`     |
| `description` | Project description                                                                                                                         |   `o`    | `This is resume template` |
| `textColor`   | Project name, description text color ([more](#colors))                                                                                      |   `x`    |           `red`           |
| `tag`         | Project [Tag](#tag) ID list                                                                                                                 |   `o`    |  `[]` or `["js", "ts"]`   |
| `url`         | Project URL (Fetch stars automatically when url is github repository!)                                                                      |   `x`    |   `https://github.com`    |

Example

```json
{
  "tags": {
    "language": [
      {
        "id": "ts",
        "color": "ts",
        "label": "TypeScript"
      },
      {
        "id": "py",
        "color": "python",
        "label": "Python"
      },
      {
        "id": "other",
        "color": "#ffa500",
        "label": "Other"
      }
    ],
    "web": [
      {
        "id": "vue",
        "color": "vue",
        "label": "Vue"
      },
      {
        "id": "react",
        "color": "react",
        "label": "React"
      },
      {
        "id": "angular",
        "color": "angular",
        "label": "Angular"
      }
    ]
  },
  "content": [
    {
      "name": "CyBot",
      "date": "2020.02.04",
      "image": "contents/sample.jpg",
      "description": "Cyworld data crawler!",
      "tag": ["py"],
      "url": "https://github.com/leegeunhyeok/cyworld-bot"
    },
    {
      "name": "Web Project",
      "date": "2020.01.01",
      "image": "contents/sample.jpg",
      "description": "Example project!",
      "tag": ["vue", "react", "angular"]
    }
  ]
}
```

👉 [Preview](#project-preview)

---

### Activity App

<img alt="activity app" src="https://user-images.githubusercontent.com/26512984/99526617-d6505700-29de-11eb-8650-7629d16deff7.png">

Template file: [src/data/activity.json](src/data/activity.json)

| Property    | Description                          |              Example              |
| :---------- | :----------------------------------- | :-------------------------------: |
| `tags`      | Activity tag data                    |                 -                 |
| `tags.*`    | Tag group name (Auto capitalization) |              `type`               |
| `tags.*[]`  | Tags data                            |           [Tag](#tag)[]           |
| `content[]` | Activity contents data               | [Activity Data](#activity-data)[] |

#### Activity Data

| Property | Description                                                                                                                              | Required |   Example    |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------: | :----------: |
| `title`  | Activity title                                                                                                                           |   `o`    |  `Company`   |
| `from`   | Date from (Auto sorting - [more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Parameters)) |   `o`    | `2020.01.01` |
| `to`     | Date to ([more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Parameters))                  |   `x`    | `2020.11.11` |
| `tag`    | Activity [Tag](#tag) ID                                                                                                                  |   `o`    |   `career`   |

Example

```json
{
  "tags": {
    "type": [
      {
        "id": "career",
        "color": "#ff6347",
        "label": "Career"
      },
      {
        "id": "cert",
        "color": "ts",
        "label": "Certification"
      }
    ],
    "other": [
      {
        "id": "ex",
        "color": "yellow",
        "label": "Example"
      }
    ]
  },
  "content": [
    {
      "title": "First Company",
      "from": "2019.01.01",
      "to": "2020.01.01",
      "tag": "career"
    },
    {
      "title": "Example Certification",
      "from": "2000.12.31",
      "tag": "cert"
    }
  ]
}
```

👉 [Preview](#activity-preview)

---

### Colors

🎨 Available at [Project](#project)/[Activity](#activity)/[Skill](#skill) tag color!

- You can use both that `keywords` and custom `CSS colors` (eg. #1292da, tomato, ...)

|   Keyword    |                                                                   Preview                                                                    |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
|  `angular`   |  <img alt="angular" src="https://user-images.githubusercontent.com/26512984/99268099-17722b00-2868-11eb-9717-c0f79ac41a36.jpg" width="32">   |
|    `blue`    |    <img alt="blue" src="https://user-images.githubusercontent.com/26512984/99268133-20fb9300-2868-11eb-86b6-cc413ed6b5b0.jpg" width="32">    |
|     `c`      |     <img alt="c" src="https://user-images.githubusercontent.com/26512984/99268136-21942980-2868-11eb-9ee6-0ba805a31fa8.jpg" width="32">      |
|    `cpp`     |    <img alt="cpp" src="https://user-images.githubusercontent.com/26512984/99268137-222cc000-2868-11eb-950e-43d0fa50d6e7.jpg" width="32">     |
|     `cs`     |     <img alt="cs" src="https://user-images.githubusercontent.com/26512984/99268138-22c55680-2868-11eb-9a31-d57ea298736c.jpg" width="32">     |
|    `css`     |    <img alt="css" src="https://user-images.githubusercontent.com/26512984/99268142-22c55680-2868-11eb-8171-7ffb0989710b.jpg" width="32">     |
|    `dart`    |    <img alt="dart" src="https://user-images.githubusercontent.com/26512984/99268144-235ded00-2868-11eb-9b4c-0cddb2e4f880.jpg" width="32">    |
|   `docker`   |   <img alt="docker" src="https://user-images.githubusercontent.com/26512984/99268146-23f68380-2868-11eb-9694-dc363a630619.jpg" width="32">   |
|    `git`     |    <img alt="git" src="https://user-images.githubusercontent.com/26512984/99268148-248f1a00-2868-11eb-8cf4-01738ec03d98.jpg" width="32">     |
|     `go`     |     <img alt="go" src="https://user-images.githubusercontent.com/26512984/99268149-248f1a00-2868-11eb-8f10-28d70c3b9013.jpg" width="32">     |
|    `gray`    |    <img alt="gray" src="https://user-images.githubusercontent.com/26512984/99268151-2527b080-2868-11eb-8f2d-85a54eab50ff.jpg" width="32">    |
|   `green`    |   <img alt="green" src="https://user-images.githubusercontent.com/26512984/99268153-2527b080-2868-11eb-8087-9f83bf3848d6.jpg" width="32">    |
|  `haskell`   |  <img alt="haskell" src="https://user-images.githubusercontent.com/26512984/99268157-25c04700-2868-11eb-863b-e945ce2ef762.jpg" width="32">   |
|    `html`    |    <img alt="html" src="https://user-images.githubusercontent.com/26512984/99268158-2658dd80-2868-11eb-9910-5e16d0232f47.jpg" width="32">    |
|    `java`    |    <img alt="java" src="https://user-images.githubusercontent.com/26512984/99268160-2658dd80-2868-11eb-83d8-f35e99841604.jpg" width="32">    |
|     `js`     |     <img alt="js" src="https://user-images.githubusercontent.com/26512984/99268167-2822a100-2868-11eb-8d6e-672199525127.jpg" width="32">     |
|   `kotlin`   |   <img alt="kotlin" src="https://user-images.githubusercontent.com/26512984/99268171-2822a100-2868-11eb-8c24-13017ca20475.jpg" width="32">   |
| `objectivec` | <img alt="objectivec" src="https://user-images.githubusercontent.com/26512984/99268176-2953ce00-2868-11eb-842b-36141e8b2b74.jpg" width="32"> |
|    `perl`    |    <img alt="perl" src="https://user-images.githubusercontent.com/26512984/99268178-2953ce00-2868-11eb-8f7c-e6e9cdc05420.jpg" width="32">    |
|    `php`     |    <img alt="php" src="https://user-images.githubusercontent.com/26512984/99268179-29ec6480-2868-11eb-815e-c1d17b6e663d.jpg" width="32">     |
|    `pwa`     |    <img alt="pwa" src="https://user-images.githubusercontent.com/26512984/99268180-2a84fb00-2868-11eb-92ef-7aac86a124ca.jpg" width="32">     |
|   `python`   |   <img alt="python" src="https://user-images.githubusercontent.com/26512984/99268183-2b1d9180-2868-11eb-89b1-ce4264ea1a28.jpg" width="32">   |
|     `r`      |     <img alt="r" src="https://user-images.githubusercontent.com/26512984/99268186-2b1d9180-2868-11eb-9429-631b0c623e7d.jpg" width="32">      |
|   `react`    |   <img alt="react" src="https://user-images.githubusercontent.com/26512984/99268188-2bb62800-2868-11eb-99c6-5f0743aeb397.jpg" width="32">    |
|    `red`     |    <img alt="red" src="https://user-images.githubusercontent.com/26512984/99268191-2bb62800-2868-11eb-9b24-d43135e3a141.jpg" width="32">     |
|    `rust`    |    <img alt="rust" src="https://user-images.githubusercontent.com/26512984/99268192-2c4ebe80-2868-11eb-9322-30145582dc6b.jpg" width="32">    |
|   `scala`    |   <img alt="scala" src="https://user-images.githubusercontent.com/26512984/99268196-2ce75500-2868-11eb-832a-a353b247bdb8.jpg" width="32">    |
|    `scss`    |    <img alt="scss" src="https://user-images.githubusercontent.com/26512984/99268197-2ce75500-2868-11eb-83a6-dd2416c8db9d.jpg" width="32">    |
|   `shell`    |   <img alt="shell" src="https://user-images.githubusercontent.com/26512984/99268198-2d7feb80-2868-11eb-8570-622fc60e9e49.jpg" width="32">    |
|   `swift`    |   <img alt="swift" src="https://user-images.githubusercontent.com/26512984/99268200-2e188200-2868-11eb-916f-3f7d6398b114.jpg" width="32">    |
|     `ts`     |     <img alt="ts" src="https://user-images.githubusercontent.com/26512984/99268203-2eb11880-2868-11eb-906b-18636b09f828.jpg" width="32">     |
|    `vim`     |    <img alt="vim" src="https://user-images.githubusercontent.com/26512984/99268205-2eb11880-2868-11eb-9be6-6e24d0a873d5.jpg" width="32">     |
|    `vue`     |    <img alt="vue" src="https://user-images.githubusercontent.com/26512984/99268208-2f49af00-2868-11eb-812e-285ecfef0512.jpg" width="32">     |
|   `yellow`   |   <img alt="yellow" src="https://user-images.githubusercontent.com/26512984/99268209-2fe24580-2868-11eb-9cf3-0ffed7010334.jpg" width="32">   |

### Other

#### Open Graph image

- `public/cover.jpg`

#### PWA Resources

- Icons: `public/img/icons/*`
- Splash: `public/img/splash/*`

---

## Base Preview

- Intro

<img alt="intro 1" src="preview/intro_1.jpg" width="700">
<img alt="intro 2" src="preview/intro_2.jpg" width="700">

- Dock menu

<img alt="dockmenu" src="preview/dockmenu.jpg" width="700">

- About me

<img alt="about me" src="preview/aboutme.jpg" width="700">

- Contact

<img alt="contact" src="preview/contact.jpg" width="700">

## Project Preview

<img alt="project" src="preview/project.jpg" width="700">

## Activity Preview

<img alt="activity" src="preview/activity.jpg" width="700">

---

## 🛠 Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
# Default build
npm run build

# Build for GitHub pages
npm run build:github


# Build & Generate bundle analyzer
# Check: dist/report.html
npm run build:report
```

- Report

<img alt="report" src="preview/report.jpg" width="700">

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 🎨 Resources

- macOS 11 style icons by [octaviotti](https://www.deviantart.com/octaviotti).
- Wallpaper image by [ultralinx](https://theultralinx.com/2018/11/gradient-wave-wallpaper-by-ultralinx).
- Weather sun icon from [myiconfinder](http://www.myiconfinder.com/icon/sun-heat-hot-weather-summer-sunshine/22781).
- `src/assets/fontawesome/*` icons by [Font Awesome](https://fontawesome.com).

## Change Log

- `1.0.4` (2020.12.01)
  - Safari font rendering issue (Auto scaled up) fixed
  - Updated to TypeScript 4
- `1.0.3` (2020.11.30)
  - PWA issue fixed (Now work perfectly)
  - Safari date issue fixed
  - Add new build command for deploy GitHub pages!
  - Add 404 handling page (Redirect to home)
- `1.0.2` (2020.11.27)
  - Web font issue fixed (Wrong font name)
  - PWA configuration fixed + Safari splash images
  - Add app.startUrl config (Web app manifest's start_url option)
  - Add date(year) label to project item
  - Vue 3.0.1 -> 3.0.3 with plugins
- `1.0.1` (2020.11.22)
  - Mobile safari scroll issue fixed (at intro page)
  - Now loading Github repository star only once at intro page
- `1.0.0` (2020.11.21)
  - First Release!

## ⭐️ License

Developed by [Geunhyeok LEE](https://github.com/leegeunhyeok)

- [MIT](./LICENSE) License.
