# Docker image alpine bisa dicari di hub.docker.com
FROM alpine:3

# Perintah akan dijalankan saat proses build Dockerfile pertama kalinya
RUN mkdir hello
RUN echo "Hello World" > "hello/world.txt"


# Perintah akan dijalankan ketika docker container dijalankan
CMD cat "hello/world.txt"