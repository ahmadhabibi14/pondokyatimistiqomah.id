<script lang="ts">
	import { Icon } from "svelte-icons-pack";
	import { RiCommunicationChatSmile2Fill } from "svelte-icons-pack/ri";
</script>

<section class="container max-w-6xl mx-auto mt-10 md:mt-0" id="tentang">
  <div class="flex flex-col gap-5 px-5 md:px-0">
    <div class="text-sm bg-jhc-light border border-jhc text-jhc font-medium flex flex-row items-center gap-2 w-fit rounded-full py-1.5 px-4">
      <Icon
        src={RiCommunicationChatSmile2Fill}
        size={20}
        className="fill-jhc text-jhc"
      />
      <span>Tentang Kami</span>
    </div>
    <div class="flex flex-col md:grid md:grid-cols-2 md:gap-10 gap-5">
      <div class="flex flex-col gap-6">
        <h2 class="text-4xl font-bold text-jhc">Mitra Strategis <br /> Legalisasi Halal Anda</h2>
        <div class="flex flex-col gap-4">
          <p>JAYAKARTA HALAL CENTER (JHC) merupakan lembaga konsultan halal yang
  berfokus pada pendampingan, edukasi, dan penguatan ekosistem halal di
  Indonesia. Jayakarta Halal Center (JHC) siap membantu para Pelaku Usaha dalam
  mendapatkan sertifikat halal pada produk usaha makanan, kosmetik,
  produk kimiawi, produk rekayasa genetik dan barang gunaan
  serta usaha jasa.
  </p>
  <p>
  JHC memastikan kehalalan produk dan proses produk halal para
  Pelaku Usaha dapat terjamin dengan proses yang komprehensif melalui
  pemeriksaan oleh Lembaga Pemeriksa Halal (LPH) terpercaya untuk
  memastikan kualitas, keamanan, dan kepatuhan produk terhadap
  standar halal yang telah ditetapkan.</p>
        </div>
      </div>
      <div class="md:shadow-md rounded-xl md:p-5 md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col w-full md:h-80 gap-5 border border-gray-100">
        <div class="py-3 md:py-auto flex flex-col gap-3 justify-center items-center w-full h-auto border rounded-xl border-jhc-2 bg-jhc text-white">
          <span class="font-bold text-3xl">100+</span>
          <span>MITRA PELAKU USAHA</span>
        </div>
        <div class="py-3 md:py-auto flex flex-col gap-3 justify-center items-center w-full h-auto border rounded-xl border-jhc-orange/70 bg-jhc-orange text-white">
          <span class="font-bold text-3xl">99%</span>
          <span>TINGKAT KELULUSAN</span>
        </div>
        <div class="py-3 md:py-auto flex flex-col gap-3 justify-center items-center w-full h-auto border rounded-xl border-jhc-2 bg-jhc md:border-jhc-orange/70 md:bg-jhc-orange text-white">
          <span class="font-bold text-3xl">0</span>
          <span>REVISI MAYOR</span>
        </div>
        <div class="py-3 md:py-auto flex flex-col gap-3 justify-center items-center w-full h-auto border rounded-xl border-jhc-orange/70 bg-jhc-orange md:border-jhc-2 md:bg-jhc text-white">
          <span class="font-bold text-3xl">24/7</span>
          <span>SUPPORT TIM</span>
        </div>
      </div>
    </div>
  </div>
</section>