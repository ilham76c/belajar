<?php
namespace Adapter;

class Screencast {
    /**
     * @var Title
     */
    private string $title;

    /**
     * @var Author
     */
    private string $author;

    /**
     * @var Duration
     */
    private $duration;

    public function __construct(string $title, string $author, int $duration) {
        $this->title = $title;
        $this->author = $author;
        $this->duration = $duration;
    }

    public function getTitle() : string {
        return $this->title;
    }

    public function setTitle(string $title) {
        $this->title = $title;
    }

    public function getAuthor() : string {
        return $this->author;
    }

    public function setAuthor(string $author) {
        $this->author = $author;
    }

    public function getDuration() : int {
        return $this->duration;
    }

    public function setDuration(string $duration) {
        $this->duration = $duration;
    }
}