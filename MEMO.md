# SvelteKitとWebSocket関連
https://stackoverflow.com/questions/76992552/sharing-functions-between-page-svelte-in-sveltekit
https://www.reddit.com/r/sveltejs/comments/o0n7g1/how_to_share_websocket_connection_across/?rdt=39201
https://github.com/sveltejs/kit/issues/1491

# Discord API関連
https://qiita.com/pik/items/2227cdf36de941176e6c

# ユーザー管理
localStrageにusersとかloginsとか作って
```json
{
  "dafault": 0,
  "users": [ // ならびをどうするか
    {
      "id": "1234567890",
      "username": "akku",
      "avatar": "12345", // 多分cdnのidだと思う
      "token": "abcdefg",

      "type": "bot",
      // or
      "bot": false,
    },
    ...
  ]
}
```
