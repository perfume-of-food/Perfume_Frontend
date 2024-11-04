import { config } from "@/config";
import { PrintRequest, PrintResponse, PrintStatusResponse } from "@/types/Api";

// 简化错误处理，只做基本的响应解析
const handleResponse = async (response: Response) => {
  const data = await response.json();
  return {
    data,
    status: response.status,
  };
};

// 开始打印任务
export const startPrint = async (
  printData: PrintRequest
): Promise<{ data: PrintResponse; status: number }> => {
  const response = await fetch(`${config.apiBaseUrl}/print`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(printData),
  });

  return handleResponse(response);
};

// 获取打印状态
export const getPrintStatus = async (
  taskId: number
): Promise<{ data: PrintStatusResponse; status: number }> => {
  const response = await fetch(`${config.apiBaseUrl}/print?task_id=${taskId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse(response);
};
