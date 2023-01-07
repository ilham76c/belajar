<?php
namespace Adapter;

class Book {
    /**
     * @var Title
     */
    private string $title;

    /**
     * @var Author
     */
    private string $author;

    public function __construct(string $title, string $author) {
        $this->title = $title;
        $this->author = $author;
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
}