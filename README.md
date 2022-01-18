
Run Postgres in Docker

```sh
docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=foobar123 -d postgres
```

Migrate the database

```sh
npx prisma migrate dev --name init
```