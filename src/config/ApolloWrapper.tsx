"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

export function createApolloClient() {
    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_STAGGING_V1,

        fetchOptions: { cache: "no-store" },
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}

type TProps = {
    children: any
}

export function ApolloWrapper({ children }: TProps) {
    return (
        <ApolloNextAppProvider makeClient={createApolloClient}>
            {children}
        </ApolloNextAppProvider>
    );
}