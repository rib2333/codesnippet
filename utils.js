export function isArray(value) {
    return Array.isArray(value);
}
//驼峰转换为横线
export function convertCamelToKebab(str: string) {
	return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    
}
