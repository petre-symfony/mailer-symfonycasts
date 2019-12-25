<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class AuthorWeeklyReportSendCommand extends Command {
	protected static $defaultName = 'app:author-weekly-report:send';

	protected function configure() {
		$this
			->setDescription('Send weekly reports to authors');
	}

	public function __construct(string $name = null) {
		parent::__construct($name);
	}
	
	protected function execute(InputInterface $input, OutputInterface $output) {
		$io = new SymfonyStyle($input, $output);
		$arg1 = $input->getArgument('arg1');

		if ($arg1) {
			$io->note(sprintf('You passed an argument: %s', $arg1));
		}

		if ($input->getOption('option1')) {
			// ...
		}

		$io->success('You have a new command! Now make it your own! Pass --help to see your options.');
	}
}
