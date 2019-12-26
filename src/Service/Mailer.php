<?php
namespace App\Service;


use App\Entity\User;
use Knp\Snappy\Pdf;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\NamedAddress;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Environment;

class Mailer {
	private $mailer;
	private $entrypointLookup;
	private $twig;
	private $pdf;

	public function __construct(
		MailerInterface $mailer,
		EntrypointLookupInterface $entrypointLookup,
		Environment $twig,
		Pdf $pdf
	){
		$this->mailer = $mailer;
		$this->entrypointLookup = $entrypointLookup;
		$this->twig = $twig;
		$this->pdf = $pdf;
	}

	public function sendWelcomeMessage(User $user): TemplatedEmail{
		$email = (new TemplatedEmail())
			->to(new NamedAddress($user->getEmail(), $user->getFirstName()))
			->subject('Welcome to the Space Bar!')
			->htmlTemplate('email/welcome.html.twig')
			->context([
				//'user' => $user
			]);
		;

		$this->mailer->send($email);

		return $email;
	}

	public function sendAuthorWeeklyReportMessage(User $author, array $articles): TemplatedEmail{
		$html = $this->twig->render('email/author-weekly-report-pdf.html.twig', [
			'articles' => $articles
		]);
		$this->entrypointLookup->reset();
		$pdf = $this->pdf->getOutputFromHtml($html);

		$email = (new TemplatedEmail())
			->to(new NamedAddress($author->getEmail(), $author->getFirstName()))
			->subject('Your weekly report on the Space Bar!')
			->htmlTemplate('email/author-weekly-report.html.twig')
			->context([
				'author' => $author,
				'articles' => $articles
			])
			->attach($pdf, sprintf('weekly-report-%s.pdf', date('Y-m-d')));
		;

		$this->mailer->send($email);

		return $email;
	}
}