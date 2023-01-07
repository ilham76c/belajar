<?php
namespace Adapter;

use Adapter\CatalogAdapterInterface;
use Adapter\Book;

class BookCatalogAdapter implements CatalogAdapterInterface {
    /**
     * @var Book
     */
    private Book $book;

    public function __construct(Book $book) {
        $this->book = $book;
    }

    public function getCatalogTitle() : string {
        return $this->book->getTitle()."\t by ".$this->book->getAuthor();
    }
}