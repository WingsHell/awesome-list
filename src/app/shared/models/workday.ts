import { Task } from './task';

export class Workday {
  id: string; // workday id
  dueDate: number; // workday date planned
  notes?: string; // any notes made by user if wanted
  tasks: Task[]; // task list to do
  userId: string; // user id

  construcor(options: {
    id?: string;
    dueDate?: number;
    notes?: string;
    tasks?: Task[];
    userId: string;
  }) {
    this.id = options.id || null;
    this.dueDate = options.dueDate || 0;
    this.notes = options.notes || '';
    this.tasks = [new Task()];
    this.userId = options.userId;
  }
}
