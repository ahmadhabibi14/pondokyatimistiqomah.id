<script lang="ts">
	import { Input } from '@/lib/components/ui/input';
	import { Label } from '@/lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import type { QurbanTable } from '@/types/event';
	import { Icon } from 'svelte-icons-pack';
	import { RiFinanceExchangeLine } from 'svelte-icons-pack/ri';
	import toast, { Toaster } from 'svelte-french-toast';
	import { Switch } from '@/lib/components/ui/switch';

	const hargaQurbanKambing: Record<string, QurbanTable> = {
		A: {
			tipe: 'A',
			harga: 'Rp. 3.000.000',
			berat: '30 kg'
		},
		B: {
			tipe: 'B',
			harga: 'Rp. 3.500.000',
			berat: '35 kg'
		},
		C: {
			tipe: 'C',
			harga: 'Rp. 3.700.000',
			berat: '37 kg'
		},
		D: {
			tipe: 'D',
			harga: 'Rp. 4.000.000',
			berat: '40 kg'
		},
		E: {
			tipe: 'E',
			harga: 'Rp. 4.500.000',
			berat: '45 kg'
		},
		F: {
			tipe: 'F',
			harga: 'Rp. 5.000.000',
			berat: '50 kg'
		},
		G: {
			tipe: 'G',
			harga: 'Rp. 6.000.000',
			berat: '60 kg'
		},
		Super: {
			tipe: 'Super',
			harga: 'Rp. 7.000.000',
			berat: '70 kg'
		}
	};

	const hargaQurbanSapi: Record<string, QurbanTable> = {
		A: {
			tipe: 'A',
			harga: 'Rp. 21.000.000',
			berat: '300 kg'
		},
		B: {
			tipe: 'B',
			harga: 'Rp. 23.100.000',
			berat: '330 kg'
		},
		C: {
			tipe: 'C',
			harga: 'Rp. 24.500.000',
			berat: '350 kg'
		},
		D: {
			tipe: 'D',
			harga: 'Rp. 25.900.000',
			berat: '370 kg'
		},
		E: {
			tipe: 'E',
			harga: 'Rp. 28.000.000',
			berat: '400 kg'
		},
		F: {
			tipe: 'F',
			harga: 'Rp. 30.500.000',
			berat: '450 kg'
		}
	};

	const selectQurbanKambing = [
		{ value: 'A', label: 'Tipe A (30kg)' },
		{ value: 'B', label: 'Tipe B (35kg)' },
		{ value: 'C', label: 'Tipe C (37kg)' },
		{ value: 'D', label: 'Tipe D (40kg)' },
		{ value: 'E', label: 'Tipe E (45kg)' },
		{ value: 'F', label: 'Tipe F (50kg)' },
		{ value: 'G', label: 'Tipe G (60kg)' },
		{ value: 'Super', label: 'Tipe Super (70kg)' }
	];

	let qurbanKambing: string = $state('');
	const triggerQurbanKambing = $derived(
		selectQurbanKambing.find((f) => f.value === qurbanKambing)?.label ?? 'Pilih Qurban Kambing'
	);

	const selectQurbanSapi = [
		{ value: 'A', label: 'Tipe A (300kg)' },
		{ value: 'B', label: 'Tipe B (330kg)' },
		{ value: 'C', label: 'Tipe C (350kg)' },
		{ value: 'D', label: 'Tipe D (370kg)' },
		{ value: 'E', label: 'Tipe E (400kg)' },
		{ value: 'F', label: 'Tipe F (450kg)' }
	];

	let qurbanSapi: string = $state('');
	const triggerQurbanSapi = $derived(
		selectQurbanKambing.find((f) => f.value === qurbanSapi)?.label ?? 'Pilih Qurban Sapi'
	);

	let namaLengkap: string = $state('');
	let alamat: string = $state('');
	let telepon: string = $state('');

	let rekening: string = $state('');
	const selectRekening = [
		{ value: 'BCA', label: 'BCA: 7510375178' },
		{ value: 'BSI', label: 'BSI: 7026717803' }
	];
	const triggerRekening = $derived(
		selectRekening.find((f) => f.value === rekening)?.label ?? 'Pilih Rekening'
	);

	const handleSubmit = () => {
		if (!namaLengkap || !alamat || !telepon || (!qurbanKambing && !qurbanSapi)) {
			toast.error('Mohon lengkapi semua form sebelum mengirim donasi.');
			return;
		}

		let textToWhatsApp = `Nama: ${namaLengkap}
Alamat: ${alamat}
No. Telepon: ${telepon}
Rekening Tujuan: ${rekening}

${
	qurbanKambing
		? `Qurban Kambing: ${triggerQurbanKambing}
Harga: ${hargaQurbanKambing[qurbanKambing].harga}
Berat: ${hargaQurbanKambing[qurbanKambing].berat}
`
		: ''
}

${
	qurbanSapi
		? `Qurban Sapi: ${triggerQurbanSapi}
Harga: ${hargaQurbanSapi[qurbanSapi].harga}
Berat: ${hargaQurbanSapi[qurbanSapi].berat}
`
		: ''
}`;

		window.open(`https://wa.me/6281322482220?text=${encodeURIComponent(textToWhatsApp)}`, '_blank');
	};

	let chooseSapi: boolean = $state(true);
	let chooseKambing: boolean = $state(false);
</script>

<Toaster />

<div
	class="flex flex-col gap-3 md:w-8/12 w-full mx-auto bg-neutral-50 border border-neutral-200 px-5 py-6 rounded-xl"
>
	<h3 class="font-bold text-2xl text-center">FORM DONASI</h3>
	<div class="flex flex-col gap-3">
		<div class="flex w-full flex-col gap-1.5">
			<Label for="nama-lengkap" class="text-xs ml-1">Nama Lengkap</Label>
			<Input
				class=""
				type="text"
				id="nama-lengkap"
				placeholder="Muhammad bin Abdullah"
				bind:value={namaLengkap}
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
		<!-- PILIH QURBAN -->
		<div class="flex flex-row gap-5">
			<div class="flex items-center space-x-2">
				<Switch id="qurbannya-kambing" bind:checked={chooseKambing} />
				<Label for="qurbannya-kambing">Kambing</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Switch id="qurbannya-sapi" bind:checked={chooseSapi} />
				<Label for="qurbannya-sapi">Sapi</Label>
			</div>
		</div>
		<!-- KAMBING -->
		{#if chooseKambing}
			<div class="flex w-full flex-col gap-1.5">
				<Label for="favoriteFruit" class="text-xs ml-1">Qurban Kambing</Label>
				<Select.Root type="single" name="favoriteFruit" bind:value={qurbanKambing}>
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
		{#if chooseSapi}
			<div class="flex w-full flex-col gap-1.5">
				<Label for="favoriteFruit" class="text-xs ml-1">Qurban Sapi</Label>
				<Select.Root type="single" name="favoriteFruit" bind:value={qurbanSapi}>
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
		<div class="flex w-full flex-col gap-1.5">
			<Label for="favoriteFruit" class="text-xs ml-1">Pilih Rekening</Label>
			<Select.Root type="single" name="favoriteFruit" bind:value={rekening}>
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
