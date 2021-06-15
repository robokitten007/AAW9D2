
const partyHeader = document.getElementById('party');

export const warmUp = (string, htmlElement) => {
    // let children = Array.from(htmlElement.children);
    // children.forEach(child =>{child.remove()});
    let p=document.createElement('p');
    p.innerHTML = string;
    htmlElement.appendChild(p);
};
window.warmUp = warmUp;
// htmlGenerator('Party Time.', partyHeader);
// htmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader);