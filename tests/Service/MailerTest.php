<?php

namespace App\Tests\Service;

use App\Entity\Article;
use App\Entity\User;
use App\Service\Mailer;
use Knp\Snappy\Pdf;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;
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
	  $email = $mailer->sendWelcomeMessage($user);

	  $this->assertSame('Welcome to the Space Bar!', $email->getSubject());
	  $this->assertCount(1, $email->getTo());
	  /** @var NamedAddress[] $namedAddresses */
	  $namedAddresses = $email->getTo();
	  $this->assertInstanceOf(NamedAddress::class, $namedAddresses[0]);
	  $this->assertSame('Victor', $namedAddresses[0]->getName());
	  $this->assertSame('victor@symfonycasts.com', $namedAddresses[0]->getAddress());
  }

	public function testIntegrationSendAuthorWeeklyReportMessage(){
		$symfonyMailer = $this->createMock(MailerInterface::class);
		$symfonyMailer->expects($this->once())
			->method('send');

		$pdf = $this->createMock(Pdf::class);
		$twig = $this->createMock(Environment::class);
		$entrypointLookup = $this->createMock(EntrypointLookupInterface::class);

		$user = new User();
		$user->setFirstName('Victor');
		$user->setEmail('victor@symfonycasts.com');
		$article = new Article();
		$article->setTitle('Black Holes: Ultimate Party Pooper');

		$mailer = new Mailer($symfonyMailer, $entrypointLookup, $twig, $pdf);
		$email = $mailer->sendAuthorWeeklyReportMessage($user, [$article]);
	}
}
