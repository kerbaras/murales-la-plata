<?php

namespace AppBundle\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Mural;

class MuralesController extends Controller
{
    public function indexAction()
    {
      $murales = $this->getDoctrine()->getRepository('AppBundle:Mural')->findAll();

      $m = array();
      foreach ($murales as $key => $mural) {
        $m[] = $mural->toArray();
      }

      $response = new JsonResponse();
      $response->setData(array(
        'data' => $m
      ));
      return $response;
    }

    public function createAction(Request $request)
    {
      // NOTE: Se esperan estos parametros
      $params = array(
        'name' => 'Otro Titulo',
        'description' => 'Una descripcion',
        'address' => 'Calle 10 e/ 55 y 54',
        'center' => array(
          'latitude'=> -34.920000,
          'longitude'=> -57.950004
        ),
        'photos' => array(
          'https://scontent-gru2-1.xx.fbcdn.net/hphotos-xta1/t31.0-8/12027331_712313182236637_6771689211231978128_o.jpg'
        )
      );

      $mural = new Mural();

      $mural
        ->setName($params['name'])
        ->setDescription($params['description'])
        ->setAddress($params['address'])
        ->setLatitude($params['center']['latitude'])
        ->setLongitude($params['center']['longitude'])
        ->setPhotos($params['photos']);

      $em = $this->getDoctrine()->getManager();

      $em->persist($mural);

      $response = new JsonResponse();

      try {
        // NOTE: Descomentar
        //$em->flush();

        $response->setStatusCode(201);
        $response->setData(array(
          'status' => "Created",
          'code' => 201
        ));
      } catch (Exception $e) {
        $response->setData(array(
          'error' => $e
        ));
      }
      return $response;
    }

    public function removeAction($id){
      $em = $this->getDoctrine()->getManager();

      $mural = $em->getRepository('AppBundle:Mural')->find($id);

      $em->remove($mural);

      $response = new JsonResponse();

      try {
        // NOTE: Descomentar
        $em->flush();
        $response->setStatusCode(200);
        $response->setData(array(
          'status' => "Deleted",
          'code' => 200
        ));
      } catch (Exception $e) {
        $response->setData(array(
          'error' => $e
        ));
      }

      return $response;
    }

}
