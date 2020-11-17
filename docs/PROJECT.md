# 💻 Project

- `data/project.json`
  - [TagData](/docs/BASE.md/#tagdata)
  - [ProjectData](#projectdata)

```typescript
interface ProjectTemplate {
  tags: {
    [key: string]: TagData[];
  };
  content: ProjectData[];
}
```

| Property    | Description           |               Example               |
| :---------- | :-------------------- | :---------------------------------: |
| `tags`      | Project tag data      |                  -                  |
| `tags.*`    | Tag group name        |             `Language`              |
| `tags.*[]`  | Tag datas             | [TagData](/docs/BASE.md/#tagdata)[] |
| `content[]` | Project contents data |    [ProjectData](#projectdata)[]    |

Example

```json
{
  "tags": {
    "language": [
      {
        "tag": "ts",
        "color": "ts",
        "label": "TypeScript"
      },
      {
        "tag": "python",
        "color": "ts",
        "label": "Python"
      }
    ],
    "other": [
      {
        "tag": "git",
        "color": "ts",
        "label": "Git"
      },
      {
        "tag": "docker",
        "color": "dodgerblue",
        "label": "Docker"
      }
    ]
  },
  "content": [
    {
      "name": "Resume",
      "date": "2020.01.01",
      "image": "contents/resume.jpg",
      "description": "Resume template",
      "tag": ["ts"],
      "url": "https://github.com/leegeunhyeok/resume"
    },
    {
      "name": "Toy Project",
      "date": "2020.01.01",
      "image": "contents/toy.jpg",
      "description": "This is toy project",
      "tag": ["python", "docker", "git"]
    }
  ]
}
```

# ProjectData

```typescript
interface ProjectData {
  name: string;
  date: string;
  image: string;
  description: string;
  tag: string[];
  url?: string;
}
```

| Property      | Description                                      |          Example          |
| :------------ | :----------------------------------------------- | :-----------------------: |
| `name`        | Project name                                     |         `Resume`          |
| `date`        | Project date                                     |       `2020.01.01`        |
| `image`       | Image path in `src/assets`                       |    `contents/toy.jpg`     |
| `description` | Project description                              | `This is resume template` |
| `tag`         | Project [TagData](/docs/BASE.md/#tagdata)'s keys |      `["js", "ts"]`       |
| `url`         | Project URL                                      |   `https://github.com`    |
