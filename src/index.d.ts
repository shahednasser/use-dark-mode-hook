interface Options {
    initialValue?: boolean;
    darkModeClass?: string;
    lightModeClass?: string;
    element?: string;
}

interface TogglerOptions {
    isDarkMode: boolean;
    toggleDarkMode: (on?: boolean) => void;
    buttonClassName?: string;
}

declare module 'use-dark-mode-hook' {
    export default function useDarkMode(options: Options): [boolean, (on?: boolean) => void]
    export function DarkModeToggler(options: TogglerOptions): JSX.Element
}