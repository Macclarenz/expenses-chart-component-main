import react, {useEffect} from "react";

// Data
import data from '../data.json'

export default function BarChart() {
    let highestAmount = [0, 100]
    let controlSize = 1.25

    data.forEach(el => {
        if (el.amount > highestAmount[0]) highestAmount[0] = el.amount
    })    


    const barData = data.map((el, i) => {
        const computeBarSize = ((el["amount"] / highestAmount[0]) * highestAmount[1]) * controlSize
        
        return (
            <div key={i} className="bar-container">
                <p className="data">${el["amount"]}</p>
                <div className="bar" data-value={el["amount"]} style={{height: computeBarSize}} onMouseOver ={mouseOverHandler} onMouseOut = {mouseOutHandler}></div>
                <p className="day">{el["day"]}</p>
            </div>
        )
    })

    useEffect(() => {
        const bars = document.querySelectorAll('.bar')
        bars.forEach(el => {     
            if (highestAmount[0] === parseFloat(el.dataset.value)) {
                el.setAttribute('highest', '')
            }
        })
        
        return
    })

    return (
        <div className="bar-chart-container">
            <h1>Spending - Last 7 days</h1>
            <div className="chart-container">
                {barData}
            </div>
        </div>
    )
}

function mouseOverHandler({target}) {
    const dataMessage = target.previousElementSibling
    dataMessage.setAttribute('open', '')

    return
}

function mouseOutHandler({target}) {
    const dataMessage = target.previousElementSibling
    dataMessage.removeAttribute('open')

    return
}