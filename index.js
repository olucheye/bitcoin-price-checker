setTimeout(bitcoinPrices, 1000);

//bitcoinPrices();

async function bitcoinPrices(){
    try {
        let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        let res = await fetch(url);
        const data = await res.json(); // passing out response in Json

        let updateTime = data.time.updated; 

        for(let coin in data.bpi){
            // Loop through each coin & pass out its properties.
            let props = data.bpi[coin];

            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            
            //append elements to each other
            document.querySelector(".row").appendChild(div);
            div.classList.add('col-lg-4');
            div.classList.add('coinBlock');
            div.textContent = coin;

            h2.textContent = props.description;
            div.appendChild(h2);
            

            h2.appendChild(p);
            p.textContent = props.code + ' ' + props.rate;
        };
    } catch (error) {
        console.log(error);
        return false;
    }
};
 