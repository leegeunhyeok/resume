# 👋 Activity

- `data/activity.json`
  - [TagData](/docs/BASE.md/#tagdata)
  - [ActivityData](#activitydata)

```typescript
interface ActivityTemplate {
  tags: {
    [key: string]: TagData[];
  };
  content: ActivityData[];
}
```

| Property    | Description            |               Example               |
| :---------- | :--------------------- | :---------------------------------: |
| `tags`      | Activity tag data      |                  -                  |
| `tags.*`    | Tag group name         |             `Language`              |
| `tags.*[]`  | Tags data              | [TagData](/docs/BASE.md/#tagdata)[] |
| `content[]` | Activity contents data |   [ActivityData](#activitydata)[]   |

Example

```json
{
  "tags": {
    "type": [
      {
        "tag": "career",
        "color": "blue",
        "label": "Career"
      },
      {
        "tag": "cert",
        "color": "js",
        "label": "Certification"
      }
    ]
  },
  "content": [
    {
      "title": "First company",
      "from": "2020.01.01",
      "to": "2020.01.01",
      "tag": "career"
    },
    {
      "title": "First Certificaiton",
      "from": "2000.01.01",
      "tag": "cert"
    }
  ]
}
```

## ActivityData

```typescript
interface ActivityData {
  title: string;
  from: string;
  to?: string;
  tag: string;
}
```

| Property | Description                                      |   Example    |
| :------- | :----------------------------------------------- | :----------: |
| `title`  | Activity title                                   |  `Company`   |
| `from`   | Date from                                        | `2020.01.01` |
| `to`     | Date to                                          | `2020.11.11` |
| `tag`    | Activity [TagData](/docs/BASE.md/#tagdata)'s key |   `career`   |
