var param = "daily";
var saved;

getData();
function getData() {
    fetch('data.json ').then(response => {
        return response.json();
    }).then(data => {
        this.saved = data;
        appendData(data);
    })
        .catch(err => {
            console.log(err);
        })

}

function appendData(data) {

    const mainContainer = document.getElementById('cards');

    console.log(data);
    data.forEach((element, index) => {
        const card = document.createElement('div');
        card.classList = 'card-body'
        console.log("elemet", element)

        console.log("eachCard", data[index])

        const content = `
    <div id="card-${element.title}" class="card">
    <div class="images">
      <img src=./images/icon-work.svg" alt="work-icon" />
    </div>
    <div class="infos">
      <div class="title">
        <h2 id="card-name">${element.title}</h2>
        ...
      </div>
      <div class="time">
        <h1 id="card-time-current-${index}">${element.timeframes.daily.current}hrs</h1>
        <p id="card-time-previous-${index}">Last Day - ${element.timeframes.daily.previous}hrs</p>
      </div>
    </div>
  </div>
    `;
        mainContainer.innerHTML += content;

    });
}
function changeParams(params) {
    var data = this.saved;
    this.param = params;
    data.forEach((el, idx) => {
        if (this.param == "daily") {
            document.getElementById(`card-time-current-${idx}`).textContent = el.timeframes.daily.current + "hrs";
            document.getElementById(`card-time-previous-${idx}`).textContent = "Last Day - " + el.timeframes.daily.previous + "hrs";
        } else if (this.param == "weekly") {
            document.getElementById(`card-time-current-${idx}`).textContent = el.timeframes.weekly.current + "hrs";
            document.getElementById(`card-time-previous-${idx}`).textContent = "Last Week - " + el.timeframes.weekly.previous + "hrs";
        } else {
            document.getElementById(`card-time-current-${idx}`).textContent = el.timeframes.monthly.current + "hrs";
            document.getElementById(`card-time-previous-${idx}`).textContent = "Last Month - " + el.timeframes.monthly.previous + "hrs";
        }
    })
}