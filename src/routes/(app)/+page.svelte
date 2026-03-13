<script lang="ts">
	import Image from '@/lib/components/Image.svelte';
	import Head from '@/partials/Head.svelte';
	import CompanyDetails from '@/partials/home/CompanyDetails.svelte';
	import Jumbotron from '@/partials/home/Jumbotron.svelte';
	import LatestNews from '@/partials/home/LatestNews.svelte';
	import MainProgram from '@/partials/home/MainProgram.svelte';
	import Partners from '@/partials/home/Partners.svelte';
	import Program from '@/partials/home/Program.svelte';
</script>

<Head title="Pondok Yatim Istiqomah" />

<div class="min-h-[900px] w-full flex flex-col">
	<Jumbotron />
	<CompanyDetails />
	<MainProgram />
	<Program />
	<LatestNews />
	<section class="container max-w-6xl mx-auto flex px-4 md:px-0 mt-10 mb-12">
		<div
			class="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-7
		items-center h-[400px]"
		>
			<a
				href="https://www.youtube.com/@PondokYatimIstiqomah/"
				target="_blank"
				aria-label="YouTube Channel Pondok Yatim Istiqomah"
				class="group px-3"
			>
				<Image
					src="/img/yt-channel.png"
					alt="YouTube Channel"
					classNameContainer="rounded-3xl overflow-hidden group-hover:drop-shadow-lg transition-shadow duration-300"
					classNameImg="w-full h-full object-cover"
				/>
			</a>
			<a href="/gallery" aria-label="Gallery Pondok Yatim Istiqomah" class="group pt-2">
				<Image
					src="/img/gallery.png"
					alt="Gallery"
					classNameContainer="mt-2 rounded-3xl overflow-hidden group-hover:drop-shadow-lg transition-shadow duration-300"
					classNameImg="w-full h-full object-cover"
				/>
			</a>
		</div>
	</section>
	<Partners />
	<!-- <Contact /> -->
</div>
