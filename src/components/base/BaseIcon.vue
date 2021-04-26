<template>
  <component :is="iconComponent" :class="size" />
</template>

<script>
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ClipboardIcon,
  PencilAltIcon,
  TrashIcon,
  XIcon,
  CheckCircleIcon,
  MenuIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  CogIcon,
  MoonIcon,
  LogoutIcon,
  UserCircleIcon,
  SunIcon,
  RefreshIcon,
  UserAddIcon,
  BadgeCheckIcon,
  LockClosedIcon,
  SearchIcon
} from "@heroicons/vue/outline";

const icons = {
  "search": SearchIcon,
  "menu": MenuIcon,
  "lock-closed": LockClosedIcon,
  "badge-check": BadgeCheckIcon,
  "user-add": UserAddIcon,
  "chevron-right": ChevronRightIcon,
  "chevron-left": ChevronLeftIcon,
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
