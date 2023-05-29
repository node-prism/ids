# ids

[![NPM version](https://img.shields.io/npm/v/@prsm/ids?color=a1b858&label=)](https://www.npmjs.com/package/@prsm/ids)

Short, obfuscated, collision-proof, reversible IDs.

```typescript
import ID from "@prsm/ids";

// Provide your own alphabet with URL-friendly characters.
ID.alphabet = "GZwBHpfWybgQ5d_2mM-jh84K69tqYknx7LN3zvDrcSJVRPXsCFT";

ID.encode(12389125); // phsV8T
ID.decode("phsV8T"); // 12389125
```
