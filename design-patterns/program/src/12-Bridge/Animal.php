<?php 
namespace Bridge;

interface Animal {
    /**
     * @return String
     */
    function getName();

    /**
     * @return Boolean
     */
    function liveInWater();

    /**
     * @return Boolean
     */
    function liveInLand();
}