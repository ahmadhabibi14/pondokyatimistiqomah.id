<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import AboutUs from '@/partials/home/AboutUs.svelte';
	import Contact from '@/partials/home/Contact.svelte';
	import Jumbotron from '@/partials/home/Jumbotron.svelte';
	import Program from '@/partials/home/Program.svelte';
</script>

<Head title="Pondok Yatim Istiqomah" />

<div class="min-h-[900px] w-full flex flex-col">
	<Jumbotron />
	<AboutUs />
	<Program />
	<Contact />
</div>