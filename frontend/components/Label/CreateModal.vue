<template>
  <BaseModal v-model="modal">
    <template #title> Create Label </template>
    <form @submit.prevent="create()">
      <FormTextField
        ref="locationNameRef"
        v-model="form.name"
        :trigger-focus="focused"
        :autofocus="true"
        label="Label Name"
      />
      <FormTextArea v-model="form.description" label="Label Description" />
      <div class="modal-action">
        <div class="flex justify-center">
          <BaseButton class="rounded-r-none" :loading="loading" type="submit"> Create </BaseButton>
          <div class="dropdown dropdown-top">
            <label tabindex="0" class="btn rounded-l-none rounded-r-xl">
              <Icon class="h-5 w-5" name="mdi-chevron-down" />
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 right-0">
              <li>
                <button type="button" @click="create(false)">Create and Add Another</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
    <p class="text-sm text-center mt-4">
      use <kbd class="kbd kbd-xs">Shift</kbd> + <kbd class="kbd kbd-xs"> Enter </kbd> to create and add another
    </p>
  </BaseModal>
</template>

<script setup lang="ts">
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
  });

  const modal = useVModel(props, "modelValue");
  const loading = ref(false);
  const focused = ref(false);
  const form = reactive({
    name: "",
    description: "",
    color: "", // Future!
  });

  function reset() {
    form.name = "";
    form.description = "";
    form.color = "";
    focused.value = false;
    loading.value = false;
  }

  whenever(
    () => modal.value,
    () => {
      focused.value = true;
    }
  );

  const api = useUserApi();
  const toast = useNotifier();

  const { shift } = useMagicKeys();

  async function create(close = true) {
    if (shift.value) {
      close = false;
    }

    const { error, data } = await api.labels.create(form);
    if (error) {
      toast.error("Couldn't create label");
      loading.value = false;
      return;
    }

    toast.success("Label created");
    reset();

    if (close) {
      modal.value = false;
      navigateTo(`/label/${data.id}`);
    }
  }
</script>
