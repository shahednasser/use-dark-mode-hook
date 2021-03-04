# useDarkMode Hook

![Small!](https://img.shields.io/bundlephobia/min/use-dark-mode-hook)

useDarkMode custom hook for react. This only provides the functionality of dark mode without the UI. If you need the UI as well, you can check out a library like [react-dark-mode-toggle](https://www.npmjs.com/package/react-dark-mode-toggle)

By default, `useDarkMode` will apply either `dark` or `light` class to the `body` of the document based on the choice of the user.

## Installation

in your terminal:

```
npm i use-dark-mode-hook
```

## Usage

```js
import useDarkMode from 'use-dark-mode-hook'

function myComponent (props) {
    const [isDarkMode, toggleDarkMode] = useDarkMode()

    //do something with it
}
```

**isDarkMode**: boolean state for whether dark mode is chosen or not
**toggleDarkMode**: function that takes boolean value for whether dark mode should be enabled or not. Use this to change the user's preference (dark or light mode).

## Options

You can pass to `useDarkMode` the following options:

| Name          | Type   | Description                                                    | Default |
|---------------|--------|----------------------------------------------------------------|---------|
|initialValue   |boolean |should it initially be dark                                     |false    |
|darkModeClass  |string  |the class that should be given when dark mode                   |dark     |
|lightModeClass |string  |the class that should be given when light mode                  |light    |
|element        |string  |the selector of the element that the class should be applied to |body     |

---

## License

[MIT](./LICENSE)