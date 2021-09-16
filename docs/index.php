<?php

// load dependencies
// pico-composer MUST be installed as root package
if (is_file('pico/vendor/autoload.php')) {
    require_once('pico/vendor/autoload.php');
} else {
    die("Cannot find 'pico/vendor/autoload.php'. Run `composer install`.");
}

// instance Pico
$pico = new Pico(
    __DIR__,    // root dir
    'pico/config/',  // config dir
    'pico/plugins/', // plugins dir
    'pico/themes/'   // themes dir
);

// override configuration?
//$pico->setConfig(array());

// run application
echo $pico->run();
