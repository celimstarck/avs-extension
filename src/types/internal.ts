export type TriggerType = 'execute';

export enum InternalMessageType {
  TransactionEvent,
}

export type InternalMessage = {
  type: InternalMessageType.TransactionEvent;
};
