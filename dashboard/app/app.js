const containerEl = document.getElementById('container')

let range  = document.querySelectorAll('.date button');
let data  =[];

let timeframes = 'weekly'

async function getData(){
    const res = await fetch('data/data.json')
    data = await res.json()
    displayData(timeframes)
}
getData()

function displayData(timeframe){
    containerEl.querySelectorAll('.card').forEach(card => card.remove())
    data.forEach(stat => {
        const item = document.createElement('div');
        item.classList.add('card',`${stat.title.toLowerCase().replace(' ','-')}-card`);

        const timeframesData = stat.timeframes[timeframe];
        const previous = timeframe === 'daily' ? 'Yestarday' : timeframe === 'weekly' ? 'Last Week' : 'Last Month'

        item.innerHTML = `
            <div class ="card-top"></div>
            <div class ="card-bottom">
                <div class="card-header">
                    <p class="title">${stat.title}</p>
                    <div class="menu"><span class="material-symbols-outlined">
                    more_horiz
                    </span></div>
                </div>
                <div class="time">
                <p class="current">${timeframesData.current}hrs</p>
                <p class="previous">${previous} <span class="previous-hrs">${timeframesData.previous}</span>hrs</p>
                </div>
            </div>
        `
        containerEl.appendChild(item);
    })

    range.forEach(item =>{
        item.addEventListener('click',()=>{
            timeframes = item.id
            range.forEach(b =>b.classList.remove('active'))
            item.classList.add('active');
            displayData(timeframes)
        })
    })

}