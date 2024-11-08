#!/bin/bash

start_service() {
  service_name=$1

  echo "Start service $service_name..."

  docker-compose up --build -d $service_name


  echo "$service_name is done. Waiting 30 seconds..."
  sleep 30
}

start_service_no_cache() {
    service_name=$1

    echo "Start service $service_name... with no cache argument"

    docker-compose build --no-cache $service_name
    docker-compose up -d $service_name

    echo "$service_name is done. Waiting 30 seconds..."
    sleep 30
}

services=(
  "nginx"
  "strapiDB"
  "strapi"
  "nextjs"
)

for service in "${services[@]}"; do
  if [[ "$service" == "strapiDB" ]]; then
    start_service $service
  else
    start_service_no_cache $service
  fi
done

echo "All services are run!"
