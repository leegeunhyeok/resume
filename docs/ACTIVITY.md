# 👋 Activity

- `data/activity.json`
  - [TagData](/docs/BASIC.md/#tagdata)
  - [ActivityData](#activitydata)

```typescript
interface ActivityTemplate {
  tags: {
    [key: string]: TagData[];
  };
  content: ActivityData[];
}
```

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
