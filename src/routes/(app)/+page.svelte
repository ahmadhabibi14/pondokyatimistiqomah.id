<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import AboutUs from '@/partials/home/AboutUs.svelte';
	import CompanyDetails from '@/partials/home/CompanyDetails.svelte';
	import Contact from '@/partials/home/Contact.svelte';
	import Jumbotron from '@/partials/home/Jumbotron.svelte';
	import MainProgram from '@/partials/home/MainProgram.svelte';
	import Program from '@/partials/home/Program.svelte';
</script>

<Head title="Pondok Yatim Istiqomah" />

<div class="min-h-[900px] w-full flex flex-col">
	<Jumbotron />
	<CompanyDetails />
	<MainProgram />
	<Program />
	<Contact />
</div>