import './index.css';
import numeral from 'numeral';

const currencyValue = numeral(123000).format('$0,000.00');
debugger;
console.log(`currency super man it is changing ${currencyValue}`);
