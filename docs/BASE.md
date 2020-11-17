# 👋 Base

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

| Property               | Description                                          |               Example               |
| :--------------------- | :--------------------------------------------------- | :---------------------------------: |
| `app`                  | PWA Configuration                                    |                  -                  |
| `app.name`             | PWA Name                                             |               `GDev`                |
| `app.themeColor`       | PWA Theme color (CSS Color)                          |              `#ffffff`              |
| `title`                | Web title (in head)                                  |          `Dev | Geundung`           |
| `ga`                   | Google analytics tracking ID                         |          `UA-000000000-0`           |
| `introText`            | Content at intro page                                | `["For better", "Web experience."]` |
| `profile`              | Your profile informations                            |                  -                  |
| `profile.name`         | Name                                                 |           `Geunhyeok LEE`           |
| `profile.email`        | Email                                                |        `dev.ghlee@gmail.com`        |
| `profile.photo`        | Profile photo at `src/assets`                        |            `avatar.png`             |
| `profile.introduce`    | Introduce your self                                  |         `Makes web better`          |
| `profile.social`       | Social informations in Contact ([more](#socialdata)) |                  -                  |
| `profile.social.icon`  | Social Icon (Check SocialIcon)                       |              `github`               |
| `profile.social.label` | Lable text to be displayed                           |              `Github`               |
| `profile.social.url`   | Page URL to go                                       |  `https://github.com/leegeunhyeok`  |
| `profile.skill`        | Your own skills list ([more](#skilldata))            |                  -                  |
| `profile.label`        | Lable text to be displayed                           |            `TypeScript`             |
| `profile.color`        | Skill's dot color ([more](#colors))                  |                `ts`                 |
| `profile.hobby`        | Your hobby (Max: 2)                                  |      `["프로그래밍", "운동"]`       |

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

## SkillData

- [Colors](#colors)

```typescript
interface SkillData {
  color: string;
  label: string;
}
```

| Property | Description                         |   Example    |
| :------: | :---------------------------------- | :----------: |
| `color`  | Skill's dot color ([more](#colors)) |     `ts`     |
| `label`  | Skill label                         | `TypeScript` |

## TagData

- [Colors](#colors)

```typescript
interface TagData {
  tag: string;
  color: string;
  label: string;
}
```

| Property | Description                       |   Example    |
| :------: | :-------------------------------- | :----------: |
|  `tag`   | `key` for identify                |   `my_tag`   |
| `color`  | Tag's dot color ([more](#colors)) |     `ts`     |
| `label`  | Tag label                         | `TypeScript` |

---

## Colors

Available at project/activty tag and skill!

- Available both that `keywords` and custom `CSS colors` (eg. #1292da, tomato, ...)

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
