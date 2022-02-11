import {DefaultOptions} from "react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    // ウィンドウにフォーカスされると再取得を行う
    refetchOnWindowFocus: false,
    // 失敗したときに再取得を行うか
    retry: false,
  },
};