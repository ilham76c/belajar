<?php
namespace TemplateMethod;

require 'vendor/autoload.php';

use TemplateMethod\BlockGame;
use TemplateMethod\BlockGame2;

class Main {
    public function run() {
        $blockGame = new Blockgame();
        $blockGame->start();

        $blockGame2 = new Blockgame2();
        $blockGame2->start();
    }
}

$main = new Main();
$main->run();