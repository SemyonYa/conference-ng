import { trigger, transition, style, animate } from '@angular/animations';

export const translateScaleAnimation =
    trigger('translateScaleAnimation', [
        transition(':enter', [
            style({
                transform: 'scale(.97)',
                opacity: '0'
            }),
            animate('.3s ease-in',
                style({
                    transform: '*',
                    opacity: 1
                }))
        ]),
        transition(':leave', [
            style({ opacity: '*' }),
            animate('0.1s',
                style({ opacity: '0' }))
        ])
    ]);
