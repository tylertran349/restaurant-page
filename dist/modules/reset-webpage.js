export function resetWebpage() {
    const content = document.querySelector('#content');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
        console.log("Element removed");
    }
}