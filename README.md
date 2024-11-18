#### Requirements

- need to use node version **>=20.0.0**

#### Start NextJS project

```bash
npm run dev
```

#### Contribution

```bash
npm run commit
```

#### Run services in docker compose via bash script

```bash
# script must be executed permission 
./start_services.sh
```

### Setup section server exposing

#### NextJS Dockerfile definition

All must have environment values can be observed in `.env.template` which must be provided before running the service.

#### Strapi Dockerfile definition

The purpose of this file is to download strapi repository from github.

IMPORTANT: ssh key is not provides due to the fact that the repository is public. In case weather you need to download from private repository you should pass the ssh key as well.

```dockerfile
FROM node:18-alpine AS base

WORKDIR /app


RUN apk add --no-cache git openssh-client

RUN git clone GITHUB_REPOSITORY_URL .

RUN git checkout docker/setup

RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install && npm install pg --save

RUN npm run build

RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
```

#### Nginx service

According to publishing both NextJS and Strapi the Nginx service is used as well. To expose only one port Nginx plays with incoming requests between NextJs or Strapi.

Nginx config:
```nginx
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    sendfile on;
    keepalive_timeout 65;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    upstream strapi {
        server strapi:1337;
    }

    upstream nextjs {
        server nextjs:3000;
    }

    server {
        listen 80;

        location ~* ^/(uploads|i18n|api|content-manager|admin|upload) {
           proxy_pass http://strapi;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }

       location /_next/image {
           proxy_pass http://strapi;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }

       location / {
           proxy_pass http://nextjs;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
    }
}
```

#### Strapi transfer

To transfer data from Strapi cloud must be run the command below:

```bash
yarn strapi transfer --from URL_CLOUD --force --from-token TRANSFER_TOKEN  --exclude files
```

[Instruction](https://docs.strapi.io/dev-docs/data-management/transfer)

IMPORTANT: `exclude` flag with value `files` must be used.




