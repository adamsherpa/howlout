# Readme

## Database ER

## Midjourney Settings

- Assets
  - `/imagine icons, animals, cute, mockup, illustrator, vector, white background, --v 4 --style 4b`

- Background
  - `/imagine trees, forest, lush, dew, mobile wallpaper, mockup, illustrator, vector, figma, --v 4 --style 4b`

## Pocketbase

- user: admin@howlout.com
- pass: password123
- Notes
  - Maybe i dont want to do pocketbase and I should focus more on either sql, firebase, or mongo

##

```mermaid
  erDiagram
    USER||--|{MESSAGE : shout
    MESSAGE}|--||CHATROOM : group

    USER {
      string user_id pk
      string username
      string email
      string password
    }

    MESSAGE {
      string message_id pk
      number user_id fk
      string room_id fk
      string message_content
      date timestamp
    }

    CHATROOM {
      string room_id pk
      date timestamp
    }
```
