import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number | null | undefined, currencySymbol: string = '$', decimalSeparator: string = ',', thousandsSeparator: string = '.'): string | null {
    if (value === null || value === undefined) {
      return null;
    }
    
    const fixedValue = value.toFixed(2);
    const [integerPart, decimalPart] = fixedValue.split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

    return `${currencySymbol}${formattedIntegerPart}${decimalSeparator}${decimalPart}`;
  }
}
