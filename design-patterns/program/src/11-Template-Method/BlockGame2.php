<?php
namespace TemplateMethod;

use TemplateMethod\BlockTemplate;

class BlockGame2 extends BlockTemplate {
    // Override
    public function getTitle() {
        return "BLOCK GAME 2";
    }

    // Override
    public function getEndTitle() {
        return "FINISH BLOCK GAME 2";
    }

    // Override
    public function getCharacter() {
        return "A";
    }

    // Override
    public function getWeight() {
        return 20;
    }

    // Override
    public function getWidth() {
        return 20;
    }
}