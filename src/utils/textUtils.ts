export function formatMessage(message: string, variables: { [key: string]: string }): string {
  return message.replace(/{(\w+)}/g, (match, key) => variables[key] || match);
} 