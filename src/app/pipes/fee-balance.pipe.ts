import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feeBalance',
})
export class FeeBalancePipe implements PipeTransform {
  transform(value: unknown): string {
    return `Fee balance Ksh. ${value}`;
  }
}
