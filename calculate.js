function updater () {
    var selfLP = document.getElementById('selfLP').value;
    var oppLP = document.getElementById('oppLP').value;
    var oppLV = document.getElementById('oppLV').value;
    var oppATK = document.getElementById('oppATK').value;
    var damage = 3500 + Math.max(0,oppLP-selfLP) + 200*oppLV - oppATK;
    
    document.getElementById('damage').innerText = damage;
}
