
setTimeout(bitcoinPrices, 1000);

//bitcoinPrices();

async function bitcoinPrices(){
    try {
        let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        let res = await fetch(url);
        const data = await res.json(); // passing out response in Json

        let updateTime = data.time.updated; // TIme at which the data was retrieved

        // Also add, disclaimer at the bottom of the page.

        // Style the Div's to make more space & stylish.

        //dynamic array that creates DOM content
        for(let currency in data.bpi){
            // Loop through each coin & pass out its properties.
            let props = data.bpi[currency];

            //create DOM elements
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            
            //append elements to each other
            document.querySelector(".row").appendChild(div);
            div.classList.add('col-12');
            div.classList.add('coinBlock');
            div.textContent = currency;
            
            //updated time
            document.querySelector('#time').textContent = updateTime;

            div.appendChild(h2);
            //h2.textContent = props.description;

            h2.appendChild(p);
            p.textContent = props.code + ' ' + props.rate;
        };
    } catch (error) {
        docuement.querySelector('div').innerHtml = "<strong>An error occured, Please try again later!<</strong>"
        return false;
    }
};
 

