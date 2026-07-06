let observers=[]
function attach(observer){
    observers.push(observer)
}
function detach(observer){
    let newObservers=[]
    for(let i of observers){
        if(i!=observer){
            newObservers.push(i)
        }
    }
    observers=newObservers
}
function notify(){
    for(let i of observers){
        console.log(i+": Notified")
    }
}
attach("A")
attach("B")
notify()
attach("C")
detach("B")
notify()

const age=21;
if(age<18){
    console.log("Not Eligible")
}
else if(age==18){
    console.log("Eligible, Congrats")
}
else{
    console.log("Eligible")
}

// let observers = [];
// function attach(type) {
//     observers.push(type);
// }
// function detach(type) {
//     let newObservers = [];
//     for (let observer of observers) {
//         if (observer != type) {
//             newObservers.push(observer);
//         }
//     }
//     observers = newObservers;
// }
// function notify(message) {
//     console.log("\nAnnouncement:");
//     for (let observer of observers) {
//         console.log(observer + " subscribers received: " + message);
//     }
// }
// attach("Holiday");
// attach("Exam");
// attach("Festival");
// notify("Tomorrow is a holiday!");
// notify("Prepare well for exams!");
// detach("Festival");
// notify("Welcome back to school!");