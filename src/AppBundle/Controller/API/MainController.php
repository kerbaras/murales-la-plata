<?php

namespace AppBundle\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController extends Controller
{
    public function indexAction()
    {
      $response = new JsonResponse();
      $response->setData(array(
        'api' => array(
          'nombre' => "Murales la Plata",
          'version' => '1.0.0',
          'format' => 'json',
          'creador' => array(
            'nombre' => "Matías Pierobón Marcos",
            'e-mail' => "matias.pierobonm@gmail.com"
          )
        )
      ));
      return $response;
    }

}
