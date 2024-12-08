# CSS (--var) to (.class)

Generate `classes` from css `Variables`! <br>
* Client Side Classes Generation
* Reduce css File Size <br>

no need to type `class`, `background-color` again- -and- -again- -and- -again- -and- -again!

## Usage
`css`
```css
.background-color
{
    --red: red;
    --blue: #4169E1;
}
```
`html`
```html
<div class="red">  I am red  </div>
<div class="blue"> I am blue </div>
```
`css`
```css
.border-radius
{
    --rounded: 100px;
    --curved: 5px;
}
```
`html`
```html
<div class="rounded red"> I am rounded red </div>
<div class="curved blue"> I am curved blue </div>
```


## How it works?

### Structure

```css
.[property]
{
    --[class_name]: [value];
}
```
### Conversion
#### from
```css
.background-color
{
    --myred: rgb(255, 0, 0);
}
```
#### to
```css
:root
{
    --myred: rgb(255, 0 0);
}

.myred
{
    background-color : var(--myred);
}
```

## Getting Started

Add `color` anywhere inside `<link .. color .. >` <br>
```html
<link color rel="stylesheet" href="myColors.css">
```

Download and add `javascript` anywhere after `<link>` in html <br>
```html
<script src="css--var2class.js"></script>
```

