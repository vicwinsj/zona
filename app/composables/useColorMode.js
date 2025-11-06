import { ref, watch, onMounted } from "vue";

const colorMode = ref("dark");

export function useColorMode() {
  onMounted(() => {
    const saved = localStorage.getItem("color-mode");
    if (saved) {
      colorMode.value = saved;
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light");
      colorMode.value = prefersLight ? "light" : "dark";
    }
    applyColorMode();
  });

  const applyColorMode = () => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(colorMode.value);
  };

  watch(colorMode, (newMode) => {
    localStorage.setItem("color-mode", newMode);
    applyColorMode();
  });

  const toggleColorMode = () => {
    colorMode.value = colorMode.value === "light" ? "dark" : "light";
  };

  return { colorMode, toggleColorMode };
}
