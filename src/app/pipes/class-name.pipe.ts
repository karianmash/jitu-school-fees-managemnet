import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'className',
})
export class ClassNamePipe implements PipeTransform {
  transform(classNumber: number): string {
    return `${'Class ' + classNumber}`;
  }
}
