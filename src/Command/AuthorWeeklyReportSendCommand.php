<?php

namespace App\Command;

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

	protected function configure() {
		$this
			->setDescription('Send weekly reports to authors');
	}

	public function __construct(UserRepository $userRepository) {
		parent::__construct(null);
		$this->userRepository = $userRepository;
	}

	protected function execute(InputInterface $input, OutputInterface $output) {
		$io = new SymfonyStyle($input, $output);
		$authors = $this->userRepository
			->findAllSubscribedToNewsletter();

		$io->progressStart(count($authors));

		foreach ($authors as $author){
			$io->progressAdvance();
		}

		$io->progressFinish();
		
		$io->success('weekly reports were sent to authors');
	}
}
