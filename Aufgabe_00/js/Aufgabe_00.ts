document.addEventListener("DOMContentLoaded", function(): void {
    var name: string = prompt("Wie ist dein Name?", "Name");
    var container: HTMLElement = document.getElementById("hallo");
    container.innerHTML = "Hallo " + name + ", moege die Macht mit dir sein!";
}
);