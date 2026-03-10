<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import CompanyDetails from '@/partials/home/CompanyDetails.svelte';
	import Contact from '@/partials/home/Contact.svelte';
	import Gallery from '@/partials/home/Gallery.svelte';
	import Jumbotron from '@/partials/home/Jumbotron.svelte';
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
	<Gallery />
	<Partners />
	<Contact />
</div>