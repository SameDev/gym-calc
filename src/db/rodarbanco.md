```docker build -t postgres-global .```

```
docker run --name pg-global-gym-calc -e POSTGRES_USER=global -e POSTGRES_PASSWORD=global -e POSTGRES_DB=global -p 5432:5432  -v $PWD/data:/var/lib/postgresql/data -d postgres-global
```