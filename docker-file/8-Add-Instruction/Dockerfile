# Docker image alpine bisa dicari di hub.docker.com
FROM alpine:3

# Perintah akan dijalankan saat proses build Dockerfile pertama kalinya
RUN mkdir hello

# Perintah akan meng-copy semua file dengan ekstensi txt pada folder text ke dalam folder hello
ADD text/*.txt hello

# Perintah akan dijalankan ketika docker container dijalankan
CMD cat "hello/world.txt"