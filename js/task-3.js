function getElementWidth(content, padding, border) {
    
    const contentToNumber = Number.parseFloat(content.replace(`,`, `.`));
    const paddingToNumber = Number.parseFloat(padding.replace(`,`, `.`));
    const borderToNumber = Number.parseFloat(border.replace(`,`, `.`));
    
    return contentToNumber + 2 * paddingToNumber + 2 * borderToNumber;
 
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

