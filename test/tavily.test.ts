import assert from "node:assert/strict";
import { test } from "node:test";
import { mapTavilyResponse, searchBody, searchHeaders } from "../dist/tavily.js";

test("keyless header when no key", () => {
  const headers = searchHeaders();
  assert.equal(headers["x-tavily-access-mode"], "keyless");
  assert.equal(headers.authorization, undefined);
});

test("bearer header when key is set", () => {
  const headers = searchHeaders("tvly-test");
  assert.equal(headers.authorization, "Bearer tvly-test");
  assert.equal(headers["x-tavily-access-mode"], undefined);
});

test("search body stays small", () => {
  const body = JSON.parse(searchBody("dsh web_search", 5));
  assert.equal(body.query, "dsh web_search");
  assert.equal(body.max_results, 5);
  assert.equal(body.include_images, false);
});

test("mapTavilyResponse keeps url title snippet", () => {
  const result = mapTavilyResponse({
    answer: "ignored unless present",
    results: [
      { url: "https://example.com", title: "Example", content: "hello" },
      { url: "", title: "drop" },
      { title: "no url" },
    ],
  });
  assert.equal(result.sources.length, 1);
  assert.equal(result.sources[0]?.url, "https://example.com");
  assert.equal(result.sources[0]?.title, "Example");
  assert.equal(result.sources[0]?.snippet, "hello");
  assert.equal(result.content, "ignored unless present");
});
