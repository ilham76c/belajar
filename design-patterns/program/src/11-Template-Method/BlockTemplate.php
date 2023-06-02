<?php
namespace TemplateMethod;

abstract class BlockTemplate {
    // final artinya logic-nya akan selalu sama dan tidak bisa diubah atau tidak bisa di override
    public final function start() {
        echo $this->getTitle()."\n";

        for ($i = 0; $i < $this->getWeight(); $i++) { 
            for ($j = 0; $j < $this->getWidth(); $j++) { 
                echo $this->getCharacter();
            }
            echo "\n\r";
        }

        echo $this->getEndTitle();
    }

    public abstract function getTitle();

    public abstract function getEndTitle();

    public abstract function getCharacter();

    public abstract function getWeight();

    public abstract function getWidth();
}