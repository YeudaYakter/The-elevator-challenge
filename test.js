class Floor {
    constructor(floornum, element) {
        this.floornum = floornum;
        this.element = element;
    }
}

class Elevator {

    constructor(currentPosition, isMoving) {
        this.currentPosition = 0;
        this.isMoving = false;

    }

    async moveToFloor(floor) {
        if (this.isMoving)
            return;

        this.isMoving = true;
        const targetPosition = floor.floornum * 110; // גובה כל קומה
        const elevatorElement = document.getElementById('elevator');
        elevatorElement.style.bottom = `${targetPosition}px`;

        const distance = Math.abs(this.currentPosition - floor.floornum);
        const duration = distance * 0.5 * 1000;
        await new Promise(resolve => setTimeout(resolve, duration + 2000)); // זמן נסיעה + עיכוב

        this.currentPosition = floor.floornum;
        this.isMoving = false;
        floor.element.querySelector('button').style.color = 'black'; // חזרה לצבע המקורי
        // השמעת קול הגעה
        const dingSound = new Audio('ding.mp3');
        dingSound.play();
    }
}

const building = document.getElementById('building');
const elevatorElement = document.getElementById('elevator');
const floors = [];
const elevator = new Elevator(1, elevatorElement);

for (let i = 0; i <= 24; i++) {
    const floorElement = document.createElement('div');
    floorElement.classList.add('floor');
    floorElement.innerHTML = `<p>Floor ${i}</p>
                              <button class="metal linear" onclick="moveElevator(${i})">${i}</button>`;
    building.appendChild(floorElement);
    floors.push(new Floor(i, floorElement));
}

function moveElevator(floorNum) {
    const floor = floors[floorNum];
    const button = floor.element.querySelector('button');
    button.style.color = 'green'; // שינוי צבע לירוק
    elevator.moveToFloor(floor);
}