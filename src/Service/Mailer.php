<?php
namespace App\Service;


use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;

class Mailer {
	private $mailer;

	public function __construct(MailerInterface $mailer){
		$this->mailer = $mailer;
	}

	public function sendWelcomeMessage(User $user){
		$email = (new TemplatedEmail())
			->from(new NamedAddress('alienmailer@example.com', 'The Space Bar!'))
			->to(new NamedAddress($user->getEmail(), $user->getFirstName()))
			->subject('Welcome to the Space Bar!')
			->htmlTemplate('email/welcome.html.twig')
			->context([
				//'user' => $user
			]);
		;

		$this->mailer->send($email);
	}
}