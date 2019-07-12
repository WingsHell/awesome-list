export class Task {

  static readonly promodoroLimit: number = 5; // nb max of promodoros
  completed: boolean; // task done or not
  done: number; // nb promodorors done
  title: string; // task title
  todo: number; // nb of promodoros planned

  constructor(options: {
    completed?: boolean,
    done?: number,
    title?: string,
    todo?: number
  } = {}) {
    this.completed = options.completed || false;
    this.done = options.done || 0;
    this.title = options.title || '';
    this.todo = options.todo || 1;
  }
}
