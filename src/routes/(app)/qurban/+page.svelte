<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import * as Table from '$lib/components/ui/table';
	import FormDonasi from './FormDonasi.svelte';
	import type { QurbanTable } from '@/types/event';
	import { SiteBaseUrl } from '@/lib/constant';
	import { Info } from '@lucide/svelte';

	const qurbanKambing: QurbanTable[] = [
		{
			tipe: 'Mini',
			harga: 'Rp. 2.700.000',
			hargaNumber: 2_700_000,
			berat: '27 kg'
		},
		{
			tipe: 'A',
			harga: 'Rp. 3.000.000',
			berat: '30 kg'
		},
		{
			tipe: 'B',
			harga: 'Rp. 3.500.000',
			berat: '35 kg'
		},
		{
			tipe: 'C',
			harga: 'Rp. 3.700.000',
			berat: '37 kg'
		},
		{
			tipe: 'D',
			harga: 'Rp. 4.000.000',
			berat: '40 kg'
		},
		{
			tipe: 'E',
			harga: 'Rp. 4.500.000',
			berat: '45 kg'
		},
		{
			tipe: 'F',
			harga: 'Rp. 5.000.000',
			berat: '50 kg'
		},
		{
			tipe: 'G',
			harga: 'Rp. 6.000.000',
			berat: '60 kg'
		},
		{
			tipe: 'Super',
			harga: 'Rp. 7.000.000',
			berat: '70 kg'
		}
	];

	const qurbanSapi: QurbanTable[] = [
		{
			tipe: 'A',
			harga: 'Rp. 21.000.000',
			berat: '300 kg'
		},
		{
			tipe: 'B',
			harga: 'Rp. 23.100.000',
			berat: '330 kg'
		},
		{
			tipe: 'C',
			harga: 'Rp. 24.500.000',
			berat: '350 kg'
		},
		{
			tipe: 'D',
			harga: 'Rp. 25.900.000',
			berat: '370 kg'
		},
		{
			tipe: 'E',
			harga: 'Rp. 28.000.000',
			berat: '400 kg'
		},
		{
			tipe: 'F',
			harga: 'Rp. 30.500.000',
			berat: '450 kg'
		},
		{
			tipe: 'G',
			harga: 'Rp. 35.000.000',
			hargaNumber: 35_000_000,
			berat: '500 kg'
		},
		{
			tipe: 'Super',
			harga: 'Rp. 42.000.000',
			hargaNumber: 42_000_000,
			berat: '600 kg'
		},
		{
			tipe: 'Patungan',
			harga: 'Rp. 3.000.000',
			hargaNumber: 3_000_000,
			berat: 'per Jiwa'
		}
	];
</script>

<Head
	title="Qurban 1447 H"
	path="/qurban"
	description="Program Qurban 1447 Hijriyah, Qurban asyik bersama Yatim Dhu'afa penghafal Al-Qur'an"
	imageUrl="{SiteBaseUrl}/img/qurban-thumb.png"
	imgWidth=1600
	imgHeight=712
/>

<div class="w-full h-auto">
	<div class="w-full h-auto">
		<img
			src="/img/qurban-thumb.png"
			alt="Qurban 1447 H"
			class="w-full h-auto"
			fetchpriority="high"
		/>
	</div>
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col gap-8">
		<div class="md:w-8/12 w-full mx-auto flex flex-row gap-4">
			<div class="flex flex-col gap-3 grow">
				<h3 class="font-bold text-xl">Bersama Pondok Yatim Istiqomah, insyaAllah qurban Anda:</h3>
				<ul>
					<li>✔ Hewan sehat & sesuai syariat</li>
					<li>✔ Proses transparan & amanah</li>
					<li>✔ Daging tersalurkan untuk anak yatim</li>
				</ul>
			</div>
			<div class="w-fit h-auto">
				<img
					src="/img/garansi-qurban.png"
					alt="Garansi"
					class="w-50 md:w-40 h-auto"
					fetchpriority="high"
				/>
			</div>
		</div>
		<div class="md:w-8/12 w-full mx-auto rounded-md
			flex flex-row items-center gap-2 p-5 bg-sky-400/20 border border-sky-500 text-sky-600">
			<Info size="25" class="shrink-0" />
			<p class="grow wrap">Hewan Qurban bisa dilihat dan dipilih langsung di Pondok Yatim Istiqomah</p>
		</div>
		<!-- FORM DONASI -->
		<FormDonasi />
		<!-- KAMBING / DOMBA -->
		<div class="flex flex-col gap-4 md:w-8/12 w-full mx-auto">
			<h2 class="font-bold text-3xl text-center">Kambing / Domba</h2>
			<Table.Root class="border">
				<Table.Header>
					<Table.Row>
						<Table.Head>Tipe</Table.Head>
						<Table.Head>Harga</Table.Head>
						<Table.Head class="text-end">Berat</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each qurbanKambing as kmb (kmb.tipe)}
						<Table.Row>
							<Table.Cell class="font-medium">{kmb.tipe}</Table.Cell>
							<Table.Cell>{kmb.harga}</Table.Cell>
							<Table.Cell class="text-end">{kmb.berat}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<!-- SAPI -->
		<div class="flex flex-col gap-4 md:w-8/12 w-full mx-auto">
			<h2 class="font-bold text-3xl text-center">Sapi</h2>
			<Table.Root class="border">
				<Table.Header>
					<Table.Row>
						<Table.Head>Tipe</Table.Head>
						<Table.Head>Harga</Table.Head>
						<Table.Head class="text-end">Berat</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each qurbanSapi as sp (sp.tipe)}
						<Table.Row>
							<Table.Cell class="font-medium">{sp.tipe}</Table.Cell>
							<Table.Cell>{sp.harga}</Table.Cell>
							<Table.Cell class="text-end">{sp.berat}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<div class="flex flex-col gap-3 md:w-8/12 w-full mx-auto">
			<h3 class="font-bold text-xl">Transfer Donasi Qurban</h3>
			<ul>
				<li><b>BCA</b>: 7510375178</li>
				<li><b>BSI</b>: 7026717803</li>
				<li>a.n. Yayasan Pondok Yatim Istiqomah</li>
			</ul>
		</div>
	</div>
</div>
