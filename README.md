# CSS (--var) to (.class)

## Getting Started

Add `color` anywhere inside `<link .. color .. >` <br>
```html
<link color rel="stylesheet" href="mycolors.css">
```

Download and add `javascript` anywhere after `<link>` in html <br>
```html
<script src="css--var2class.js"></script>
```

## Usage

`color.css`
```css
:root
{
    --red: red;
    --green: green;
    --blue: #4169E1;
    --yellow: rgb(255, 255, 0);
}
```

`downloaded and added javascript` 

`index.html`
```html
<!-- GETTING STARTED -->
<link color rel="stylesheet" href="color.css">
<script src="css--var2class.js"></script>

<!-- APPLY -->
<div class="red">     I am red     </div>
<div class="green">   I am green   </div>
<div class="blue">    I am blue    </div>
<div class="yellow">  I am yellow  </div>

```
