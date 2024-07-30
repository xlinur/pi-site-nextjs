NOTE: This repository does use npm workspaces.


#### Start NextJS project

```bash
npm run dev -w nextjs
```


#### Start Strapi project development mode

```bash
npm run develop -w strapi
```


#### Pre-setup instructions

```bash
chmod +x ./packages/strapi/init-db.sh
```

NOTE: This command has to be executed because this bash script does create a database in postgres' container.


#### Run docker compose by following command

```bash
docker-compose --env-file ./packages/strapi/.env -f docker-compose.yml up -d
```


#### Contribution

```bash
npm run commit
```

TODO list:

[] - move out .env file into root for docker-compose.yml 

#### Strapi

Strapi Admin http://195.238.122.248:1337/admin
Login rgba.panda@gmail.com
Password Homepage!@qwe1234


