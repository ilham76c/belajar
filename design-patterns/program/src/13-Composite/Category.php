<?php

namespace Composite;

class Category {
    /**
     * @var String
     */
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }

    /**
     * @return String
     */
    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }
}