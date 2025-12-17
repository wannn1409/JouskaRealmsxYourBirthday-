function showBirthday() {
    const name = document.getElementById("nameInput").value;

    if (name === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    document.getElementById("nameOutput").innerText = name;
    document.getElementById("inputSection").classList.add("hidden");
    document.getElementById("cardSection").classList.remove("hidden");
}

function reset() {
    document.getElementById("nameInput").value = "";
    document.getElementById("cardSection").classList.add("hidden");
    document.getElementById("inputSection").classList.remove("hidden");
}
