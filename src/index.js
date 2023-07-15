import './index.html';
import './index.sass';
import code from './img/1680683.jpg'
import { mult, sum} from './modules/calc';

const imgWrapper = document.querySelector('.img-wrapper');
const img = new Image();
img.src = code;
img.width = 300;
imgWrapper.append(img);


console.log(mult(3, 4));
console.log(sum(3, 4));