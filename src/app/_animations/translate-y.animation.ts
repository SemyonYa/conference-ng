import { trigger, state, transition, style, animate } from '@angular/animations';

export const translateYAnimation =
    trigger('translateYAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(20px)',
                opacity: '0'
            }),
            animate('.3s ease-in-out',
                style({
                    transform: '*',
                    opacity: 1
                }))
        ]),
        transition(':leave', [
            style({ opacity: '*' }),
            animate('0.2s',
                style({ opacity: '0' }))
        ])
    ]);
