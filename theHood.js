let btnRandom = document.querySelector('button')
let result = document.querySelector('#result')
let links = ['https://goo.gl/maps/abqXrvG6Eu1BgZCDA', 'https://goo.gl/maps/FDy8ZoRmce7NwUYg8', 'https://goo.gl/maps/EsSSTHp5BkHtgTJVA', 'https://goo.gl/maps/PYZ3Cg7s5TmihGgh6', 'https://goo.gl/maps/aBj1HtHY49wWXxq69', 'https://goo.gl/maps/rAMor2zt88timyzo7', 'https://goo.gl/maps/mQJtHCNGrQMDkwoFA', 'https://goo.gl/maps/L5FCX2naHsg3sQzQ8', 'https://goo.gl/maps/D9uoid5kBQYnZuwx6', 'https://goo.gl/maps/52YVEkQJQAKtpcho9', 'https://goo.gl/maps/rNCcwoBvBnqhnzdd7', 'https://goo.gl/maps/VxXREFEnMQLt9Q7aA']



function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}


btnRandom.addEventListener('mouseover', () => {
    let index = getRandomNumber(0, links.length-1);
    const a = document.createElement("a")
    a.textContent = links[index];
    a.href = links[index];
    result.appendChild(a);   
})