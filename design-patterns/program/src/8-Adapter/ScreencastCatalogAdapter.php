<?php
namespace Adapter;

use Adapter\CatalogAdapterInterface;
use Adapter\Screencast;

class ScreencastCatalogAdapter implements CatalogAdapterInterface {
    /**
     * @var Screencast
     */
    private Screencast $screencast;

    public function __construct(Screencast $screencast) {
        $this->screencast = $screencast;
    }

    public function getCatalogTitle() : string {
        return $this->screencast->getTitle()."\t by ".$this->screencast->getAuthor();
    }
}