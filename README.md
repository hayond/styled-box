# styled-box

The true css in js, make css as props. lightweight and easy use.

## Packages

- **@styled-box/styled** the core module, highly inspired by [emotion](https://github.com/emotion-js/emotion) and [styled-system](https://github.com/styled-system/styled-system).
- **@styled-box/react-primitives** a copy from [react-native-web](https://github.com/necolas/react-native-web), get the base components `StyleSheet`, `View`, `Text`, `Image`
- **@styled-box/box** combine `styled`, `react-primitives`, a generic component named `Box` to support most styles through props.

## Examples

the total code can check this [index.html](https://github.com/hayond/styled-box/blob/main/index.html), and need run a simple server.

### createStyledBox

#### source

```javascript
import { createStyledBox } from "https://esm.sh/@styled-box/styled";

const Div = createStyledBox("div");
const App = (props) =>
  React.createElement(Div, {
    marginTop: 30,
    fontSize: 40,
    children: "Hello World!",
  });
```

#### result

```html
<div style="margin-top: 30px; font-size: 40px;">
  Hello World!
</div>
```

### Box

#### source

```javascript
import Box, { View, Text, Image } from "https://esm.sh/@styled-box/box";

const App = (props) =>
  React.createElement(Box, {
    marginTop: 30,
    children: React.createElement(Box, {
      fontSize: 40,
      children: "Hello World!",
    }),
  });
```

#### result
automatic generate className, it's benefit by `react-native-web`

```html
<div class="css-1dbjc4n r-6ity3w">
  <div dir="auto" class="css-901oao r-xb2eav">Hello World!</div>
</div>
```

## Supported Styled Props
reuse modules of `styled-system`, so same with its api, can check the links.
- [Space](https://styled-system.com/api#space)            &emsp;&emsp;&emsp;&emsp;&emsp; `margin`, `marginTop`, `marginRight` ...  
- [Color](https://styled-system.com/api#color)            &emsp;&emsp;&emsp;&emsp;&emsp; `color`, `bg`, `backgroundColor`
- [Typography](https://styled-system.com/api#typography)  &emsp;&emsp; `fontSize`, `textAlign`, `lineHeight` ...
- [Layout](https://styled-system.com/api#layout)          &emsp;&emsp;&emsp;&emsp;&emsp; `width`, `height`, `overflow` `display` ...
- [Flexbox](https://styled-system.com/api#flexbox)        &emsp;&emsp;&emsp;&emsp; `alignItems`, `alignContent`, `flexDirection` ...
- [Background](https://styled-system.com/api#background)  &emsp;&emsp; `backgroundImage`, `backgroundSize` ...
- [Border](https://styled-system.com/api#border)          &emsp;&emsp;&emsp;&emsp;&emsp; `border`, `borderTop`, `borderRight` ...
- [Position](https://styled-system.com/api#position)      &emsp;&emsp;&emsp;&emsp; `position`, `zIndex`, `top`, `right` ...
- [Shadow](https://styled-system.com/api#shadow)          &emsp;&emsp;&emsp;&emsp; `textShadow`, `boxShadow`
