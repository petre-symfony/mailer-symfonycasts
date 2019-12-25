<?php

namespace App\Command;

use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class AuthorWeeklyReportSendCommand extends Command {
	protected static $defaultName = 'app:author-weekly-report:send';
	private $userRepository;
	private $articleRepository;

	protected function configure() {
		$this
			->setDescription('Send weekly reports to authors');
	}

	public function __construct(
		UserRepository $userRepository,
		ArticleRepository $articleRepository
	) {
		parent::__construct(null);
		$this->userRepository = $userRepository;
		$this->articleRepository = $articleRepository;
	}

	protected function execute(InputInterface $input, OutputInterface $output) {
		$io = new SymfonyStyle($input, $output);
		$authors = $this->userRepository
			->findAllSubscribedToNewsletter();

		$io->progressStart(count($authors));

		foreach ($authors as $author){
			$io->progressAdvance();

			$articles = $this->articleRepository
				->findAllPublishedLastWeekByAuthor($author);
			// Skip authors who do not have published articles for the last week
			if(count($articles) == 0){
				continue;
			}
		}

		$io->progressFinish();

		$io->success('weekly reports were sent to authors');
	}
}
