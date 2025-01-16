# Node.js Server Crash Bug
This repository demonstrates a common Node.js server bug involving unhandled exceptions and its solution.

## Bug Description
The provided code creates a simple HTTP server. However, it lacks proper error handling.  If an unexpected error occurs (e.g., during file I/O), the server will crash without any indication.

## Solution
The solution incorporates a `try...catch` block to gracefully handle potential errors, preventing the server from crashing and providing informative logging.