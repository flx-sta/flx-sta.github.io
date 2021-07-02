<template>
  <div
    id="footer"
    class="
      footer
      w-full
      flex
      items-center
      justify-between
      p-3
      bg-gray-700
      text-white
    "
  >
    <div>&copy; {{ fullYear }} Felix Pütz</div>
    <div>
      <a href="#footer" @click="showTermsAndConditions = true"
        >Terms and Conditions</a
      >
    </div>
    <AppModal
      :open="showTermsAndConditions"
      @close="showTermsAndConditions = false"
    >
      <TermsAndConditions />
    </AppModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppModal from './AppModal.vue';
import TermsAndConditions from './TermsAndConditions.vue';

export default defineComponent({
  setup() {
    const showTermsAndConditions = ref(false);
    return {
      fullYear: new Date().getFullYear(),
      showTermsAndConditions,
    };
  },
  components: { AppModal, TermsAndConditions },
});
</script>
