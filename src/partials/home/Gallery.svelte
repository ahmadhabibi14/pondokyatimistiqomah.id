<script lang="ts">
	import Image from '@/lib/components/Image.svelte';

	const galleryImages: string[][] = [
		['/img/gallery/05.jpg', '/img/gallery/06.jpg', '/img/gallery/16.jpg', '/img/gallery/07.jpg']
	];
</script>

<section class="container max-w-6xl mx-auto my-10 px-4 md:px-0" id="gallery">
	<div class="grid grid-cols-2 md:gap-4 gap-2">
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
		{/each}
	</div>
	<div class="flex justify-center items-center">
		<a
			href="/gallery"
			class="bg-istq text-white w-fit h-fit
    px-8 py-2 rounded-full mt-6 hover:underline"
		>
			Lihat Selengkapnya...
		</a>
	</div>
</section>
