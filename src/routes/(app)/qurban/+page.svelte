<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import * as Table from '$lib/components/ui/table';
	import FormDonasi from './FormDonasi.svelte';
	import type { QurbanTable } from '@/types/event';

	const qurbanKambing: QurbanTable[] = [
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
		}
	];
</script>

<Head
  title="Qurban 1447 H"
  path="/qurban"
  description="Program Qurban 1447 Hijriyah, Qurban asyik bersama Yatim Dhu'afa penghafal Al-Qur'an"
/>

<div class="w-full h-auto">
  <div class="w-full h-auto">
    <img
      src="/img/qurban-istiqomah.png"
      alt=""
      class="w-full h-auto"
    />
  </div>
	<div class="container max-w-6xl mx-auto px-4 md:px-0 my-10 flex flex-col gap-8">
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
      <h3 class="font-bold text-xl">Bersama Pondok Yatim Istiqomah, insyaAllah qurban Anda:</h3>
      <ul>
        <li>✔ Hewan sehat & sesuai syariat</li>
        <li>✔ Proses transparan & amanah</li>
        <li>✔ Daging tersalurkan untuk anak yatim</li>
      </ul>
    </div>
    <div class="flex flex-col gap-3 md:w-8/12 w-full mx-auto">
      <h3 class="font-bold text-xl">Transfer Donasi Qurban</h3>
      <ul>
        <li><b>BCA</b>: 7510375178</li>
        <li><b>BSI</b>: 7026717803</li>
        <li>a.n. Yayasan Pondok Yatim Istiqomah</li>
      </ul>
    </div>
		<!-- FORM DONASI -->
		<FormDonasi />
	</div>
</div>
