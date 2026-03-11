<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import CompanyDetails from '@/partials/home/CompanyDetails.svelte';
	import Contact from '@/partials/home/Contact.svelte';
	import Gallery from '@/partials/home/Gallery.svelte';
	import Jumbotron from '@/partials/home/Jumbotron.svelte';
	import LatestNews from '@/partials/home/LatestNews.svelte';
	import MainProgram from '@/partials/home/MainProgram.svelte';
	import Partners from '@/partials/home/Partners.svelte';
	import Program from '@/partials/home/Program.svelte';
	import YouTubeChannel from '@/partials/home/YouTubeChannel.svelte';
</script>

<Head title="Pondok Yatim Istiqomah" />

<div class="min-h-[900px] w-full flex flex-col">
	<Jumbotron />
	<CompanyDetails />
	<MainProgram />
	<Program />
	<Gallery />
	<YouTubeChannel />
	<LatestNews />
	<Partners />
	<Contact />
</div>