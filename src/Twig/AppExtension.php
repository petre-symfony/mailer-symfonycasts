<?php

namespace App\Twig;

use App\Service\MarkdownHelper;
use App\Service\UploaderHelper;
use Psr\Container\ContainerInterface;
use Symfony\Contracts\Service\ServiceSubscriberInterface;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension implements ServiceSubscriberInterface {
  private $container;

  public function __construct(ContainerInterface $container) {
    $this->container = $container;
  }

  public function getFunctions(): array {
    return [
      new TwigFunction('uploaded_asset', [$this, 'getUploadedAssetPath']),
	    new TwigFunction('encore_entry_css_source', [$this, 'getEncoreEntryCssSource'])
    ];
  }

  public function getFilters(): array {
    return [
      new TwigFilter('cached_markdown', [$this, 'processMarkdown'], ['is_safe' => ['html']])
    ];
  }

  public function processMarkdown($value) {
    return $this->container
      ->get(MarkdownHelper::class)
      ->parse($value);
  }

  public function getUploadedAssetPath(string $path): string {
    return $this->container
      ->get(UploaderHelper::class)
      ->getPublicPath($path);
  }

	public function getEncoreEntryCssSource(string $entryName): string {
		$files = $this->container
			->get(EntrypointLookupInterface::class)
			->getCssFiles($entryName);

		$source = '';
		foreach ($files as $file) {
		}
	}

  public static function getSubscribedServices() {
    return [
      MarkdownHelper::class,
      UploaderHelper::class,
	    EntrypointLookupInterface::class,
    ];
  }
}
