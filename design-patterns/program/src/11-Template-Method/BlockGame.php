<?php
namespace TemplateMethod;

use TemplateMethod\BlockTemplate;

class BlockGame extends BlockTemplate {
    // Override
    public function getTitle() {
        return "BLOCK GAME";
    }

    // Override
    public function getEndTitle() {
        return "FINISH BLOCK GAME";
    }

    // Override
    public function getCharacter() {
        return "O";
    }

    // Override
    public function getWeight() {
        return 10;
    }

    // Override
    public function getWidth() {
        return 10;
    }
}