import { trigger, state, transition, style, animate } from '@angular/animations';

export const onOpacityAnimation = 
    trigger('onOpacityAnimation', [
        transition(':enter', [
            style({ opacity: '0' }),
            animate('.3s',
                style({ opacity: '1', }))
        ]),
        transition(':leave', [
            style({ opacity: '*' }),
            animate('0.5s',
                style({ opacity: '0', }))
        ])
    ]);
