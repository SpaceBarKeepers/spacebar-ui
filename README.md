# spacebar-ui React component library

Created and maintained by [Space Bar Keepers](https://spacebarkeepers.com).

## Table of Contents

- [Installation](#installation)
- [Available Components](#available-components)
    - [Avatar](#avatar)
    - [Snackbar](#snackbar)
    - [ToggleSwitch](#toggleswitch)


## Installation
`npm i spacebar-ui`

## Available Components
### Avatar
#### Import component:
`import { Avatar } from "spacebar-ui"`
#### Attributes:
##### backgroundColor [optional]
Background color of Avatar in case of images with transparent background or in case od non-image child.

type: string\
default value: "#ccc"\
valid values:
- 3-char hex ("#fff")
- 6-char hex ("#ffffff")
- rgb ("rgb(255, 255, 255)")
- rgba ("rgba(255, 255, 255, 1)")
- hsl ("hsl(0, 100%, 100%)")
- hsla ("hsla(100, 100%, 50%, 1)")
##### size [optional]
Size of the Avatar.\
type: number or string\
default value: 40\
valid values:
- number (50)
- string ("50px", "10vh", "2rem", etc.)
##### variant [optional]
Variant of the Avatar.\
type: string\
default value: none\
valid values:
- "rounded" (square with rounded corners)
- "circle" (circular shape)

#### Example:
```
import React from "react";
import { Avatar } from "spacebar-ui";

export default function App() {
  return (
    <div>
      <Avatar 
        variant="rounded" 
        backgroundColor="#f00"
        size={60}
      >
        <img 
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/1024px-Circle-icons-image.svg.png"} 
          alt={"user avatar"} 
        />
      </Avatar>
    </div>
  );
}
```
Example available at [CodeSandbox](https://codesandbox.io/s/avatar-s2ist?file=/src/App.js).

---

### Snackbar
#### Import component:
`import { Snackbar } from "spacebar-ui"`
#### Attributes:
##### snackbarOpen [required]
State with boolean value. Determines visibility of Snackbar.\
type: boolean
##### setSnackbarOpen [required]
Function for changing *snackbarOpen* state.\
type: function
##### snackbarMessage [required]
String with Snackbar message.\
type: string
##### snackbarVariant [optional]
Predefined color variations. If specified *color* and *backgroundColor* attributes become ineffective. \
type: string\
valid values:
- "success" (green background, white text)
- "error" (red background, white text)
##### backgroundColor [optional]
Background color of Snackbar block. Will not be considered if any *snackbarVariant* is specified.

type: string\
default value: "#fff"\
valid values:
- 3-char hex ("#fff")
- 6-char hex ("#ffffff")
- rgb ("rgb(255, 255, 255)")
- rgba ("rgba(255, 255, 255, 1)")
- hsl ("hsl(0, 100%, 100%)")
- hsla ("hsla(100, 100%, 50%, 1)")

##### color [optional]
Text color inside Snackbar block. Will not be considered if any *snackbarVariant* is specified.

type: string\
default value: "#000"\
valid values:
- 3-char hex ("#fff")
- 6-char hex ("#ffffff")
- rgb ("rgb(255, 255, 255)")
- rgba ("rgba(255, 255, 255, 1)")
- hsl ("hsl(0, 100%, 100%)")
- hsla ("hsla(100, 100%, 50%, 1)")

##### timeout [optional]
Rewrites time after which Snackbar closes. Defined in milliseconds.\
type: number\
default value: 2000

#### Example:
```
import React, { useState } from "react";
import { Snackbar } from "spacebar-ui";

export default function App() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenSnackbar = () => {
    setSnackbarOpen(true);
  }

  return (
    <div>
      <button onClick={handleOpenSnackbar}>Open Snackbar</button>
      <Snackbar 
        snackbarOpen={snackbarOpen} 
        setSnackbarOpen={setCustomSnackbarOpen} 
        snackbarMessage={"This is snackbar message."} 
        timeout={5000} 
        backgroundColor={"purple"} 
        color={"#fff"} 
      />
    </div>
  );
}
```
Example available at [CodeSandbox](https://codesandbox.io/s/snackbar-d1p74?file=/src/App.js).

---

### ToggleSwitch
#### Import component:
`import { ToggleSwitch } from "spacebar-ui"`
#### Attributes:
##### checked [required]
State of ToggleSwitch.

type: boolean\
default value: false\

##### setChecked [required]
Function to set state of ToggleSwitch

type: function\

##### backgroundChecked [optional]
Background color of ToggleSwitch block when checked.

type: string\
default value: "#4fbe79"\
valid values:
- 3-char hex ("#fff")
- 6-char hex ("#ffffff")
- rgb ("rgb(255, 255, 255)")
- rgba ("rgba(255, 255, 255, 1)")
- hsl ("hsl(0, 100%, 100%)")
- hsla ("hsla(100, 100%, 50%, 1)")

##### backgroundUnchecked [optional]
Background color of ToggleSwitch block when unchecked.

type: string\
default value: "#bebebe"\
valid values:
- 3-char hex ("#fff")
- 6-char hex ("#ffffff")
- rgb ("rgb(255, 255, 255)")
- rgba ("rgba(255, 255, 255, 1)")
- hsl ("hsl(0, 100%, 100%)")
- hsla ("hsla(100, 100%, 50%, 1)")

##### switchColor [optional]
Background color of the toggle circle.

type: string\
default value: "#fff"\
valid values:
- 3-char hex ("#fff")
- 6-char hex ("#ffffff")
- rgb ("rgb(255, 255, 255)")
- rgba ("rgba(255, 255, 255, 1)")
- hsl ("hsl(0, 100%, 100%)")
- hsla ("hsla(100, 100%, 50%, 1)")
- 
##### switchImage [optional]
Url of image/icon to put into toggle circle.

type: string\
default value: none\

#### Example:
```
import React, { useState } from "react";
import {ToggleSwitch} from "spacebar-ui"

export default function App() {
        const [checked, setChecked] = useState(false)

  return (
    <ToggleSwitch 
    backgroundUnchecked={"#00f"} 
    backgroundChecked={"#f00"}
    checked={checked}
    setChecked={setChecked}
    switchColor={"#ff0"}
    switchImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/1024px-Circle-icons-image.svg.png"}
    />
  );
}
```
Example available at [CodeSandbox](https://codesandbox.io/s/toggleswitch-8k0in?file=/src/App.js).

## Recognition
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
