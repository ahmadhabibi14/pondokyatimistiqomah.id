<script lang="ts">
	import Image from '@/lib/components/Image.svelte';
	import Head from '@/partials/Head.svelte';

	const galleryImages: string[][] = [
		['/img/gallery/01.jpg', '/img/gallery/02.jpg', '/img/gallery/03.jpg', '/img/gallery/04.jpg'],
		['/img/gallery/05.jpg', '/img/gallery/06.jpg', '/img/gallery/07.jpg', '/img/gallery/08.jpg'],
		['/img/gallery/09.jpg', '/img/gallery/10.jpg', '/img/gallery/11.jpg', '/img/gallery/12.jpg'],
		['/img/gallery/13.jpg', '/img/gallery/14.jpg', '/img/gallery/15.jpg', '/img/gallery/16.jpg']
	];
</script>

<Head
	title="Galeri Pondok Yatim Istiaomah"
	path="/gallery"
	description="Galeri kegiatan Pondok Yatim Istiaomah"
/>

<div class="w-full h-auto">
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col gap-8">
		<div class="text-center w-full">
			<h1 class="font-bold text-3xl md:text-5xl">Galeri Pondok Yatim Istiaomah</h1>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2">
			{#each galleryImages as images, idx (idx)}
				<div class="grid md:gap-3 gap-2">
					<Image
						src={images[0]}
						alt="Gallery Image {idx + 1}"
						classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
						classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
					/>
					<Image
						src={images[1]}
						alt="Gallery Image {idx + 2}"
						classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
						classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
					/>
				</div>
				{#if images.length > 2}
					<div class="grid md:gap-3 gap-2">
						<Image
							src={images[2]}
							alt="Gallery Image {idx + 3}"
							classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
							classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
						/>
						<Image
							src={images[3]}
							alt="Gallery Image {idx + 4}"
							classNameContainer="border shadow overflow-hidden object-cover h-auto max-w-full rounded-lg group cursor-pointer"
							classNameImg="w-full h-full object-cover group-hover:scale-110 duration-300"
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
