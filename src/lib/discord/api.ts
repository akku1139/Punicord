const APIVersion = 10;

export async function api(method: "GET"|"POST"|"DELETE"|"PATCH", endpoint: string): Promise<Response> {
  return fetch(
    "https://discord.com/api/v"+APIVersion+"/"+endpoint,
    {
      headers: {
        Authorization: "", // TODO Token管理
        // UA: 普通ユーザーなら問題ないかなぁ?
      },
      method: method,
    }
  )
}
