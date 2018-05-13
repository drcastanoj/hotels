import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'pointReplacer'
})
export class PointReplacerPipe extends DecimalPipe {

  public transform(value: string): string {
    if (value) {
      return value.toString().replace(',', '.');
    }
    return '';
  }
}