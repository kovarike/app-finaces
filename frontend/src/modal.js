
export function Open(){
    document.querySelector('.modal-overlay').classList.add('active');

};
document.getElementById('open').addEventListener("click", () => Open())


export function Close(){
    document.querySelector('.modal-overlay').classList.remove('active');
};
document.getElementById('close').addEventListener("click", () => Close())

