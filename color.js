document.getElementById('color-picker-main').addEventListener('input', function() {
    document.querySelector('.primary-color').style.backgroundColor = this.value;
});

document.getElementById('color-picker-secondary').addEventListener('input', function() {
    document.querySelectorAll('.secondary-color').forEach(function(div) {
        div.style.backgroundColor = this.value;
    }.bind(this));
});

document.getElementById('color-picker-tertiary').addEventListener('input', function() {
    document.querySelector('.tertiary-color').style.backgroundColor = this.value;
});




const colorPickerMain = document.getElementById('color-picker-main');

function changeColor(colorPicker){
    document.querySelector('.primary-color').style.backgroundColor = colorPicker.value;
}
colorPickerMain.addEventListener('input', function(){
    changeColor(colorPickerMain);
});