import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-stop-training',
    template: `<h1>Are you sure?</h1>
                <mat-dialog-content>Are you got {{data.process}}%</mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-button [mat-dialog-close]='true'>Yes</button>
                    <button mat-button [mat-dialog-close]='false'>No</button>
                </mat-dialog-actions>
    `
})

export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    }
}