# conabio

docker build -t conabioAPI .
docker run -d -p 80:3333 --rm --name api -e ENV=prod -e BASE_URL=/conabio conabioAPI
