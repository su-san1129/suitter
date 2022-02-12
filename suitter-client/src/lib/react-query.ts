import {QueryClient, UseQueryOptions, UseMutationOptions, DefaultOptions} from 'react-query';
import {PromiseValue} from 'type-fest';
import {AxiosError} from "axios";

const queryConfig: DefaultOptions = {
  queries: {
    // ウィンドウにフォーカスされると再取得を行う
    refetchOnWindowFocus: false,
    // 失敗したときに再取得を行うか
    retry: false,
  },
};

export const queryClient = new QueryClient({defaultOptions: queryConfig});
export type QueryConfig<FetcherFnType extends (...args: any) => any> = UseQueryOptions<
    PromiseValue<ReturnType<FetcherFnType>>
    >;
export type MutationConfig<FetcherFnType extends (...args: any) => any> = UseMutationOptions<PromiseValue<ReturnType<FetcherFnType>>,
    AxiosError,
    Parameters<FetcherFnType>[0]>;