<script lang="ts">
  const strukturOrganisasi: {
    role: string;
    name: string;
  }[] = [
    {
      role: 'Ketua',
      name: 'M. Sholahudin Suprapto'
    },
    {
      role: 'Sekretaris',
      name: 'Rajali Ritonga'
    },
    {
      role: 'Bendahara',
      name: 'Nefsi Harlinda'
    },
    {
      role: 'Divisi Pendidikan',
      name: 'Abdul Muiz'
    },
    {
      role: 'Divisi Logistik',
      name: 'Saiful Alam'
    }
  ]
</script>

<section class="my-10 md:scroll-mt-28 scroll-mt-20 flex flex-col gap-7" id="struktur">
	<div class="flex flex-col gap-6">
		<h2 class="text-4xl font-bold">Struktur Organisasi</h2>
		<div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="p-1.5 min-w-5/12 inline-block align-middle border rounded-md">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-neutral-200">
            <tbody id="tbody" class="divide-y divide-neutral-200 text-sm">
              {#each strukturOrganisasi as st}
                <tr>
                  <th>{st.role}</th>
                  <td colspan="4" class="text-center text-neutral-600 py-2">
                    {st.name}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
	</div>
</section>
