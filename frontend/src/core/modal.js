
export function Open(){
    document.querySelector('.modal-overlay').classList.add('active');

};
document.getElementById('open').addEventListener("click", () => Open())


export function Close(){
    document.querySelector('.modal-overlay').classList.remove('active');
};
document.getElementById('close').addEventListener("click", () => Close())






export function OpenCalc() {
    document.querySelector('.calc').classList.add('active');
}
document.getElementById('calc').addEventListener('click', () => OpenCalc());

export function CloseCalc(){
    document.querySelector('.calc').classList.remove('active');
};
document.getElementById('close-calc').addEventListener("click", () => CloseCalc());
