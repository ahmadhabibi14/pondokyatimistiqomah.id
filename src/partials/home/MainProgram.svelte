<script lang="ts">
  const mainPrograms: {title: string; desc: string}[] = [
    {
      title: "Pengasuhan dan Pemberdayaan Yatim Dhuafa",
      desc: `Program utama Yayasan Pondok Yatim Istiqomah ini berfokus pada pengasuhan terpadu berbasis asrama bagi anak-anak yatim dan dhuafa, yang mencakup pemenuhan kebutuhan dasar, pendidikan formal dan keagamaan, pembinaan akhlak, serta pendampingan karakter. Melalui pola pembinaan yang berkesinambungan, yayasan berkomitmen membentuk pribadi yang mandiri, berkepribadian islami, serta memiliki kesiapan mental dan keterampilan untuk menghadapi masa depan secara lebih baik.`
    },
    {
      title: "Mencetak Penghafal Al-Qur’an",
      desc: `Yayasan Pondok Yatim Istiqomah menyelenggarakan program tahfizh Al-Qur’an secara terstruktur dan intensif sebagai upaya mencetak generasi Qur’ani yang tidak hanya hafal, tetapi juga memahami dan mengamalkan nilai-nilai Al-Qur’an dalam kehidupan sehari-hari. Program ini dilaksanakan melalui pembinaan rutin, setoran hafalan, muraja’ah, serta pembentukan karakter disiplin dan istiqomah dalam menjaga hafalan.`
    },
    {
      title: "Santunan Masyarakat Dhuafa",
      desc: `Sebagai bentuk kepedulian sosial, Yayasan Pondok Yatim Istiqomah juga menjalankan program santunan bagi masyarakat dhuafa melalui bantuan kebutuhan pokok, pendidikan, serta bantuan sosial lainnya secara berkala maupun insidental. Program ini bertujuan meringankan beban ekonomi masyarakat kurang mampu serta memperkuat semangat kebersamaan dan kepedulian antar sesama.`
    },
    {
      title: "Wakaf Tunai Pembebasan Lahan",
      desc: `Program Wakaf Tunai Pembebasan Lahan merupakan ikhtiar yayasan dalam menyediakan sarana ibadah dan pendidikan yang memadai melalui pengadaan serta pembebasan lahan untuk pembangunan masjid dan asrama santri. Partisipasi wakaf dari masyarakat menjadi investasi amal jariyah jangka panjang yang manfaatnya akan terus dirasakan oleh generasi penerus dalam kegiatan pendidikan dan dakwah.`
    }
  ]
</script>

<div class="bg-istq-orange">
  <section
    class="container max-w-6xl mx-auto my-10 md:scroll-mt-28 scroll-mt-20 px-4 md:px-0"
    id="main-program"
  >
    <div class="flex flex-col gap-6">
      <!-- <h2 class="md:text-4xl text-3xl font-bold text-center">Program Utama</h2> -->
      <div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-5 w-full h-auto">
      {#each mainPrograms as pg, idx}
        <div
          class="{idx == 0 || idx == mainPrograms.length - 1
            ? 'md:bg-istq-orange-darker!'
            : 'md:bg-istq-green-darker!'} text-white
          odd:bg-istq-orange-darker even:bg-istq-green-darker even:text-qc-darker
          rounded-lg flex flex-col gap-3 p-5 h-auto"
        >
          <div class="flex flex-row items-center gap-3">
            <h3 class="text-2xl font-bold" >{pg.title}</h3>
          </div>
          <p class="text-sm">{pg.desc}</p>
        </div>
      {/each}
    </div>
    </div>
  </section>
</div>