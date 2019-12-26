<?php

namespace App\Tests\Service;

use App\Entity\User;
use App\Service\Mailer;
use Knp\Snappy\Pdf;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Environment;

class MailerTest extends TestCase {
  public function testSendWelcomeMessage(){
	  $symfonyMailer = $this->createMock(MailerInterface::class);
	  $symfonyMailer->expects($this->once())
		  ->method('send');

	  $pdf = $this->createMock(Pdf::class);
	  $twig = $this->createMock(Environment::class);
	  $entrypointLookup = $this->createMock(EntrypointLookupInterface::class);

	  $user = new User();
	  $user->setFirstName('Victor');
	  $user->setEmail('victor@symfonycasts.com');

	  $mailer = new Mailer($symfonyMailer, $entrypointLookup, $twig, $pdf);
	  $mailer->sendWelcomeMessage($user);
  }
}
