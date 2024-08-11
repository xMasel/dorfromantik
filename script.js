
function calculate(){
    let tasksForest = Number(document.getElementById("tasksForest").value);
    let tasksField = Number(document.getElementById("tasksField").value);
    let tasksVillage = Number(document.getElementById("tasksVillage").value);
    let tasksRail = Number(document.getElementById("tasksRail").value);
    let tasksRiver = Number(document.getElementById("tasksRiver").value);

    let taskSum = tasksForest + tasksField + tasksVillage + tasksRail + tasksRiver;
    document.getElementById("taskSum").innerHTML = taskSum;

    let bonusForest = Number(document.getElementById("bonusForest").value);
    let bonusField = Number(document.getElementById("bonusField").value);
    let bonusVillage = Number(document.getElementById("bonusVillage").value);
    let bonusRail = Number(document.getElementById("bonusRail").value);
    let bonusRiver = Number(document.getElementById("bonusRiver").value);

    let bonusSum = bonusForest + bonusField + bonusVillage + bonusRail + bonusRiver;
    document.getElementById("bonusSum").innerHTML = bonusSum;
    
    let extraPoints = Number(document.getElementById("extras").value);

    let result = taskSum + bonusSum + extraPoints
    document.getElementById("result").innerHTML = result;
}


