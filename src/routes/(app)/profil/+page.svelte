<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import AboutUs from '@/partials/profil/AboutUs.svelte';
	import MaknaLogo from '@/partials/profil/MaknaLogo.svelte';
	import Struktur from '@/partials/profil/Struktur.svelte';
	import VisiMisi from '@/partials/profil/VisiMisi.svelte';
</script>

<Head title="Profil" path="/profil" description="Profil Pondok Yatim Istiqomah" />

<div class="w-full h-auto">
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col">
		<div class="text-center w-full border-b-2 border-dashed border-gray-300 pb-5">
			<h1 class="font-bold text-4xl md:text-5xl">Profil Pondok Yatim Istiqomah</h1>
		</div>
		<AboutUs />
		<VisiMisi />
		<Struktur />
		<MaknaLogo />
	</div>
</div>
