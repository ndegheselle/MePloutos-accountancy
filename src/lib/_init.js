export function initCustomCSS(categories)
{
  if (!categories) return;
  
  let styles = "";
  for(const category of categories)
  {
    styles += `.category-${category.id} {stroke: ${category.color};}`;
  }

  document.getElementById("generatedStyles").innerHTML = styles;
}