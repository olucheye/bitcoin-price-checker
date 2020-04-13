setTimeout(bitcoinPrices, 2000);

//bitcoinPrices();

async function bitcoinPrices(){
    try {
        let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        let res = await fetch(url);
        const data = await res.json();
        console.log(data)

        let updateTime = data.time.updated;


        for(let coin in data.bpi){
            // Loop through coin to get its properties.
            let coins = data.bpi[coin];
            for (let [key, value] of Object.entries(coins)){
                console.log(`${key}: ${value}`);

                 //create elements for the Div
                 let div = document.createElement('div');
                 let h2 = document.createElement('h2');
                 let p = document.createElement('p');
                 
                 //append elements to each other
                 document.querySelector(".row").appendChild(div);
                 div.classList.add('col-md-4');
                 div.classList.add('coinBlock');
                 //div.textContent = coin;
 
                 div.appendChild(h2);
                 h2.textContent = coins.description;
 
                 h2.appendChild(p);
                 p.textContent = coins.code + ' ' + coins.rate;
            };
        };

    } catch (error) {
        console.log(error);
        return false;
    }
};
 