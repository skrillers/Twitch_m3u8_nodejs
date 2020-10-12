<?php
namespace Simcify\Controllers;

use Simcify\Auth;
use Simcify\Database;

class Dashboard{

    /**
     * Get trail view
     * 
     * @return \Pecee\Http\Response
     */
    public function getfirst() {
    
        $mollie = new \Mollie\Api\MollieApiClient();
        $mollie->setApiKey("test_nEMUtuvSCWvHjB9aGHH9Ube56uW3BQ");
        
        $customer = $mollie->customers->get("cst_xn5UdJfMrU");
        $customer->createSubscription([
           "amount" => [
                 "currency" => "EUR",
                 "value" => "25.00",
           ],
           "times" => 4,
           "interval" => "3 months",
           "description" => "Quarterly payment",
           "webhookUrl" => "https://webshop.example.org/subscriptions/webhook/",
        ]);
        
}
