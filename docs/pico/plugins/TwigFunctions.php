<?php

class TwigFunctions extends AbstractPicoPlugin
{
    public const API_VERSION = 2;

    public function onTwigRegistered(Twig_Environment &$twig)
    {
        $printr = new \Twig\TwigFunction('print_r', function ($var) {
            print_r($var);
        });

        $arraykeys = new \Twig\TwigFunction('array_keys', function ($var) {
            print_r(array_keys($var));
        });

        $twig->addFunction($printr);
        $twig->addFunction($arraykeys);
    }
}
