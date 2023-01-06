<?php
namespace ObjectPool;

class Connection {
  public function __construct(string $host, string $username, string $password) {
    echo "Create connection host:$host, username:$username, password:$password\n";
  }

  public function sql(string $query) {
    echo "Query: ".$query."\n";
  }
}