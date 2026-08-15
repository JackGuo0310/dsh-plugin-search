import { tavilySearch } from "./tavily.js";

export const name = "dsh-plugin-search";
export const inject = ["web"];
export const PROVIDER_ID = "simple-search";

interface WebSearchRequest {
  query: string;
  maxResults?: number;
}

interface WebRuntime {
  registerSearchProvider(provider: {
    id: string;
    available(): boolean;
    search(request: WebSearchRequest, signal?: AbortSignal): Promise<unknown>;
  }): unknown;
}

interface DshContext {
  web: WebRuntime;
}

function resolveApiKey(): string | undefined {
  const key = process.env.TAVILY_API_KEY?.trim();
  return key ? key : undefined;
}

export function apply(ctx: DshContext): void {
  ctx.web.registerSearchProvider({
    id: PROVIDER_ID,
    available: () => true,
    search: (request, signal) =>
      tavilySearch({
        query: request.query,
        maxResults: request.maxResults,
        apiKey: resolveApiKey(),
        signal,
      }),
  });
}
