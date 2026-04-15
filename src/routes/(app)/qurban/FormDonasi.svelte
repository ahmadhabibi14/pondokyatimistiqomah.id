<script lang="ts">
	import { Input } from '@/lib/components/ui/input';
	import { Label } from '@/lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import type { QurbanTable } from '@/types/event';
	import { Icon } from 'svelte-icons-pack';
	import { RiFinanceExchangeLine } from 'svelte-icons-pack/ri';
	import toast, { Toaster } from 'svelte-french-toast';
	import OnOff from '@/lib/components/OnOff.svelte';

	const hargaQurbanKambing: Record<string, QurbanTable> = {
		Mini: {
			tipe: 'Mini',
			harga: 'Rp. 2.700.000',
			hargaNumber: 2_700_000,
			berat: '10 kg'
		},
		A: {
			tipe: 'A',
			harga: 'Rp. 3.000.000',
			hargaNumber: 3_000_000,
			berat: '30 kg'
		},
		B: {
			tipe: 'B',
			harga: 'Rp. 3.500.000',
			hargaNumber: 3_500_000,
			berat: '35 kg'
		},
		C: {
			tipe: 'C',
			harga: 'Rp. 3.700.000',
			hargaNumber: 3_700_000,
			berat: '37 kg'
		},
		D: {
			tipe: 'D',
			harga: 'Rp. 4.000.000',
			hargaNumber: 4_000_000,
			berat: '40 kg'
		},
		E: {
			tipe: 'E',
			harga: 'Rp. 4.500.000',
			hargaNumber: 4_500_000,
			berat: '45 kg'
		},
		F: {
			tipe: 'F',
			harga: 'Rp. 5.000.000',
			hargaNumber: 5_000_000,
			berat: '50 kg'
		},
		G: {
			tipe: 'G',
			harga: 'Rp. 6.000.000',
			hargaNumber: 6_000_000,
			berat: '60 kg'
		},
		Super: {
			tipe: 'Super',
			harga: 'Rp. 7.000.000',
			hargaNumber: 7_000_000,
			berat: '70 kg'
		}
	};

	const hargaQurbanSapi: Record<string, QurbanTable> = {
		A: {
			tipe: 'A',
			harga: 'Rp. 21.000.000',
			hargaNumber: 21_000_000,
			berat: '300 kg'
		},
		B: {
			tipe: 'B',
			harga: 'Rp. 23.100.000',
			hargaNumber: 23_100_000,
			berat: '330 kg'
		},
		C: {
			tipe: 'C',
			harga: 'Rp. 24.500.000',
			hargaNumber: 24_500_000,
			berat: '350 kg'
		},
		D: {
			tipe: 'D',
			harga: 'Rp. 25.900.000',
			hargaNumber: 25_900_000,
			berat: '370 kg'
		},
		E: {
			tipe: 'E',
			harga: 'Rp. 28.000.000',
			hargaNumber: 28_000_000,
			berat: '400 kg'
		},
		F: {
			tipe: 'F',
			harga: 'Rp. 30.500.000',
			hargaNumber: 30_500_000,
			berat: '450 kg'
		},
		G: {
			tipe: 'G',
			harga: 'Rp. 35.000.000',
			hargaNumber: 35_000_000,
			berat: '500 kg'
		},
		'Super': {
			tipe: 'Super',
			harga: 'Rp. 42.000.000',
			hargaNumber: 42_000_000,
			berat: '600 kg'
		},
		'Patungan': {
			tipe: 'Patungan',
			harga: 'Rp. 3.000.000',
			hargaNumber: 3_000_000,
			berat: '1 Jiwa'
		}
	};

	const selectQurbanKambing = [
		{ value: 'Mini', label: 'Tipe Mini (27kg) - Rp.2,7jt' },
		{ value: 'A', label: 'Tipe A (30kg) - Rp.3jt' },
		{ value: 'B', label: 'Tipe B (35kg) - Rp.3,5jt' },
		{ value: 'C', label: 'Tipe C (37kg) - Rp.3,7jt' },
		{ value: 'D', label: 'Tipe D (40kg) - Rp.4jt' },
		{ value: 'E', label: 'Tipe E (45kg) - Rp.4,5jt' },
		{ value: 'F', label: 'Tipe F (50kg) - Rp.5jt' },
		{ value: 'G', label: 'Tipe G (60kg) - Rp.6jt' },
		{ value: 'Super', label: 'Tipe Super (70kg) - Rp.7jt' },
	];

	let qurbanKambing: string = $state('');
	const triggerQurbanKambing = $derived(
		selectQurbanKambing.find((f) => f.value === qurbanKambing)?.label ?? 'Pilih Qurban Kambing'
	);

	const selectQurbanSapi = [
		{ value: 'A', label: 'Tipe A (300kg) - Rp.21jt' },
		{ value: 'B', label: 'Tipe B (330kg) - Rp.23,1jt' },
		{ value: 'C', label: 'Tipe C (350kg) - Rp.24,5jt' },
		{ value: 'D', label: 'Tipe D (370kg) - Rp.25,9jt' },
		{ value: 'E', label: 'Tipe E (400kg) - Rp.28jt' },
		{ value: 'F', label: 'Tipe F (450kg) - Rp.30,5jt' },
		{ value: 'G', label: 'Tipe G (500kg) - Rp.35jt' },
		{ value: 'Super', label: 'Tipe Super (600kg) - Rp.42jt' },
		{ value: 'Patungan', label: 'Patungan - Rp.3jt/Jiwa' },
	];

	let qurbanSapi: string = $state('');
	const triggerQurbanSapi = $derived(
		selectQurbanSapi.find((f) => f.value === qurbanSapi)?.label ?? 'Pilih Qurban Sapi'
	);

	let namaLengkap: string = $state('');
	let qurbanAtasNama: string = $state('');
	let alamat: string = $state('');
	let telepon = $state();
	let donasiLainnya: number = $state(0);

	let totalDonasi: number = $derived(
		(qurbanKambing ? hargaQurbanKambing[qurbanKambing]?.hargaNumber || 0 : 0) +
			(qurbanSapi ? hargaQurbanSapi[qurbanSapi]?.hargaNumber || 0 : 0) +
			donasiLainnya
	);

	const dataRekening: Record<string, string> = {
		'BCA': '7510375178',
		'BSI': '7026717803'
	}

	let rekening: string = $state('');
	const selectRekening = [
		{ value: 'BCA', label: 'BCA: 7510375178 (M. Sholahudin Suprapto)'  },
		{ value: 'BSI', label: 'BSI: 7026717803' }
	];
	const triggerRekening = $derived(
		selectRekening.find((f) => f.value === rekening)?.label ?? 'Pilih Rekening'
	);

	const handleSubmit = () => {
		if (!namaLengkap || !qurbanAtasNama || !alamat || !telepon || (!qurbanKambing && !qurbanSapi) || !rekening) {
			toast.error('Mohon lengkapi semua form sebelum mengirim donasi.');
			return;
		}

		let textToWhatsApp = `Nama: ${namaLengkap}
Qurban Atas Nama: ${qurbanAtasNama}
Alamat: ${alamat}
No. Telepon: ${telepon}
Rekening Tujuan:  ${rekening + ' ' + dataRekening[rekening]}

--------------
${ qurbanKambing ? `Qurban Kambing: ${triggerQurbanKambing}
` : ''}${ qurbanSapi ? `Qurban Sapi: ${triggerQurbanSapi}
` : ''}${ donasiLainnya ? `Donasi Lainnya: Rp. ${donasiLainnya.toLocaleString('id-ID')}` : ''}
--------------

Total Donasi: Rp. ${totalDonasi.toLocaleString('id-ID')}`;

		window.open(`https://wa.me/6281213339923?text=${encodeURIComponent(textToWhatsApp)}`, '_blank');
	};

	let donasikanKambing: boolean = $state(true);
	let donasikanSapi: boolean = $state(false);
