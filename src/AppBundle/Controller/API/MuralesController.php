<?php

namespace AppBundle\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
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
      $response->setData($m);
      return $response;
    }

    public function createAction(Request $request)
    {

      $req = json_decode($request->getContent());

      $mural = new Mural();
      $mural
        ->setName($req->name)
        ->setDescription($req->description)
        ->setAddress($req->address)
        ->setLatitude($req->center->latitude)
        ->setLongitude($req->center->longitude)
        ->setPhotos($req->photos);

      $em = $this->getDoctrine()->getManager();
      $em->persist($mural);


      $response = new JsonResponse();


        $em->flush();
        $response->setStatusCode(201);
        $response->setData(array(
          'status' => "Created",
          'code' => 201
        ));
      /*} catch (Exception $e) {
        $response->setData(array(
          'error' => $e
        ));
      }*/
      return $response;
    }

    public function showAction($id)
    {
      $mural = $this->getDoctrine()->getRepository('AppBundle:Mural')->find($id);
      if (!$mural) {
        throw $this->createNotFoundException(
            'No mural found for id '. $id
        );
      }
      $response = new JsonResponse();
      $response->setData( $mural->toArray() );
      return $response;
    }

    public function editAction(Request $request, $id)
    {
      $em = $this->getDoctrine()->getManager();
      $mural = $em->getRepository('AppBundle:Mural')->find($id);
      if (!$mural) {
        throw $this->createNotFoundException(
            'No mural found for id '. $id
        );
      }
      $mural
        ->setName($request->request->get('name'))
        ->setDescription($request->request->get('description'))
        ->setAddress($request->request->get('address'))
        ->setLatitude($request->request->get('center')['latitude'])
        ->setLongitude($request->request->get('center')['longitude'])
        ->setPhotos($request->request->get('photos'));
      $em->persist($mural);
      $response = new JsonResponse();
      $response->setStatusCode(200);
      $response->setData(array(
        'status' => "Updated",
        'code' => 200
      ));
    }

    public function removeAction($id){
      $em = $this->getDoctrine()->getManager();
      $mural = $em->getRepository('AppBundle:Mural')->find($id);
      if (!$mural) {
        throw $this->createNotFoundException(
            'No mural found for id '. $id
        );
      }
      $em->remove($mural);
      $response = new JsonResponse();

      try {
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
