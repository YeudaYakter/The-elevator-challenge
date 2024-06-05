

class Floor {
  constructor(floornum, main,height,timer ) {
      this.floornum = floornum;
      this.main = main;
      this.height=height
      this.timer=timer
      
  }
  onclicka(h) {
    var elevator = document.querySelector('.elevator');
     elevator.classList.remove("elevator-upb");
     elevator.classList.add("elevator-up");
     elevator.style.setProperty('--end-pos', '0');
     elevator.style.setProperty('--start-pos', `${this.height}px`);
     console.log(elevators[0].place=this.height)
     console.log(this.height)

}
}
class Elevetr {
  constructor(numl,time,place,obj) {
      this.numl = numl;
      this.time=time 
      this.place=place
      this.obj=obj
  }

}
let neweleators = document.querySelector('.elevator')

const elevators = [];

for (let i = 1; i <= 3; i++) {
  let elevatordiv = document.createElement("div");
  elevatordiv.classList.add('elevator');
  neweleators.appendChild(elevatordiv);
  var elevatora = new Elevetr(i, 0, 0,elevatordiv);
  elevators.push(elevatora);
}

// הדפסת האובייקטים שנוצרו
console.log(elevators);
console.log(elevators[0].place)

let beldeng = document.querySelector('.floor')

const new_list_of_floors = [];

for (let i = 24; i >= 0; i--) {
  let floorDiv = document.createElement("div");
  floorDiv.classList.add('floor');

  let floorNumber = document.createElement("p");
  floorNumber.textContent = i;
  floorDiv.appendChild(floorNumber);

  let button = document.createElement("button");
  button.textContent = i;
  
  floorDiv.appendChild(button);

  building.appendChild(floorDiv);

  let floora = new Floor(i, floorDiv, -(i) * 117, 0);
  button.onclick = () => floora.onclicka(i*78) 
  new_list_of_floors.push(floora);
}



console.log(new_list_of_floors);











  

  

  







// class Floor {
//   constructor(floornum, main, height, timer) {
//       this.floornum = floornum;
//       this.main = main;
//       this.height = height;
//       this.timer = timer;
//   }

//   onclicka() {
//       let selectedElevator = selectElevator(this.height);
//       if (selectedElevator) {
//           selectedElevator.addCall(this.height);
//       }
//   }
// }

// class Elevator {
//   constructor(numl, time, place, obj) {
//       this.numl = numl;
//       this.time = time;
//       this.place = place;
//       this.obj = obj;
//       this.callQueue = [];
//       this.isMoving = false;
//   }

//   addCall(targetHeight) {
//       this.callQueue.push(targetHeight);
//       if (!this.isMoving) {
//           this.processQueue();
//       }
//   }

//   async processQueue() {
//       while (this.callQueue.length > 0) {
//           this.isMoving = true;
//           let targetHeight = this.callQueue.shift();
//           await this.move(targetHeight);
//           await this.stopAtFloor();
//       }
//       this.isMoving = false;
//   }

//   move(targetHeight) {
//       return new Promise(resolve => {
//           let distance = Math.abs(this.place - targetHeight);
//           let travelTime = (distance / 117) * 500; // חישוב זמן הנסיעה
//           this.obj.style.transition = `transform ${travelTime}ms`;
//           this.obj.style.transform = `translateY(${targetHeight}px)`;
//           this.place = targetHeight;
//           setTimeout(() => resolve(), travelTime);
//       });
//   }

//   stopAtFloor() {
//       return new Promise(resolve => {
//           setTimeout(() => resolve(), 2000); // עצירה בקומה ל-2 שניות
//       });
//   }
// }

// // פונקציה לבחירת המעלית המתאימה
// function selectElevator(targetHeight) {
//   let selectedElevator = null;
//   let minDistance = Infinity;

//   elevators.forEach(elevator => {
//       if (!elevator.isMoving) {
//           let distance = Math.abs(elevator.place - targetHeight);
//           if (distance < minDistance) {
//               minDistance = distance;
//               selectedElevator = elevator;
//           }
//       }
//   });

//   // אם כל המעליות בתנועה, נבחר את המעלית שתהיה פנויה הכי קרוב
//   if (!selectedElevator) {
//       elevators.forEach(elevator => {
//           let distance = Math.abs(elevator.place - targetHeight);
//           if (distance < minDistance) {
//               minDistance = distance;
//               selectedElevator = elevator;
//           }
//       });
//   }

//   return selectedElevator;
// }

// let building = document.querySelector('.floor');
// let elevatorContainer = document.querySelector('.elevator');
// const elevators = [];

// for (let i = 1; i <= 3; i++) {
//   let elevatorDiv = document.createElement("div");
//   elevatorDiv.classList.add('elevator');
//   elevatorContainer.appendChild(elevatorDiv);
//   let elevator = new Elevator(i, 0, 0, elevatorDiv);
//   elevators.push(elevator);
// }

// console.log(elevators);
// console.log(elevators[0].place);

// const floors = [];

// for (let i = 24; i >= 0; i--) {
//   let floorDiv = document.createElement("div");
//   floorDiv.classList.add('floor');

//   let floorNumber = document.createElement("p");
//   floorNumber.textContent = i;
//   floorDiv.appendChild(floorNumber);

//   let button = document.createElement("button");
//   button.textContent = `קומה ${i}`;
//   floorDiv.appendChild(button);

//   building.appendChild(floorDiv);

//   let floor = new Floor(i, floorDiv, -(i) * 117, 0); // גובה כל קומה 117 פיקסלים
//   button.onclick = () => floor.onclicka(); 
//   floors.push(floor);
// }

// console.log(floors);