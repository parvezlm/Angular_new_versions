import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'textSlice',
    standalone: true
})
export class TextSlicePipe implements PipeTransform {
    transform(value: any) {
        return value?.slice(0, 25) + '...';
    }
}