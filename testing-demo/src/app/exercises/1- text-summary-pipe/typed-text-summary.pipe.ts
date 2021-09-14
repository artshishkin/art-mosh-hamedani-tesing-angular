import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'typedTextSummary'
})
export class TypedTextSummaryPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    if (!value)
      return '';

    const limit = args || 10;
    return (value.length <= limit) ? value : value.substr(0, limit) + '...';
  }

}
