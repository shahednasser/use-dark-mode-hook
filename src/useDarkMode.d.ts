interface Options {
    initialValue?: boolean;
    darkModeClass?: string;
    lightModeClass?: string;
    element?: string;
}
declare module 'use-dark-mode' {
    export default function useDarkMode(options: Options): [boolean, Function]
}