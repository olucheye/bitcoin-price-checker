//API endpoint
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
//let url2 = 'https://api.coindesk.com/v1/bpi/historical/close.json'

//async-await function
async function bitcoinPrices(){
    
    try {
        let res = await fetch(url);
        const data = await res.json(); // passing out response in Json
        return bitcoinData(data);
        } catch (error) {
        document.querySelector('div').innerHtml = "<strong>An error occured, Please try again later!</strong>"
        return false;
    }
};


//create DOM element
function bitcoinData(data){

    let updateTime = data.time.updated; // TIme at which the data was retrieved
    let disclaimer = data.disclaimer;

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
        div.classList.add('col-md-8');
        div.classList.add('mx-auto');
        div.classList.add('coinBlock');
        div.textContent = currency;
        
        //updated time
        document.querySelector('#time').textContent = updateTime;

        //content to page
        div.appendChild(h2);
        //h2.textContent = props.description;

        h2.appendChild(p);
        p.textContent = props.code + ' ' + props.rate_float;
        p.classList.add('ml-md-5');

        document.querySelector('.disclaimer').textContent = disclaimer;
    };
};

bitcoinPrices();


//setInterval( bitcoinData, 1000);