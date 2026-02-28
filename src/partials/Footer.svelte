<script lang="ts">
  import { Icon } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiDevicePhoneLine, RiLogosFacebookCircleLine, RiLogosInstagramLine, RiLogosWhatsappLine, RiMapMapPinRangeLine } from "svelte-icons-pack/ri";

  const year: number = new Date().getFullYear();
</script>

<footer class="bg-istq text-istq-white flex flex-col pt-14 pb-8 px-6">
  <div class="container max-w-6xl mx-auto flex flex-col gap-5">
    <div class="w-full h-fit md:grid md:grid-cols-[3fr_1fr_2fr] flex flex-col gap-4">
      <div class="flex flex-col gap-4 items-start">
        <div class="flex flex-row gap-2 items-center">
          <img
            src="/icons/logo.png"
            alt="Pondok Yatim Istiqomah Logo"
            class="h-24 w-auto object-contain"
          />
          <div class="flex flex-col gap-0">
            <span class="text-xs shrink-0 whitespace-nowrap">Yayasan Pondok Yatim</span>
            <span class="text-xl font-bold shrink-0 whitespace-nowrap">ISTIQOMAH</span>
          </div>
        </div>
        <p>
          Blablablabla isi disini
        </p>
        <div class="flex flex-row gap-1.5 items-center" role="navigation">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/qurancenter"
            target="_blank"
            class="flex justify-center items-center p-2 border border-istq-green text-istq-green bg-istq-green/10 rounded-full"
          >
            <Icon
              src={RiLogosInstagramLine}
              size="22"
            />
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/qurancenter"
            target="_blank"
            class="flex justify-center items-center p-2 border border-istq-green text-istq-green bg-istq-green/10 rounded-full"
          >
            <Icon
              src={RiLogosFacebookCircleLine}
              size="22"
            />
          </a>
          <a
            aria-label="WhatsApp"
            href="https://wa.me/6281285960701"
            target="_blank"
            class="flex justify-center items-center p-2 border border-istq-green text-istq-green bg-istq-green/10 rounded-full"
          >
            <Icon
              src={RiLogosWhatsappLine}
              size="22"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-qc-white font-semibold">Navigation</h4>
        <nav class="flex flex-col gap-1">
          <a href="/profil" class="hover:underline hover:text-istq-green">Profil</a>
          <a href="/program" class="hover:underline hover:text-istq-green">Program</a>
          <a href="/#layanan" class="hover:underline hover:text-istq-green">Layanan</a>
          <a href="/posts" class="hover:underline hover:text-istq-green">Artikel</a>
        </nav>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <h4 class="text-lg text-qc-white font-semibold">Contact</h4>
        <div class="flex flex-col gap-1">
          <a href="https://maps.app.goo.gl/D5JcyKYwyHBXSkWc6" target="_blank"
          class="flex flex-row gap-2 items-start hover:underline hover:text-istq-green">
            <Icon size="20" className="text-istq-green fill-istq-green shrink-0" src={RiMapMapPinRangeLine} />
            <p class="grow">Jl. Cipinang Cempedak 1.no.14 Polonia Jakarta Timur</p>
          </a>
          <a href="mailto:info@pondokyatimistiqomah.id" target="_blank"
          class="flex flex-row gap-2 items-center hover:underline hover:text-istq-green">
            <Icon size="20" className="text-istq-green fill-istq-green shrink-0" src={RiBusinessMailLine} />
            <p class="grow">info@pondokyatimistiqomah.id</p>
          </a>
          <a href="tel:+6282146021999" class="flex flex-row gap-2 items-center hover:underline hover:text-istq-green">
            <Icon size="20" className="text-istq-green fill-istq-green shrink-0" src={RiDevicePhoneLine} />
            <p class="grow">(+62) 812-8596-0701</p>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full border-t border-qc-white pt-8">
      <div class="text-qc-white flex flex-row items-center justify-center">
        <p class="">&copy; {year} Yayasan Pondok Yatim Istiqomah</p>
      </div>
    </div>
  </div>
</footer>