</script>

<Toaster />

<div
	class="flex flex-col gap-3 md:w-8/12 w-full mx-auto bg-neutral-50 border border-neutral-200 px-5 py-6 rounded-xl"
>
	<h3 class="font-bold text-2xl text-center">FORM DONASI</h3>
	<div class="flex flex-col gap-5">
		<div class="flex w-full flex-col gap-1.5">
			<Label for="nama-lengkap" class="text-xs ml-1">Nama</Label>
			<Input
				class=""
				type="text"
				id="nama-lengkap"
				placeholder="Muhammad bin Abdullah"
				bind:value={namaLengkap}
			/>
		</div>
		<div class="flex w-full flex-col gap-1.5">
			<Label for="atasnama" class="text-xs ml-1">Qurban Atas Nama</Label>
			<Input
				class=""
				type="text"
				id="atasnama"
				placeholder=""
				bind:value={qurbanAtasNama}
			/>
		</div>
		<div class="flex w-full flex-col gap-1.5">
			<Label for="alamat" class="text-xs ml-1">Alamat</Label>
			<Input
				class=""
				type="text"
				id="alamat"
				placeholder="Jl. Kebaikan No. 99"
				bind:value={alamat}
			/>
		</div>
		<div class="flex w-full flex-col gap-1.5">
			<Label for="telepon" class="text-xs ml-1">No. HP/Telepon</Label>
			<Input class="" type="number" id="telepon" placeholder="0812346789" bind:value={telepon} />
		</div>
		<div class="flex flex-col md:grid md:grid-cols-[40%_1fr] items-center gap-5">
			<div class="flex flex-col gap-2 w-full">
				<div
					class="w-full h-fit text-sm py-2 px-3 flex justify-center items-center bg-istq-green-darker text-white rounded-md"
				>
					<span>Pilih Qurban</span>
				</div>
				<div class="flex flex-col gap-2 items-start">
					<OnOff id="qurban-kambing" label="Qurban Kambing" bind:checked={donasikanKambing} />
					<OnOff id="qurban-sapi" label="Qurban Sapi" bind:checked={donasikanSapi} />
				</div>
			</div>
			<div class="flex flex-col gap-3 w-full">
				<!-- KAMBING -->
				{#if donasikanKambing}
					<div class="flex w-full flex-col gap-1.5">
						<Label for="pilih-kambing" class="text-xs ml-1">Qurban Kambing</Label>
						<Select.Root type="single" name="pilih-kambing" bind:value={qurbanKambing}>
							<Select.Trigger class="w-full">
								{triggerQurbanKambing}
							</Select.Trigger>
							<Select.Content>
								<Select.Group>
									<Select.Label>Kambing</Select.Label>
									{#each selectQurbanKambing as kmb (kmb.value)}
										<Select.Item value={kmb.value} label={kmb.label}>
											{kmb.label}
										</Select.Item>
									{/each}
								</Select.Group>
							</Select.Content>
						</Select.Root>
					</div>
				{/if}

				<!-- SAPI -->
				{#if donasikanSapi}
					<div class="flex w-full flex-col gap-1.5">
						<Label for="pilih-sapi" class="text-xs ml-1">Qurban Sapi</Label>
						<Select.Root type="single" name="pilih-sapi" bind:value={qurbanSapi}>
							<Select.Trigger class="w-full">
								{triggerQurbanSapi}
							</Select.Trigger>
							<Select.Content>
								<Select.Group>
									<Select.Label>Sapi</Select.Label>
									{#each selectQurbanSapi as sp (sp.value)}
										<Select.Item value={sp.value} label={sp.label}>
											{sp.label}
										</Select.Item>
									{/each}
								</Select.Group>
							</Select.Content>
						</Select.Root>
					</div>
				{/if}
			</div>
		</div>
		<div class="flex w-full flex-col gap-1.5">
			<Label for="dobasi-lainnya" class="text-xs ml-1">Donasi Lainnya</Label>
			<Input
				class=""
				type="number"
				id="dobasi-lainnya"
				placeholder="0"
				bind:value={donasiLainnya}
			/>
		</div>

		<div class="text-lg my-3">
			<span>Total Donasi: Rp. {totalDonasi.toLocaleString('id-ID')}</span>
		</div>

		<div class="flex w-full flex-col gap-1.5">
			<Label for="pilih-rekening" class="text-xs ml-1">Pilih Rekening</Label>
			<Select.Root type="single" name="pilih-rekening" bind:value={rekening}>
				<Select.Trigger class="w-full">
					{triggerRekening}
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						{#each selectRekening as rek (rek.value)}
							<Select.Item value={rek.value} label={rek.label}>
								{rek.label}
							</Select.Item>
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
		<button
			onclick={handleSubmit}
			class="bg-black text-white
       py-3 px-auto rounded-xl hover:bg-black/90 focus:outline-none
       focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 w-full text-lg font-bold
       cursor-pointer flex items-center justify-center mt-7 gap-2"
		>
			<Icon src={RiFinanceExchangeLine} size="24" className="-mt-1" />
			<span>Kirim Donasi</span>
		</button>
	</div>
</div>
