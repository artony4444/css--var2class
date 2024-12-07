// generate (.class) from (--var)

let app_name = "color"      // identifier
let property = "applyTo"    // "background-color" (default)


// ------------------------------------------------------------
//
//    Copyright © Artony4444 2024
//    Repository: https://github.com/artony4444/css--var2class/
//
// ------------------------------------------------------------


document.querySelectorAll(`link[${app_name}]`).forEach(l => generateClasses(l))

function generateClasses(link)
{
    let param = link.getAttribute(property) || "background-color";
    let sheet = null;
    for(let s of document.styleSheets) { if(s.href == link.href) { sheet = s; break; } }
    let root = null;
    for(let r of sheet.cssRules || sheet.rules || []) { if(r.selectorText == ":root") { root = r; break; } }
    for(let c of root.style || []) { sheet.insertRule(`.${c.slice(2)} { ${param} : var(${c}) }`, sheet.cssRules.length); }
}
