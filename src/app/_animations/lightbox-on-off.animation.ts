import { trigger, state, transition, style, animate } from '@angular/animations';

export const lightboxOnOffAnimation =
    trigger('lightboxOnOffAnimation', [
        transition(':enter', [
            style({ opacity: '0' }),
            animate('.3s',
                style({ opacity: '1', }))
        ]),
        transition(':leave', [
            style({
                opacity: '*',
                transform: '*'
            }),
            animate('0.2s',
                style({
                    opacity: '0',
                    transform: 'translateY(50px)'
                }))
        ])
    ]);
