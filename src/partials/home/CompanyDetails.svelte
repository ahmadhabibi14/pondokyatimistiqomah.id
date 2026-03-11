<script lang="ts">
	import Image from '@/lib/components/Image.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { RiSystemCloseFill } from 'svelte-icons-pack/ri';

	type CompanyDetailName = 'tentang' | 'visi' | 'misi' | 'legal';

	const companyDetails: {
		name?: string;
		nameUnique?: CompanyDetailName;
		icon: string;
	}[] = [
		{
			nameUnique: 'tentang',
			name: 'Tentang',
			icon: '/icons/company/tentang.svg'
		},
		{
			nameUnique: 'visi',
			name: 'Visi',
			icon: '/icons/company/visi.svg'
		},
		{
			nameUnique: 'misi',
			name: 'Misi',
			icon: '/icons/company/misi.svg'
		},
		{
			nameUnique: 'legal',
			name: 'Legalistas',
			icon: '/icons/company/legal.svg'
		}
	];

	let isPopUpNetworkOpen: boolean = $state(false);

	const CompanyDetailsObj: Record<
		CompanyDetailName,
		{
			name: string;
			content: string | string[];
		}
	> = {
		tentang: {
			name: 'Tentang',
			content: `
<p>
      Yayasan Pondok Yatim Istiqomah merupakan lembaga sosial dan dakwah yang bergerak dalam bidang pembinaan, pendidikan, serta pemberdayaan anak-anak yatim dan dhuafa. Yayasan ini hadir sebagai bentuk kepedulian nyata terhadap masa depan generasi bangsa, khususnya mereka yang membutuhkan perhatian, kasih sayang, dan pendampingan yang berkelanjutan.
</p>
<p>Sebagai lembaga yang berlandaskan nilai-nilai Islam, Yayasan Pondok Yatim Istiqomah memberikan pembinaan secara menyeluruh, mencakup aspek spiritual, intelektual, dan sosial. Seluruh proses pendidikan dan pengasuhan dilaksanakan dalam lingkungan yang islami, aman, nyaman, serta menanamkan nilai akhlakul karimah dalam kehidupan sehari-hari.</p>
<p>Dalam menjalankan perannya, yayasan berkomitmen mencetak generasi Qur’ani yang tidak hanya mampu menghafal Al-Qur’an, tetapi juga memahami dan mengamalkan nilai-nilainya. Pembinaan dilakukan secara terarah dan berkesinambungan agar anak-anak tumbuh menjadi pribadi yang cerdas, disiplin, dan memiliki karakter yang kuat.</p>
<p>Melalui berbagai program pendidikan dan pemberdayaan, Yayasan Pondok Yatim Istiqomah berupaya membentuk generasi yang mandiri, terampil, dan bermanfaat bagi masyarakat. Harapannya, para santri mampu berkontribusi positif bagi agama, bangsa, dan umat, serta menjadi pribadi yang istiqomah dalam kebaikan sepanjang hayat.</p>`
		},
		visi: {
			name: 'Visi',
			content: `Menjadi lembaga pelayanan dan pemberdayaan yatim dan dhuafa yang amanah dan profesional dalam mencetak generasi Qur’ani yang mandiri dan berakhlak mulia.`
		},
		misi: {
			name: 'Misi',
			content: [
				'Memberikan pendidikan dan pembinaan agama Islam secara menyeluruh.',
				'Membekali anak asuh dengan keterampilan dan kemandirian.',
				'Menjadi mitra terpercaya bagi para dermawan dalam penyaluran zakat, infak, dan sedekah.'
			]
		},
		legal: {
			name: 'Legalitas',
			content: [
				'AKTA PENDIRIAN : Notaris : M. Thoha No. 1- 04-04-2017',
				'SK MENKUMHAM : AHU-00676.AH.02.01.Tahun 2016',
				'NPWP : 62.483.473.5-447.000'
			]
		}
	};

	let isPopUpCompanyDetailOpen: boolean = $state(false);

	let openedCompanyDetail: CompanyDetailName = $state('tentang');

	function openCompanyDetail(name: CompanyDetailName) {
		isPopUpCompanyDetailOpen = true;
		openedCompanyDetail = name;
	}
</script>

{#if isPopUpNetworkOpen}
	<div class="popup-container">
		<div class="rounded-xl bg-white p-6 flex flex-col gap-4 md:w-7/12 lg:6/12 h-fit">
			<header class="flex justify-between items-center flex-row">
				<h3 class="text-xl text-qc-darker font-bold">Jaringan Hidayatullah</h3>
				<button
					class="p-1 rounded-full border-[3px] border-qc-darker hover:bg-qc/20
          right-2 top-2 cursor-pointer"
					onclick={() => (isPopUpNetworkOpen = false)}
				>
					<Icon src={RiSystemCloseFill} size="20" />
				</button>
			</header>
			<Image
				src="/img/jaringan.jpg"
				alt="Jaringan Hidayatullah"
				classNameContainer="w-full h-auto"
			/>
		</div>
	</div>
{/if}

{#if isPopUpCompanyDetailOpen}
  {@const content = CompanyDetailsObj[openedCompanyDetail].content}
	<div class="popup-container">
		<div class="rounded-xl bg-white p-6 flex flex-col gap-4 md:w-7/12 lg:6/12 h-fit">
			<header class="flex justify-between items-center flex-row">
				<h3 class="text-xl text-istq-black font-bold">
					{CompanyDetailsObj[openedCompanyDetail].name}
				</h3>
				<button
					class="p-1 rounded-full border-[3px] border-istq-green-darker hover:bg-istq-green/20
          right-2 top-2 cursor-pointer"
					onclick={() => (isPopUpCompanyDetailOpen = false)}
				>
					<Icon src={RiSystemCloseFill} size="20" />
				</button>
			</header>
			{#if Array.isArray(content)}
				<div class="flex ml-6 text-lg">
					<ul class="list-disc marker:text-istq-green-darker marker:text-lg">
						{#each content as misi}
							<li>
								{misi}
							</li>
						{/each}
					</ul>
				</div>
			{:else}
				<div class="flex flex-col gap-2">
					{@html content}
				</div>
			{/if}
		</div>
	</div>
{/if}

<section
	class="container max-w-4xl mx-auto md:mt-14 mt-10 mb-7 md:scroll-mt-28 scroll-mt-20 px-4 md:px-0"
	id="company-details"
>
	<div class="md:gap-6 grid grid-cols-4 gap-2 items-center justify-center">
		{#each companyDetails as detail}
			<button
				onclick={() => openCompanyDetail(detail.nameUnique as CompanyDetailName)}
				class="cursor-pointer group flex flex-col justify-center items-center
            md:py-6 pt-4 pb-3 px-auto md:gap-5 gap-3 rounded-xl
            odd:bg-istq-green even:bg-istq-orange
            "
				aria-label={detail.name}
				title={detail.name}
			>
				<img
          src={detail.icon}
          alt={detail.name}
          class="w-auto md:h-12 h-10"
        />
				<span class="md:text-xl text-xs font-medium">{detail.name}</span>
			</button>
		{/each}
	</div>
</section>

<style>
	.popup-container {
		display: flex;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 2000;
		background-color: rgba(0 0 0 / 40%);
		backdrop-filter: blur(1px);
		justify-content: center;
		padding: 40px 15px 15px;
		overflow: auto;
	}
</style>
