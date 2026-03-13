<script lang="ts">
	import { Programs } from '@/data/programs';
	import Head from '@/partials/Head.svelte';
</script>

<Head title="Program" path="/program" description="Program Pondok Yatim Istiqomah" />

<div class="w-full h-auto">
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col gap-8">
		<div class="text-center w-full">
			<h1 class="font-bold text-3xl md:text-5xl">Program Pondok Yatim Istiqomah</h1>
		</div>
		<div class="flex flex-col gap-7">
			{#each Programs as pg (pg.slug)}
				<section class="flex flex-col gap-5 scroll-mt-28" id={pg.slug}>
					<div class="flex flex-row gap-2 items-center">
						<img src={pg.iconLink} alt={pg.title} class="w-12 h-auto shrink-0" />
						<h2 class="text-2xl md:text-3xl font-bold grow">{pg.title}</h2>
					</div>
					{#each pg.descMultiple as desc (desc)}
						<p class="text-gray-800 text-lg">
							{desc}
						</p>
					{/each}
				</section>
			{/each}
		</div>
	</div>
</div>
