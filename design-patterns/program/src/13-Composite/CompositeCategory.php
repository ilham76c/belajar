<?php

namespace Composite;

use Composite\Category;

class CompositeCategory extends Category {
    private $categories = array();

    public function __construct($name, array $categories) {
        parent::__construct($name);
        $this->categories = $categories;
    }

    public function getCategories() {
        return $this->categories;
    }
}