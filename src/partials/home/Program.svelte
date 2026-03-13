<script lang="ts">
	import { ProgramsShort } from '@/data/programs';
</script>

<section
	class="container max-w-6xl mx-auto my-10 md:scroll-mt-28 scroll-mt-20 px-4 md:px-0"
	id="about-us"
>
	<div class="flex flex-col gap-6">
		<h2 class="md:text-4xl text-3xl font-bold text-center">Program Istiqomah</h2>
		<div class="flex flex-col md:grid md:grid-cols-3 gap-4 w-full">
			{#each ProgramsShort as pg, idx (pg.slug)}
				<a
					href={pg.link}
					class="group flex flex-col gap-4 py-4 px-6
            border border-gray-300 rounded-xl
            hover:shadow-md
            {idx === ProgramsShort.length - 1 ? 'col-start-2' : ''}"
				>
					<img src={pg.iconLink} alt={pg.title} class="w-16 h-auto" />
					<h3 class="text-xl font-semibold group-hover:underline">{pg.title}</h3>
				</a>
			{/each}
		</div>
	</div>
</section>
