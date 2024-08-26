import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchRoute'
})
export class MatchRoutePipe implements PipeTransform {
  transform(currentUrl: string, routes: string[]): boolean {
    return routes.some(route => currentUrl.startsWith(route));
  }
}
