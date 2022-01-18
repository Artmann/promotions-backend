A demo backend service that handles promotions.

## API Endpoints

### List Promotions

URL 

```
GET https://promotions-backend.herokuapp.com/games/game1/promotions
```

Response

```json
{
  "promotions": [
    {
      "id": 1,
      "gameId": "game1",
      "title": "Promotion 3",
      "startsAt": "2022-02-18T12:22:56.000Z",
      "endsAt": "2022-04-18T12:22:56.000Z"
    }
  ]
}
```

### Create Promotion


URL 

```
POST https://promotions-backend.herokuapp.com/games/game1/promotions
```

Request

```json
{
  "title": "Promotion 3",
  "startsAt": "2022-02-18T12:22:56+0000",
  "endsAt": "2022-04-18T12:22:56+0000"
}
```

Response

```json
{
  "promotion": {
    "id": 1,
    "gameId": "game1",
    "title": "Promotion 3",
    "startsAt": "2022-02-18T12:22:56.000Z",
    "endsAt": "2022-04-18T12:22:56.000Z"
  }
}
```

## Run it localy

Run Postgres in Docker

```sh
docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=foobar123 -d postgres
```

Migrate the database

```sh
npx prisma migrate dev --name init
```

Start the server

```sh
npm run dev
```
