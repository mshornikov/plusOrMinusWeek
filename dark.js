// на старте тёмная тема не установлена
let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(dark);
// получаем доступ ко всей странице и к абзацу с переключателем
var body = document.body;
var p = document.querySelector('.theme-button');

const darkIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 42q-7.5 0-12.75-5.25T6 24q0-6.75 3.975-11.45Q13.95 7.85 20.4 6.5q2.05-.4 2.8.7t-.05 3q-.45 1.15-.7 2.35-.25 1.2-.25 2.45 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q1.25 0 2.425-.225 1.175-.225 2.275-.625 2.15-.8 3.2.075 1.05.875.55 2.975-1.35 6.05-6.05 10.025Q30.7 42 24 42Z"/></svg>';
const lightIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 34q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425Z"/></svg>';

// эта функция будет срабатывать при нажатии на переключатель
function darkLight() {
    // если тёмная тема не активна
    if (dark) {
        // добавляем класс с тёмной темой ко всей странице
        body.className = 'dark-theme';
        // меняем надпись на переключателе
        p.innerHTML = lightIcon;
        // a если активна -
    } else {
        // добавляем класс со светлой темой ко всей странице
        body.className = '';
        // меняем надпись на переключателе
        p.innerHTML = darkIcon;
    }

    // меняем значение темы на противоположное
    dark = !dark;
}

darkLight()
