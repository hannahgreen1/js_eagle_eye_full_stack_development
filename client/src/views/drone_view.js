const PubSub = require('../helpers/pub_sub.js');
const GlobeView = require('./globe_view.js');

const DroneView = function (container) {
    this.container = container;
};

DroneView.prototype.bindEvents = function () {
    PubSub.subscribe('Drones:selected-strike', (droneData) => {
        this.render(droneData);
    })

};



DroneView.prototype.render = function (droneData) {
  this.container.innerHTML = " ";
    const strikeTown = document.createElement('p');
    const strikeDate = document.createElement('p');
    const strikeNarrative = document.createElement('p');
    const strikeDeaths = document.createElement('p');
    const strikeInjuries = document.createElement('p');
    const strikeSummary = document.createElement('p');
    strikeTown.textContent = "Town : " + droneData.detail.town;
    strikeDate.textContent = "Date : " + droneData.detail.date;
    strikeDeaths.textContent = "Total Deaths : " + droneData.detail.deaths;
    strikeInjuries.textContent = "Total Injuries : " + droneData.detail.injuries;
    strikeSummary.textContent = droneData.detail.bij_summary_short;
    this.container.appendChild(strikeTown);
    this.container.appendChild(strikeDate);
    this.container.appendChild(strikeDeaths);
    this.container.appendChild(strikeInjuries);
    this.container.appendChild(strikeSummary);
};
module.exports = DroneView;
