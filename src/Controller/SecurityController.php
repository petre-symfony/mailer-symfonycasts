<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\Model\UserRegistrationFormModel;
use App\Form\UserRegistrationFormType;
use App\Security\LoginFormAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController {
  /**
   * @Route("/login", name="app_login")
   */
  public function login(AuthenticationUtils $authenticationUtils){
    // get the login error if there is one
    $error = $authenticationUtils->getLastAuthenticationError();

    // last username entered by the user
    $lastUsername = $authenticationUtils->getLastUsername();

    return $this->render('security/login.html.twig', [
      'last_username' => $lastUsername,
      'error'         => $error,
    ]);
  }

  /**
   * @Route("/logout", name="app_logout")
   */
  public function logout(){
    throw new \Exception('Will be intercepted before getting here');
  }

  /**
   * @Route("/register", name="app_register")
   */
  public function register(
  	Request $request,
	  UserPasswordEncoderInterface $passwordEncoder,
	  GuardAuthenticatorHandler $guardHandler,
	  LoginFormAuthenticator $formAuthenticator,
		MailerInterface $mailer
  ){
    $form = $this->createForm(UserRegistrationFormType::class);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
      /** @var UserRegistrationFormModel $userModel */
      $userModel = $form->getData();

      $user = new User();
      $user->setFirstName($userModel->firstName);
      $user->setEmail($userModel->email);
      $user->setPassword($passwordEncoder->encodePassword(
        $user,
        $userModel->plainPassword
      ));
      // be absolutely sure they agree
      if (true === $userModel->agreeTerms) {
        $user->agreeToTerms();
      }
      $user->setSubscribeToNewsletter($userModel->subscribeToNewsletter);

      $em = $this->getDoctrine()->getManager();
      $em->persist($user);
      $em->flush();

	    $email = (new Email())
	      ->from('alienmailer@example.com')
	      ->to($user->getEmail())
	      ->subject('Welcome to the Space Bar!')
	      ->text("Nice to meet you {$user->getFirstName()}! ️❤️")
		    ->html("<h1>Nice to meet you {$user->getFirstName()}! ️❤️</h1>")
	    ;

	    $mailer->send($email);

      return $guardHandler->authenticateUserAndHandleSuccess(
        $user,
        $request,
        $formAuthenticator,
        'main'
      );
    }

    return $this->render('security/register.html.twig', [
      'registrationForm' => $form->createView(),
    ]);
  }
}
