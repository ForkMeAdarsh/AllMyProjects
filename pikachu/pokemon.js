const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

let i = 0;
while (i < 151) 
{
    const div = document.createElement('div');
    div.classList.add('pokemon');
    const span = document.createElement('span');
    span.innerText = `#${i+1}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i+1}.png`;
    div.append(newImg);
    div.append(span);
    container.append(div);
    i++;
}