# 🐥 Basic

- `data/_base.json`

```typescript
// Base Config
interface BaseConfig {
  app: {
    name: string;
    themeColor: string;
  };
  title: string;
  ga?: string;
  introText: string[];
  profile: {
    name: string;
    email: string;
    photo: string;
    introduce: string;
    social: SocialData[];
    skill: SkillData[];
  };
  hobby: [string, string];
}
```

|        Property        | Description                                        |               Example               |
| :--------------------: | :------------------------------------------------- | :---------------------------------: |
|         `app`          | PWA Configuration                                  |                  -                  |
|       `app.name`       | PWA Name                                           |               `GDev`                |
|    `app.themeColor`    | PWA Theme color (CSS Color)                        |              `#ffffff`              |
|        `title`         | Web title (in head)                                |          `Dev | Geundung`           |
|          `ga`          | Google analytics tracking ID                       |          `UA-000000000-0`           |
|      `introText`       | Content at intro page                              | `["For better", "Web experience."]` |
|       `profile`        | Your profile informations                          |                  -                  |
|     `profile.name`     | Name                                               |           `Geunhyeok LEE`           |
|    `profile.email`     | Email                                              |        `dev.ghlee@gmail.com`        |
|    `profile.photo`     | Profile photo at `src/assets`                      |            `avatar.png`             |
|  `profile.introduce`   | Introduce your self                                |         `Makes web better`          |
|    `profile.social`    | Social informations in Contact [more](#socialdata) |                  -                  |
| `profile.social.icon`  | Social Icon (Check SocialIcon)                     |              `github`               |
| `profile.social.label` | Lable text to be displayed                         |              `Github`               |
|  `profile.social.url`  | Page URL to go                                     |  `https://github.com/leegeunhyeok`  |
|    `profile.skill`     | Your own skills list [more](#skilldata)            |                  -                  |
|    `profile.label`     | Lable text to be displayed                         |            `TypeScript`             |
|    `profile.color`     | Skill's dot color [more](#colors)                  |                `ts`                 |
|    `profile.hobby`     | Your hobby (Max: 2)                                |      `["프로그래밍", "운동"]`       |

Example

```json
{
  "app": {
    "name": "GDev",
    "themeColor": "#ffffff"
  },
  "title": "Dev | Geundung",
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
        "label": "JavaScript",
        "color": "js"
      },
      {
        "label": "TypeScript",
        "color": "ts"
      }
    ],
    "hobby": ["프로그래밍", "운동"]
  }
}
```

## SocialData

```typescript
type SocialIcon =
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'line'
  | 'linkedin'
  | 'github'
  | 'gitlab'
  | 'web';

interface SocialData {
  icon: string;
  label?: string;
  url: string;
}
```

## SkillData

- [Colors](#colors)

```typescript
interface SkillData {
  color: string;
  label: string;
}
```

## TagData

- [Colors](#colors)

```typescript
interface TagData {
  tag: string;
  color: string;
  label: string;
}
```

---

> This contents about common data types

## Colors

Available at project/activty tag and skill!

- Available both that keywords and custom CSS colors (eg. #1292da, tomato, ...)

|  Keyword   |                                                                          Preview                                                                          |
| :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  angular   |  <code><img alt="angular" src="https://user-images.githubusercontent.com/26512984/99268099-17722b00-2868-11eb-9717-c0f79ac41a36.jpg" width="32"></code>   |
|    blue    |    <code><img alt="blue" src="https://user-images.githubusercontent.com/26512984/99268133-20fb9300-2868-11eb-86b6-cc413ed6b5b0.jpg" width="32"></code>    |
|     c      |     <code><img alt="c" src="https://user-images.githubusercontent.com/26512984/99268136-21942980-2868-11eb-9ee6-0ba805a31fa8.jpg" width="32"></code>      |
|    cpp     |    <code><img alt="cpp" src="https://user-images.githubusercontent.com/26512984/99268137-222cc000-2868-11eb-950e-43d0fa50d6e7.jpg" width="32"></code>     |
|     cs     |     <code><img alt="cs" src="https://user-images.githubusercontent.com/26512984/99268138-22c55680-2868-11eb-9a31-d57ea298736c.jpg" width="32"></code>     |
|    css     |    <code><img alt="css" src="https://user-images.githubusercontent.com/26512984/99268142-22c55680-2868-11eb-8171-7ffb0989710b.jpg" width="32"></code>     |
|    dart    |    <code><img alt="dart" src="https://user-images.githubusercontent.com/26512984/99268144-235ded00-2868-11eb-9b4c-0cddb2e4f880.jpg" width="32"></code>    |
|   docker   |   <code><img alt="docker" src="https://user-images.githubusercontent.com/26512984/99268146-23f68380-2868-11eb-9694-dc363a630619.jpg" width="32"></code>   |
|    git     |    <code><img alt="git" src="https://user-images.githubusercontent.com/26512984/99268148-248f1a00-2868-11eb-8cf4-01738ec03d98.jpg" width="32"></code>     |
|     go     |     <code><img alt="go" src="https://user-images.githubusercontent.com/26512984/99268149-248f1a00-2868-11eb-8f10-28d70c3b9013.jpg" width="32"></code>     |
|    gray    |    <code><img alt="gray" src="https://user-images.githubusercontent.com/26512984/99268151-2527b080-2868-11eb-8f2d-85a54eab50ff.jpg" width="32"></code>    |
|   green    |   <code><img alt="green" src="https://user-images.githubusercontent.com/26512984/99268153-2527b080-2868-11eb-8087-9f83bf3848d6.jpg" width="32"></code>    |
|  haskell   |  <code><img alt="haskell" src="https://user-images.githubusercontent.com/26512984/99268157-25c04700-2868-11eb-863b-e945ce2ef762.jpg" width="32"></code>   |
|    html    |    <code><img alt="html" src="https://user-images.githubusercontent.com/26512984/99268158-2658dd80-2868-11eb-9910-5e16d0232f47.jpg" width="32"></code>    |
|    java    |    <code><img alt="java" src="https://user-images.githubusercontent.com/26512984/99268160-2658dd80-2868-11eb-83d8-f35e99841604.jpg" width="32"></code>    |
|     js     |     <code><img alt="js" src="https://user-images.githubusercontent.com/26512984/99268167-2822a100-2868-11eb-8d6e-672199525127.jpg" width="32"></code>     |
|   kotlin   |   <code><img alt="kotlin" src="https://user-images.githubusercontent.com/26512984/99268171-2822a100-2868-11eb-8c24-13017ca20475.jpg" width="32"></code>   |
| objectivec | <code><img alt="objectivec" src="https://user-images.githubusercontent.com/26512984/99268176-2953ce00-2868-11eb-842b-36141e8b2b74.jpg" width="32"></code> |
|    perl    |    <code><img alt="perl" src="https://user-images.githubusercontent.com/26512984/99268178-2953ce00-2868-11eb-8f7c-e6e9cdc05420.jpg" width="32"></code>    |
|    php     |    <code><img alt="php" src="https://user-images.githubusercontent.com/26512984/99268179-29ec6480-2868-11eb-815e-c1d17b6e663d.jpg" width="32"></code>     |
|    pwa     |    <code><img alt="pwa" src="https://user-images.githubusercontent.com/26512984/99268180-2a84fb00-2868-11eb-92ef-7aac86a124ca.jpg" width="32"></code>     |
|   python   |   <code><img alt="python" src="https://user-images.githubusercontent.com/26512984/99268183-2b1d9180-2868-11eb-89b1-ce4264ea1a28.jpg" width="32"></code>   |
|     r      |     <code><img alt="r" src="https://user-images.githubusercontent.com/26512984/99268186-2b1d9180-2868-11eb-9429-631b0c623e7d.jpg" width="32"></code>      |
|   react    |   <code><img alt="react" src="https://user-images.githubusercontent.com/26512984/99268188-2bb62800-2868-11eb-99c6-5f0743aeb397.jpg" width="32"></code>    |
|    red     |    <code><img alt="red" src="https://user-images.githubusercontent.com/26512984/99268191-2bb62800-2868-11eb-9b24-d43135e3a141.jpg" width="32"></code>     |
|    rust    |    <code><img alt="rust" src="https://user-images.githubusercontent.com/26512984/99268192-2c4ebe80-2868-11eb-9322-30145582dc6b.jpg" width="32"></code>    |
|   scala    |   <code><img alt="scala" src="https://user-images.githubusercontent.com/26512984/99268196-2ce75500-2868-11eb-832a-a353b247bdb8.jpg" width="32"></code>    |
|    scss    |    <code><img alt="scss" src="https://user-images.githubusercontent.com/26512984/99268197-2ce75500-2868-11eb-83a6-dd2416c8db9d.jpg" width="32"></code>    |
|   shell    |   <code><img alt="shell" src="https://user-images.githubusercontent.com/26512984/99268198-2d7feb80-2868-11eb-8570-622fc60e9e49.jpg" width="32"></code>    |
|   swift    |   <code><img alt="swift" src="https://user-images.githubusercontent.com/26512984/99268200-2e188200-2868-11eb-916f-3f7d6398b114.jpg" width="32"></code>    |
|     ts     |     <code><img alt="ts" src="https://user-images.githubusercontent.com/26512984/99268203-2eb11880-2868-11eb-906b-18636b09f828.jpg" width="32"></code>     |
|    vim     |    <code><img alt="vim" src="https://user-images.githubusercontent.com/26512984/99268205-2eb11880-2868-11eb-9be6-6e24d0a873d5.jpg" width="32"></code>     |
|    vue     |    <code><img alt="vue" src="https://user-images.githubusercontent.com/26512984/99268208-2f49af00-2868-11eb-812e-285ecfef0512.jpg" width="32"></code>     |
|   yellow   |   <code><img alt="yellow" src="https://user-images.githubusercontent.com/26512984/99268209-2fe24580-2868-11eb-9cf3-0ffed7010334.jpg" width="32"></code>   |
