<script lang="ts">
	const logoPhilosophy: {
		title: string;
		description: string[];
	}[] = [
		{
			title: 'Bentuk Bintang Delapan',
			description: [
				`Bentuk dasar logo menyerupai bintang delapan yang melambangkan cahaya, petunjuk, dan kejayaan peradaban Islam. Bintang ini juga merepresentasikan keseimbangan antara kehidupan dunia dan akhirat, serta arah yang jelas dalam menjalankan visi pendidikan dan dakwah.`,
				`Lapisan bertingkat pada bentuk bintang menggambarkan tahapan pembinaan yang terstruktur mulai dari dasar hingga pembentukan karakter yang matang serta perlindungan dan naungan bagi anak yatim dan dhuafa.`
			]
		},
		{
			title: 'Warna Emas',
			description: [
				`Warna emas pada bagian terluar melambangkan kemuliaan, harapan, dan nilai yang berharga. Ini mencerminkan bahwa setiap anak yatim dan dhuafa memiliki potensi mulia yang harus dijaga, dibimbing, dan dimuliakan.`,
				`Emas juga melambangkan cita-cita besar yayasan dalam membangun generasi Qur’ani yang unggul dan bermartabat.`
			]
		},
		{
			title: 'Warna Biru dan Coklat Tua',
			description: [
				`Warna biru melambangkan ketenangan, kepercayaan, dan kedalaman ilmu. Ini menggambarkan suasana pendidikan yang damai serta komitmen yayasan dalam membina dengan penuh kesabaran dan keikhlasan.`,
				`Warna coklat tua melambangkan keteguhan, kestabilan, dan kekuatan fondasi. Hal ini sejalan dengan nama Istiqomah, yaitu konsisten dan teguh dalam kebaikan.`
			]
		},
		{
			title: 'Lingkaran Hijau',
			description: [
				`Lingkaran hijau di bagian tengah melambangkan perlindungan, kasih sayang, serta kesinambungan pembinaan. Warna hijau identik dengan kesuburan, pertumbuhan, dan nilai-nilai Islam, yang menunjukkan bahwa yayasan menjadi tempat tumbuhnya generasi yang beriman dan berakhlak.`,
				`Bentuk lingkaran juga melambangkan kebersamaan dan persatuan dalam membangun umat.`
			]
		},
		{
			title: 'Huruf “I” dan Simbol Bulan Bintang',
			description: [
				`Huruf “I” di tengah merupakan representasi dari Istiqomah, yang menjadi identitas dan semangat utama yayasan: teguh dalam iman, konsisten dalam kebaikan, dan berkelanjutan dalam dakwah.`,
				`Simbol bulan dan bintang di atasnya melambangkan cahaya Islam sebagai pedoman hidup. Ini menegaskan bahwa seluruh program dan aktivitas Yayasan Pondok Yatim Istiqomah berlandaskan Al-Qur’an dan Sunnah.`
			]
		}
	];
</script>

<section class="my-10 md:scroll-mt-28 scroll-mt-20" id="logo">
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl font-bold">Makna dan Nilai Logo</h2>
		<div class="text-lg flex flex-col gap-3">
			<div class="mb-7 mt-4">
				<img src="/icons/logo.png" alt="Filosofi Logo" class="w-60 h-auto" />
			</div>
			<div class="flex flex-col gap-3">
				{#each logoPhilosophy as lp, idx}
					<div class="flex flex-col gap-3">
						<h3 class="text-xl font-bold">{idx + 1}. {lp.title}</h3>
						<div class="">
							{#each lp.description as desc}
								<p class="my-2">{desc}</p>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<div class="flex flex-col gap-3">
				<h3 class="text-xl font-bold">Kesimpulan Makna Logo</h3>
				<p>
					Logo Yayasan Pondok Yatim Istiqomah melambangkan identitas lembaga sebagai pusat
					pendidikan, pengasuhan, dan pembinaan generasi Qur’ani yang berlandaskan iman dan
					keistiqomahan. Setiap unsur di dalamnya menggambarkan perlindungan, kasih sayang, serta
					proses pembinaan yang terarah dalam mencetak anak yatim dan dhuafa menjadi pribadi yang
					berakhlak mulia, mandiri, dan bermanfaat bagi umat.
				</p>
				<p>
					Perpaduan bentuk, simbol, dan warna mencerminkan cahaya ilmu Al-Qur’an sebagai pedoman
					hidup, keteguhan dalam kebaikan, serta harapan akan masa depan yang lebih baik. Secara
					keseluruhan, logo ini menjadi simbol doa, perjuangan, dan komitmen Yayasan Pondok Yatim
					Istiqomah untuk terus istiqomah dalam dakwah, pendidikan, dan pelayanan sosial demi meraih
					ridha Allah Subhanahu wa Ta’ala.
				</p>
			</div>
		</div>
	</div>
</section>
