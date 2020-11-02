import { StopTrainingComponent } from './stop-training.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() exitTraining = new EventEmitter();
  process: number = 0;
  timer: any
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.process += 5;
      if (this.process >= 100) {
        clearInterval(this.timer);
      }
    }, 1000)
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        process: this.process
      }
    });

    dialogRef.afterClosed().subscribe(rs => {
      if (rs) {
        this.exitTraining.emit();
      } else {
        this.startOrResumeTimer();
      }
    })
  }
}
