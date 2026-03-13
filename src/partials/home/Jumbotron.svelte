<script lang="ts">
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';

	const slideImages: string[] = ['/img/slides/1.jpg', '/img/slides/2.jpg', '/img/slides/3.jpg'];

	function handleImgSrcError(event: Event): void {
		const target = event.currentTarget as HTMLImageElement;
		target.onerror = null;
		target.src = '/img/placeholder.png';
	}

	let imageLoaded: Record<number, boolean> = {};
</script>

<section id="jumbotron" class="relative overflow-hidden w-full h-fit">
	{#if browser}
		<Carousel
			autoplay
			autoplayDuration={5000}
			autoplayProgressVisible
			pauseOnFocus
			pauseOnHover
			arrows={false}
			dots={false}
			class="relative z-10 h-fit"
		>
			{#each slideImages as img, idx (img)}
				<div class="relative w-full aspect-1920/854">
					{#if !imageLoaded[idx]}
						<!-- Skeleton -->
						<div
							class="absolute inset-0 animate-pulse bg-gray-100 flex justify-center items-center"
						>
							<h2 class="text-2xl">Loading image ...</h2>
						</div>
					{/if}
					<img
						onerror={handleImgSrcError}
						src={img}
						alt="Slide {idx + 1}"
						class="w-full object-cover"
						class:opacity-0={!imageLoaded[idx]}
						class:opacity-100={imageLoaded[idx]}
						fetchpriority="high"
						onload={() => (imageLoaded[idx] = true)}
					/>
				</div>
			{/each}
		</Carousel>
	{/if}
</section>
