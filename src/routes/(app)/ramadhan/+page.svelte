<script lang="ts">
	import Head from '@/partials/Head.svelte';
	const programRamadhan: { title: string; descList?: string[] }[] = [
		{
			title: 'Paket Berbuka Puasa Santri & Pengasuh (1–30 Ramadhan)',
			descList: ['Sasaran: 50 santri dan pengasuh', 'Anggaran: Rp45.000.000']
		},
		{
			title: 'Paket Sahur Santri & Pengasuh (1–30 Ramadhan)',
			descList: ['Sasaran: 50 santri dan pengasuh', 'Anggaran: Rp37.500.000']
		},
		{
			title: 'Paket Ibadah Ramadhan',
			descList: ['Sholat Tarawih berjamaah, i’tikaf, dan transport imam', 'Anggaran: Rp5.000.000']
		},
		{
			title: 'Paket Dauroh Tahfizh Al-Qur’an & Bahasa Arab (1–25 Ramadhan)',
			descList: ['Peserta: 50 santri', 'Anggaran: Rp17.500.000']
		},
		{
			title: 'Paket Pengajian Akbar & Santunan Dhuafa (21 Ramadhan / 21 Maret 2025)',
			descList: ['Sasaran: 300 kaum dhuafa', 'Anggaran: Rp30.000.000']
		},
		{
			title: 'Paket Lebaran Yatim & Dhuafa (27 Ramadhan)',
			descList: ['Sasaran: 50 yatim & dhuafa', 'Anggaran: Rp10.000.000']
		},
		{
			title: 'Paket Lebaran Guru Ngaji (27 Ramadhan)',
			descList: ['Sasaran: 5 guru ngaji', 'Anggaran: Rp5.000.000']
		},
		{
			title: 'Paket Wakaf Jariyah Ramadhan',
			descList: ['Untuk pelunasan Lahan (±600 m²)', 'Kebutuhan : Rp. 1.100.000.000,- ']
		}
	];
</script>

<Head title="Ramadhan 1447 H" path="/ramadhan" description="Program Ramadhan 1447 Hijriyah" />

<div class="w-full h-auto">
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col gap-8">
		<div class="text-center w-full">
			<h1 class="font-bold text-3xl md:text-5xl">Program Ramadhan 1447 H</h1>
		</div>
		<div class="md:grid md:grid-cols-3 flex flex-col gap-4">
			{#each programRamadhan as program, idx (program.title)}
				<div
					class="flex flex-col justify-start items-center gap-4
					pt-5 pb-4 px-5
					border border-gray-200 bg-gray-50 rounded-xl"
				>
					<img
						src="/icons/ramadhan/{idx + 1}.svg"
						alt={program.title}
						class="h-20 w-auto shrink-0"
					/>
					<div class="flex flex-col gap-2">
						<h2 class="text-base font-bold grow">{program.title}</h2>
						{#if program.descList}
							<ul class="list-disc list-inside mt-2 text-sm">
								{#each program.descList as desc (desc)}
									<li>{desc}</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
