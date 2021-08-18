import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import CardGame from './src/components/CardGame';

// toda variável com $ guarda um elemento da tela
const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
