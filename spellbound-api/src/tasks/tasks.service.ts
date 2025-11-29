import { Injectable } from '@nestjs/common';
import { ITask, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { AddTaskDto } from './dto/add-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getTasks(): ITask[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTaskFilterDto): ITask[] {
    let tasks = this.getTasks();

    if (filterDto.status) {
      tasks = tasks.filter((task) => task.status === filterDto.status);
    }

    if (filterDto.search) {
      tasks = tasks.filter((task) => {
        if (
          task.title.includes(filterDto.search!) ||
          task.description.includes(filterDto.search!)
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return tasks;
  }

  getTaskById(id: string): ITask | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(addTaskDto: AddTaskDto): ITask {
    const { title, description } = addTaskDto;

    const task: ITask = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): void {
    const task = this.getTaskById(id);

    if (task) {
      task.status = status;
    }
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
