# 💻 Project

- `data/project.json`
  - [TagData](/docs/BASIC.md/#tagdata)
  - [ProjectData](#projectdata)

```typescript
interface ProjectTemplate {
  tags: {
    [key: string]: TagData[];
  };
  content: ProjectData[];
}
```

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
