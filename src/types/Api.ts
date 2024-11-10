import { Food, Mood as Perfume } from "./Mood";

export enum PrintStatus {
  PRINTING = "PRINTING",
  COMPLETED = "COMPLETED",
  NOT_FOUND = "NOT_FOUND",
}

type Timestamp = number;

export interface PrintRequest {
  task_id: Timestamp;
  perfume: Perfume;
  food: Food;
  customerName: string;
  reason: string;
  joyfulValue: number;
  emotionValue: number;
}

export interface PrintResponse {
  message: string;
  task_id: Timestamp;
}

export interface PrintStatusResponse {
  task_id: Timestamp;
  status: PrintStatus;
}
