<template>
  <component :is="iconComponent" :class="size" />
</template>

<script>
import {
  ClipboardIcon,
  PencilAltIcon,
  TrashIcon,
  XIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  CogIcon,
  MoonIcon,
  LogoutIcon,
  UserCircleIcon,
  SunIcon,
  RefreshIcon,
} from "@heroicons/vue/outline";

const icons = {
  clipboard: ClipboardIcon,
  "pencil-alt": PencilAltIcon,
  trash: TrashIcon,
  refresh: RefreshIcon,
  x: XIcon,
  sun: SunIcon,
  "check-circle": CheckCircleIcon,
  "exclamation-circle": ExclamationCircleIcon,
  "x-circle": XCircleIcon,
  "information-circle": InformationCircleIcon,
  cog: CogIcon,
  moon: MoonIcon,
  logout: LogoutIcon,
  "user-circle": UserCircleIcon,
};

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
    size: {
      type: String,
      default: "h-6 w-6",
    },
  },
  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
