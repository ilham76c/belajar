<?php
namespace Singleton;

class Connection {
  public function __construct($host, $username, $password) {
    echo "Create connection host:$host, username:$username, password:$password\n";
  }

  public function sql($query) {
    echo "Query: ".$query."\n";
  }
}