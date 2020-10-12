<?php
namespace Simcify\Controllers;

use Simcify\Database;
use Simcify\Landa;
use Simcify\Auth;

class Trail{

   public function get(){
$user = Auth::user()->sub;
    var_dump($user);

    

    if (Auth::user()->sub == 0){
       var_dump("0 subs doet het");
    }

    if (Auth::user()->firstpay == 0){


    $mollie = new \Mollie\Api\MollieApiClient();
    $mollie->setApiKey("test_nEMUtuvSCWvHjB9aGHH9Ube56uW3BQ");
        



    $customer = $mollie->customers->create([
          "name" => "Customer A",
          "email" => "customer@example.org",
    ]);
       

    $payment = $mollie->payments->create([
        "amount" => [
              "currency" => "EUR",
              "value" => "0.01" // You must send the correct number of decimals, thus we enforce the use of strings
        ],
        "description" => "Order #12345",
        "redirectUrl" => "https://webshop.example.org/order/12345/",
        "webhookUrl" => "https://webshop.example.org/payments/webhook/",
        "metadata" => [
              "order_id" => "12345",
        ],
  ]);     
        $payment = $mollie->payments->get($payment->id);
        $payment->getCheckoutUrl();
        header("Location: " . $payment->getCheckoutUrl(), true, 303);

     }



      


   }
   public function pay(){

    // echo $id;
    echo "test";
   }

}
