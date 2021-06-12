let moedas = ['BTC', 'ETH', 'XRP'];
let cardsMoeda = document.querySelectorAll('.card-moeda')

moedas.forEach((el, index) => {
  fetch(`https://www.mercadobitcoin.net/api/${el}/ticker/`).then(res => {
    return res.json();
  }).then(json => {
    let nomeDoCard = "";

    if (index === 0) {
      nomeDoCard = "Bitcoin"
    } else if (index === 1) {
      nomeDoCard = "Etherium"
    } else {
      nomeDoCard = "XRP"
    }

    cardsMoeda[index].innerHTML = `
    <h2>${nomeDoCard}</h2>
    <h3>Maior preço:</h3>
    <span>${Number(json.ticker.high).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
    <h3>Menor preço:</h3>
    <span>${Number(json.ticker.low).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
    <h3>Maior preço de oferta:</h3>
    <span>${Number(json.ticker.buy).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
    `
  })
})

